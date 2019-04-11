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
        <IssueSelector repoId={router.query.id} />
      </Section>
    </App>
  )
}

export default withRouter(Fund)
