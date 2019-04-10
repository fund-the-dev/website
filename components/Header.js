import Link from 'next/link'
import { withRouter } from 'next/router'

const Header = ({ router: { pathname } }) => (
  <header>
    <div className='container'>
      <Link prefetch href='/'>
        <img src='/static/logo.svg' width='32' height='32' />
      </Link>
    </div>

    <style jsx>{`
      header {
        padding: 24px 48px;
        margin-bottom: 25px;
      }
      a {
        font-size: 14px;
        margin-right: 15px;
        text-decoration: none;
      }
      .is-active {
        text-decoration: underline;
      }
      .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1120px;
        margin: 0 auto;
        width: 100%;
      }
    `}</style>
  </header>
)

export default withRouter(Header)
