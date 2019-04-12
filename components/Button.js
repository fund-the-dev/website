export default ({ onClick, disabled, children }) => [
  <a onClick={onClick}>
    {children}
    <style jsx>{`
      a {
        background: #4950F6;
        height: 48px;
        display: inline-flex;
        font-size: 14px;
        letter-spacing: 0px;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 16px;
        text-decoration: none !important;
        border: none;
        border-radius: 2px;
        cursor: pointer;
        justify-content: center;
        padding: 16px 32px;
        height: 48px;
        text-align: center;
        white-space: nowrap;
        color: #fff !important;
        transition: background .15s ease;
      }

      a:hover {
        background: #3f47f6;
      }

      ${ disabled ? `
        opacity: 0.5;
        cursor: not-allowed;
      ` : ''
      }
    `}</style>
  </a>
]
