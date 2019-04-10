import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import Header from '../components/Header'

const viewerQuery = gql`
  query viewer {
    viewer {
      name
    }
  }
`

function Fund() {
  return (
    <Query query={viewerQuery}>
      {({ loading, error, data: { viewer } }) => {
        if (error) return <span color="red">Error loading user</span>
        if (loading) return <p>loading</p>

        return (
          <div>
            <Header />
            <p>Welcome {viewer.name}!</p>
          </div>
        )
      }}
    </Query>
  )
}

export default Fund
