import { useEffect, useState } from 'react'

function Rating({ rating }) {
  const [stars, setStars] = useState([])

  useEffect(() => {
    const newStars = [1, 2, 3, 4, 5].map((star) => {
      const isFilled = star <= rating
      const icon = isFilled ? '★' : '☆'
      return <span key={star}>{icon}</span>
    })
    setStars(newStars)
  }, [])

  return <div className="star-rating">{stars}</div>
}

export default Rating
