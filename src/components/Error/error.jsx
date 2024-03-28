import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
  return (
    <div className="errorContainer">
      <h2 className="errorCode">404</h2>
      <span className="errorMessage">
        Oups! La page que vous demandez n'existe pas.
      </span>
      <Link className="errorReturn" to="/">
        Retourner sur la page d'accueil
      </Link>
    </div>
  )
}

export default Error
