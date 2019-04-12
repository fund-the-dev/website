import { useState } from 'react'
import App from '../../components/App'
import Header from '../../components/Header'
import Section from '../../components/Section'
import RepoSearch from '../../components/RepoSearch'

function Fund() {
  return (
    <App>
      <Header />
      <Section>
        <RepoSearch />
      </Section>
    </App>
  )
}

export default Fund
