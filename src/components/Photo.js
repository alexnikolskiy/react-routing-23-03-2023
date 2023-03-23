import { Link, useParams } from 'react-router-dom'
import './Photo.css'

export function Photo({ photos }) {
  const { id } = useParams()
  const photo = photos.find(photo => photo.id === id)

  return (
    <div className="Photo">
      <Link className="Photo-goback" to="/">⟵ Go back</Link>
      {
        photo ?
          <>
            <img className="Photo-image" src={photo.src} alt={photo.alt} />
            <p className="Photo-title">{photo.title}</p>
            <p className="Photo-subtitle">{photo.subtitle}</p>
          </>
          : <p className="Photo-note">No photo with such id</p>
      }
    </div>
  )
}