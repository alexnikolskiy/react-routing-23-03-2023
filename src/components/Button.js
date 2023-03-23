import './Button.css'

function Button({title, ...rest}) {
  return (
    <button className="Button" {...rest}>{title}</button>
  )
}

export default Button