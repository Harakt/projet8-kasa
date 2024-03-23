import { Link } from 'react-router-dom'
import styled from 'styled-components'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <img src="./src/assets/LOGO.svg" alt="" />
      </Link>
      <div>
        <Link to="/">Accueil</Link>
        <Link to="/propos">A Propos</Link>
      </div>
    </NavContainer>
  )
}

export default Header
