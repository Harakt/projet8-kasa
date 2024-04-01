import { useState } from 'react'
import CarouselPicture from '../CarouselPicture/carouselPicture'
import './carousel.scss'

function Carousel({ pictures }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const handlePrevClick = () => {
    const newIndex = (currentIndex - 1 + pictures.length) % pictures.length
    setCurrentIndex(newIndex)
  }

  const handleNextClick = () => {
    const newIndex = (currentIndex + 1) % pictures.length
    setCurrentIndex(newIndex)
  }

  return (
    <div className="carouselContainer">
      {pictures.length > 1 && (
        <>
          <button
            className="carouselButton carouselButtonLeft"
            onClick={handlePrevClick}
          >
            <img src="/src/assets/chevron-left.png" alt="" />
          </button>
          <div className="carouselPictures">
            {pictures.map((picture, index) => (
              <CarouselPicture
                key={index}
                picture={picture}
                active={index === currentIndex}
              />
            ))}
          </div>
          <button
            className="carouselButton carouselButtonRight"
            onClick={handleNextClick}
          >
            <img src="/src/assets/chevron-left.png" alt="" />
          </button>
          <div className="carouselIndicator">
            <span>
              {currentIndex + 1} / {pictures.length}
            </span>
          </div>
        </>
      )}
      {pictures.length === 1 && (
        <div className="carouselPictures">
          <CarouselPicture picture={pictures[0]} active={true} />
        </div>
      )}
    </div>
  )
}

export default Carousel
