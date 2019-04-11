import { useState } from 'react'
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
      <TextInput placeholder='Repository name' onChange={handleChange} />
      <Query query={repoSearch} variables={{ query }}>
        {({ loading, error, data: { search } }) => {
          if (error) return <span color="red">Error loading user</span>
          if (loading) return <p>loading</p>

          return (
            <div className="results">
              {search.edges.map(({ node }) =>
                <p
                  key={node.id}
                  onClick={() => selectRepo(node.id)}
                  className={selected === node.id ? 'selected' : ''}
                >
                  {node.nameWithOwner}
                </p>
              )}
            </div>
          )
        }}
      </Query>

      {selected && (
        <Link href={`/fund/repo?id=${selected}`}>
          <Button>Continue</Button>
        </Link>
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
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
