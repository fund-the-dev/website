export default ({ children }) => (
  <section>
    {children}
    <style jsx>{`
      section {
        max-width: 1120px;
        margin: 0 auto;
        width: 100%;
      }`}
    </style>
  </section>
)
