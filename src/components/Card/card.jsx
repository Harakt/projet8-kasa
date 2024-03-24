import './card.scss'

function Card({ label, picture }) {
  return (
    <div className="cardWrapper">
      <img className="cardImage" src={picture} alt="" />
      <span className="cardLabel">{label}</span>
    </div>
  )
}

export default Card
