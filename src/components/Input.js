import "./Input.css"

function Input({ placeholder, value, handleChange }) {
  return (
    <input className="Input" type="text" placeholder={placeholder} onChange={handleChange} />
  )
}

export default Input