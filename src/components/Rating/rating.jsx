import { useEffect, useState } from 'react'
import starFull from '/src/assets/starfull.svg'
import starEmpty from '/src/assets/starempty.svg'
import './rating.scss'

function Rating({ rating }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const newStars = [1, 2, 3, 4, 5].map((star) => {
      const isFilled = star <= rating
      const icon = isFilled ? <img src={starFull} /> : <img src={starEmpty} />
      return (
        <span className="ratingStar" key={star}>
          {icon}
        </span>
      )
    })
    setStars(newStars)
  }, [])

  return <div>{stars}</div>
}

export default Rating
