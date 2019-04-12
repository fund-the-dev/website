import Link from 'next/link'
import gql from 'graphql-tag'
import { GoIssueOpened } from 'react-icons/go'
import { Query } from 'react-apollo'

const issueQuery = gql`
  query issues($repoId: ID!) {
    node(id: $repoId) {
      ... on Repository {
        nameWithOwner
        issues(
          states:[OPEN],
          first: 10,
          orderBy: { field: CREATED_AT, direction: DESC }
        ) {
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
          <div>
            <h3 style={{ marginBottom: '48px' }}>{node.nameWithOwner}</h3>
            {node.issues.nodes.map(issue => (
              <Link href={`/fund/payment?issue=${issue.id}`}>
                <p>
                  <span className="icon"><GoIssueOpened /></span>
                  <b>#{issue.number}</b>
                  {issue.title}
                </p>
              </Link>
            ))}

            <style jsx>{`
              p {
                display: flex;
                align-items: center;
                justify-content: flex-start;
                cursor: pointer;
              }
              b {
                margin-right: 8px;
              }
              .icon {
                color: #37AD0E;
                font-size: 24px;
                margin-top: 5px;
                margin-right: 16px;
              }
            `}</style>
          </div>
        )
      }}
    </Query>
  )
}
