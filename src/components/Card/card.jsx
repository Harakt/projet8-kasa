import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, label, picture }) {
  return (
    <Link className="cardWrapper" to={`fiche/${id}`}>
      <img className="cardImage" src={picture} alt="" />
      <span className="cardLabel">{label}</span>
    </Link>
  )
}

export default Card
