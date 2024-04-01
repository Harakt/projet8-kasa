import { Link } from 'react-router-dom'
import './card.scss'

function Card({ id, label, picture }) {
  return (
    <li className="cardWrapper">
      <Link to={`house/${id}`}>
        <figure className="cardImageContainer">
          <img className="cardImage" src={picture} alt="" />
          <figcaption className="cardLabelContainer">
            <span className="cardLabel">{label}</span>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}

export default Card
