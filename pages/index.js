import Link from 'next/link'
import App from '../components/App'
import Header from '../components/Header'
import Section from '../components/Section'
import Button from '../components/Button'

function Home() {
  return (
    <App>
      <Header />
      <Section>
        <h1>Welcome to Fund The Dev</h1>
        <h3>Funding open source projects with prediction markets</h3>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 64 }}>
          <Link href="/fund">
            <Button>Fund Something</Button>
          </Link>
        </div>
      </Section>
    </App>
  )
}

export default Home
