import { withRouter } from 'next/router'
import App from '../components/App'
import Header from '../components/Header'
import Section from '../components/Section'
import PendingMarket from '../components/PendingMarket'

function Fund({ router }) {
  return (
    <App>
      <Header />
      <Section>
        <h1 style={{ marginBottom: '32px' }}>Do you accept?</h1>
        <PendingMarket issueId={router.query.issue} />
      </Section>
    </App>
  )
}

export default withRouter(Fund)
