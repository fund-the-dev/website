export default ({ children }) => (
  <main>
    {children}
    <style jsx global>{`
      * {
        font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
          'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New',
          monospace, serif;
        box-sizing: border-box;
      }

      h1, h3 {
        color: #11103E;
        text-align: center;
      }

      h3 {
        font-weight: normal;
        color: #565678;
      }
    `}</style>
  </main>
)
