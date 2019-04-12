import Link from 'next/link'
import App from '../components/App'
import Header from '../components/Header'
import Section from '../components/Section'
import Button from '../components/Button'
import Browse from '../components/Browse'

function Home() {
  return (
    <App>
      <Header />
      <Section>
        <h1>Browse</h1>
        <Browse />
      </Section>
    </App>
  )
}

export default Home
