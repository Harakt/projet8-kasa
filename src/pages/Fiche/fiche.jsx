import { useParams } from 'react-router-dom'
import logements from '../../assets/data/logements'
import './fiche.scss'
import Dropdown from '../../components/Dropdown/dropdown'
import Tags from '../../components/Tag/tags'
import Rating from '../../components/Rating/rating'
import Carousel from '../../components/Carousel/carousel'
import Error from '../../components/Error/error'

function Fiche() {
  const { id } = useParams()
  const logementList = logements
  const selectedLogement = logementList.find((section) => section.id === id)
  if (selectedLogement == undefined) {
    return (
      <div>
        <Error />
      </div>
    )
  }
  const equipmentsList = selectedLogement.equipments.map(
    (equipments, index) => <li key={`equipments-${index}`}>{equipments}</li>,
  )
  const tagsList = selectedLogement.tags.map((tags, index) => (
    <Tags key={`tags-${index}`} text={tags} />
  ))

  return (
    <div className="ficheContainer">
      <Carousel pictures={selectedLogement.pictures} />
      <div className="ficheContent">
        <div className="ficheContentTitle">
          <span className="ficheTitle">{selectedLogement.title} </span>
          <span className="ficheLocation">{selectedLogement.location}</span>
        </div>
        <div className="ficheHostContainer">
          <span className="ficheHostName">{selectedLogement.host.name}</span>
          <img
            className="ficheHostPicture"
            src={selectedLogement.host.picture}
            alt=""
          />
        </div>
      </div>
      <div className="ficheContent">
        <div>{tagsList}</div>
        <div className="ficheRating">
          <Rating rating={selectedLogement.rating} />
        </div>
      </div>
      <div className="ficheContainerDropdown">
        <Dropdown
          className="ficheDropdown"
          title={'Description'}
          text={selectedLogement.description}
        />
        <Dropdown
          className="ficheDropdown"
          title={'Equipements'}
          text={equipmentsList}
        />
      </div>
    </div>
  )
}

export default Fiche
