import gql from 'graphql-tag'
import { Query } from 'react-apollo'

const issueQuery = gql`
  query issues($repoId:ID!) {
    node(id:$repoId) {
      ... on Repository {
        issues(states:[OPEN],first: 10) {
          nodes {
            id
            title
            number
          }
        }
      }
    }
  }
`

export default function IssueSelector({ repoId }) {
  return (
    <Query query={issueQuery} variables={{ repoId }}>
      {({ loading, error, data: { node } }) => {
        if (error) return <p>Error loading issues</p>
        if (loading) return <p>Loading...</p>

        return (
          node.issues.nodes.map(issue => (
            <p>#{issue.number} {issue.title}</p>
          ))
        )
      }}
    </Query>
  )
}
