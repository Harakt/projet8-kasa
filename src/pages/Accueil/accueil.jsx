import Card from '../../components/Card/card'
import logements from '../../assets/data/logements'
import './accueil.scss'

function Accueil() {
  const logementList = logements

  return (
    <div>
      <div className="cardContainer">
        {logementList.map((logement) => (
          <Card
            key={logement.id}
            label={logement.title}
            picture={logement.cover}
          />
        ))}
      </div>
    </div>
  )
}

export default Accueil
