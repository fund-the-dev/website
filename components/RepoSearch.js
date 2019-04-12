import { useState } from 'react'
import { GoRepo } from 'react-icons/go'
import Link from 'next/link'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import TextInput from './TextInput'
import Button from './Button'

const repoSearch = gql`
query repoSearch($query:String!) {
  search(query: $query, type: REPOSITORY, first: 5) {
    edges {
      node {
        ... on Repository {
          id
          nameWithOwner
        }
      }
    }
  }
}`

const debounce = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export default function RepoSearch({ setRepo }) {
  const [query, setQuery] = useState('');
  const [selected, selectRepo] = useState(null);
  const handleChange = debounce(evt => setQuery(evt.target.value), 500)
  return (
    <div className="container">
      <h1 style={{ marginBottom: '48px' }}>Choose a GitHub Project.</h1>
      <TextInput placeholder='Repository name' onChange={handleChange} />
      <Query query={repoSearch} variables={{ query }}>
        {({ loading, error, data: { search } }) => {
          if (error) return <span color="red">Error loading user</span>
          if (loading) return <p>Loading...</p>

          return (
            <div className="results">
              {search.edges.map(({ node }) =>
                <p
                  key={node.id}
                  onClick={() => selectRepo(node.id)}
                  className={selected === node.id ? 'selected' : ''}
                >
                  <span style={{ fontSize: '24px', margin: '4px 8px -4px 0'}}>
                    <GoRepo />
                  </span>
                  {node.nameWithOwner}
                </p>
              )}
            </div>
          )
        }}
      </Query>

      {selected && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '32px' }}>
          <Link href={`/fund/repo?id=${selected}`}>
            <Button>Continue</Button>
          </Link>
        </div>
      )}

      <style jsx>{`
        .container {
          max-width: 400px;
          width: 100%;
          margin: 0 auto;
        }

        .results {
          font-size: 16px;
        }

        .selected {
          font-weight: bold;
        }

        p {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
