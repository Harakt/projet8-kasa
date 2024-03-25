import Card from '../../components/Card/card'
import logements from '../../assets/data/logements'
import './accueil.scss'

function Accueil() {
  const logementList = logements

  return (
    <div className="cardContainer">
      {logementList.map((logement) => (
        <Card
          key={logement.id}
          id={logement.id}
          label={logement.title}
          picture={logement.cover}
        />
      ))}
    </div>
  )
}

export default Accueil
