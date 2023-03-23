import { Link } from 'react-router-dom'
import './NotFound.css'

export function NotFound() {
  return (
    <div className="NotFound">
      <p className="NotFound-note">Page not found. Return <Link className="NotFound-link" to="/">home</Link></p>
    </div>
  )
}