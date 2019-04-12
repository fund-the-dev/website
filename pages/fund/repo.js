import { withRouter } from 'next/router'
import App from '../../components/App'
import Header from '../../components/Header'
import Section from '../../components/Section'
import IssueSelector from '../../components/IssueSelector'

function Fund({ router }) {
  return (
    <App>
      <Header />
      <Section>
        <h1>Select an issue to fund.</h1>
        <IssueSelector repoId={router.query.id} />
      </Section>
    </App>
  )
}

export default withRouter(Fund)
