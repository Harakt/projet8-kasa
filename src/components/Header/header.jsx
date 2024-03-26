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
        <img src="./src/assets/LOGO.svg" alt="" />
      </Link>
      <div className="headerLinkContainer">
        <Link className={path === '/' ? 'selectedLink' : 'headerLink'} to="/">
          Accueil
        </Link>
        <Link
          className={path === '/propos' ? 'selectedLink' : 'headerLink'}
          to="/propos"
        >
          A Propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
