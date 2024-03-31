import './carouselPicture.scss'

const CarouselPicture = ({ picture, active }) => {
  return (
    <div className={`carouselPicture ${active ? 'active' : ''}`}>
      <img src={picture} alt="" />
    </div>
  )
}

export default CarouselPicture
