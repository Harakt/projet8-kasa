import Card from '../../components/Card/card'
import logements from '../../assets/data/logements.json'
import './accueil.scss'

function Accueil() {
  const logementList = logements

  return (
    <div>
      <div className="accueilCoverContainer">
        <img
          className="accueilCoverImage"
          src="../src/assets/cover/cover1.png"
          alt=""
        />
        <span className="accueilCoverText">Chez vous, partout et ailleurs</span>
      </div>
      <div className="accueilCardContainer">
        <ul className="accueilCardList">
          {logementList.map((logement) => (
            <Card
              key={logement.id}
              id={logement.id}
              label={logement.title}
              picture={logement.cover}
            />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Accueil
