import { Link } from 'react-router-dom'
import './Card.css'

function Card({ title, subtitle, src, alt, id }) {
  return (
    <Link className="Card" to={`/photos/${id}`}>
      <img
        className="Card-image"
        src={src}
        alt={alt}
      />
      <p className="Card-title">{title}</p>
      <p className="Card-subtitle">{subtitle}</p>
    </Link>
  )
}

export default Card