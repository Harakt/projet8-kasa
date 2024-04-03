import { useParams } from 'react-router-dom'
import logements from '../../assets/data/logements.json'
import './house.scss'
import Collapse from '../../components/Collapse/collapse'
import Tags from '../../components/Tag/tags'
import Rating from '../../components/Rating/rating'
import Carousel from '../../components/Carousel/carousel'
import Error from '../../components/Error/error'

function House() {
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
    <div className="houseContainer">
      <Carousel pictures={selectedLogement.pictures} />
      <div className="houseContentContainer">
        <div className="houseTitleContainer">
          <div className="houseTitleContent">
            <span className="houseTitle">{selectedLogement.title} </span>
            <span className="houseLocation">{selectedLogement.location}</span>
          </div>
          <div className="houseTagsContainer">{tagsList}</div>
        </div>
        <div className="houseHostRatingContainer">
          <div className="houseHostContent">
            <span className="houseHostName">{selectedLogement.host.name}</span>
            <img
              className="houseHostPicture"
              src={selectedLogement.host.picture}
              alt=""
            />
          </div>
          <div className="houseRatingContent">
            <Rating rating={selectedLogement.rating} />
          </div>
        </div>
      </div>
      <div className="houseCollapseContainer">
        <Collapse title={'Description'} text={selectedLogement.description} />
        <Collapse title={'Equipements'} text={equipmentsList} />
      </div>
    </div>
  )
}

export default House
