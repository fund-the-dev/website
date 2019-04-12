import { useState } from 'react'
import useWeb3 from '../lib/use-web3'
import gql from 'graphql-tag'
import { GoIssueOpened, GoRepo } from 'react-icons/go'
import { Query } from 'react-apollo'
import TextInput from './TextInput'
import Button from './Button'
import { sendTransaction } from '../lib/web3-utils'

const issueQuery = gql`
  query issue($issueId:ID!) {
    node(id:$issueId) {
      ... on Issue {
        id
        number
        title
        repository {
          nameWithOwner
        }
      }
    }
  }
`

export default function Payment({ issueId }) {
  let [amount, setAmount] = useState(0)
  let [hasPaid, sethasPaid] = useState(false)
  const { web3, network } = useWeb3()

  const handleFundClicked = async () => {
    if (amount <= 0){
      return
    }
    const to = '0x0000000000000000000000000000000000000000' // lol rip
    try {
      await sendTransaction(web3, to, amount)
      sethasPaid(true)
    } catch (e) {
      // show some error if the tx failed
      sethasPaid(false)
      console.error(e)
    }
  }

  return (
    <Query query={issueQuery} variables={{ issueId }}>
      {({ loading, error, data: { node } }) => {
        if (error) return <p>Error loading issues</p>
        if (loading) return <p>Loading...</p>

        return (
          <div style={{ margin: '0 auto', width: '400px' }}>
            <p style={{ color: '#565678' }}>Repo:</p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ margin: '4px 8px -4px 0', fontSize: 24 }}>
                <GoRepo />
              </span>
              <b>{node.repository.nameWithOwner}</b>
            </p>
            <p style={{ color: '#565678' }}>Issue:</p>
            <p style={{ display: 'flex', alignItems: 'center' }}>
              <span style={{ margin: '4px 8px -4px 0', fontSize: 24, color: '#37AD0E' }}>
                <GoIssueOpened />
              </span>
              <b style={{ marginRight: '8px' }}>#{node.number}</b> {node.title}
            </p>
            <div style={{ display: 'flex', marginTop: '32px' }}>
              <p style={{ marginRight: 8 }}>ETH</p>
              <TextInput onChange={(e) => setAmount(e.target.value)} type="number" />
              <span style={{ marginRight: 16 }}></span>
              <Button disabled={amount <= 0} onClick={handleFundClicked}>Fund</Button>
            </div>
          </div>
        )
      }}
    </Query>
  )
}
