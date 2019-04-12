import { useState } from 'react'
import gql from 'graphql-tag'
import { GoIssueOpened, GoRepo } from 'react-icons/go'
import { Query } from 'react-apollo'
import TextInput from './TextInput'
import Button from './Button'

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
              <p style={{ marginRight: 8 }}>$</p>
              <TextInput onChange={setAmount} type="number" />
              <span style={{ marginRight: 16 }}></span>
              <Button>Fund</Button>
            </div>
          </div>
        )
      }}
    </Query>
  )
}
