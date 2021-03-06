export default ({ placeholder, onChange, type = 'text' }) => (
  <div style={{ width: '100%'}}>
    <input
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      min="0.01"
      step="0.01"
      max="2500"
    />
    <style jsx>{`
      input {
        border: 1px solid #D2DAF0;
        border-radius: 2px;
        color: #565678;
        max-width: 100%;
        width: 100%;
        padding: 13px 16px;
        height: 48px;
        box-shadow: none;
        letter-spacing: -0.1px;
      }

      input:focus,
      input:active {
        outline: none;
        border-color: #4950F6;
      }
    `}</style>
  </div>
)
