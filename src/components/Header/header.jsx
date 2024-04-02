import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './header.scss'

function Header() {
  const { pathname } = useLocation()
  const [path, setPath] = useState('')

  useEffect(() => {
    setPath(pathname)
  }, [pathname])

  return (
    <nav className="headerContainer">
      <Link to="/">
        <h1>
          <img
            className="headerLogo"
            src="../src/assets/logo/kasaLogo.svg"
            alt=""
          />
        </h1>
      </Link>
      <div className="headerLinkContainer">
        <Link className={path === '/' ? 'selectedLink' : 'headerLink'} to="/">
          Accueil
        </Link>
        <Link
          className={path === '/about' ? 'selectedLink' : 'headerLink'}
          to="/about"
        >
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
