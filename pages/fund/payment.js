import { withRouter } from 'next/router'
import App from '../../components/App'
import Header from '../../components/Header'
import Section from '../../components/Section'
import Payment from '../../components/Payment'

function Fund({ router }) {
  return (
    <App>
      <Header />
      <Section>
        <h1 style={{ marginBottom: '32px' }}>How much will you pay?</h1> 
        <Payment issueId={router.query.issue} />
      </Section>
    </App>
  )
}

export default withRouter(Fund)
