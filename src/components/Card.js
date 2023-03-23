import './Card.css'

function Card({ title, subtitle, src, alt }) {
  return (
    <div className="Card">
      <img
        className="Card-image"
        src={src}
        alt={alt}
      />
      <p className="Card-title">{title}</p>
      <p className="Card-subtitle">{subtitle}</p>
    </div>
  )
}

export default Card