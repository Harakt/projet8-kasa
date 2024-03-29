import Dropdown from '../../components/Dropdown/dropdown'
import './propos.scss'

function Propos() {
  return (
    <div className="proposContainer">
      <img
        className="proposCover"
        src="./src/assets/Image source 2.png"
        alt=""
      />
      <div className="proposDropdownContainer">
        <Dropdown
          title={'Fiabilité'}
          text={
            'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
          }
        />
        <Dropdown
          title={'Respect'}
          text={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
          }
        />
        <Dropdown
          title={'Service'}
          text={
            'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entrainera une exclusion de notre plateforme.'
          }
        />
        <Dropdown
          title={'Sécurité'}
          text={
            'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a lhote quau locataire, cela permet a nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hotes.'
          }
        />
      </div>
    </div>
  )
}

export default Propos
