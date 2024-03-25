import { useParams } from 'react-router-dom'
import logements from '../../assets/data/logements'

function Fiche() {
  const { id } = useParams()
  const logementList = logements
  const selectedLogement = logementList.find((section) => section.id === id)

  return (
    <div>
      <img src={selectedLogement.cover} alt="" />
      <span>{selectedLogement.title} </span>
    </div>
  )
}

export default Fiche
