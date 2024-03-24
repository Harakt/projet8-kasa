import { Link } from 'react-router-dom'
import './header.scss'

function Header() {
  return (
    <nav className="navContainer">
      <Link to="/">
        <img src="./src/assets/LOGO.svg" alt="" />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/propos">A Propos</Link>
      </div>
    </nav>
  )
}

export default Header
