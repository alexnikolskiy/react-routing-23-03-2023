import "./Input.css"

function Input({ placeholder, handleChange }) {
  return (
    <input className="Input" type="text" placeholder={placeholder} onChange={handleChange} />
  )
}

export default Input