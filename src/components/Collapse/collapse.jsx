import { useState } from 'react'
import './collapse.scss'

function Collapse({ title, text }) {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="collapseContainer">
      <div
        className={`collapseButton ${visible ? 'rotate' : ''}`}
        onClick={handleClick}
      >
        <span className="collapseButtonText">{title}</span>
        <img src="../src/assets/logo/chevronUp.png" />
      </div>
      <div className={`collapseContentContainer ${visible ? 'slide' : ''}`}>
        <div className="collapseContent">
          <span className="collapseContentText">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Collapse
