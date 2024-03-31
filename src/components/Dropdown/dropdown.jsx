import { useState } from 'react'
import './dropdown.scss'

function Dropdown({ title, text }) {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
  }

  return (
    <div className="dropdownContainer">
      <div
        className={`dropdownButton ${visible ? 'rotate' : ''}`}
        onClick={handleClick}
      >
        <span className="dropdownButtonText">{title}</span>
        <img src="./src/assets/dropdownArrowUp.png" />
      </div>
      <div className={`dropdownContentContainer ${visible ? 'slide' : ''}`}>
        <div className="dropdownContent">
          <span className="dropdownContentText">{text}</span>
        </div>
      </div>
    </div>
  )
}

export default Dropdown
