import { Link } from 'react-router-dom'

function Error() {
  return (
    <div>
      <h2>404</h2>
      <span>Oups! La page que vous demandez n'existe pas.</span>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </div>
  )
}

export default Error
