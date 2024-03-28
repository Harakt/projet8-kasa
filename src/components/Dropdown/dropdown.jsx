import { useState } from 'react'
import './dropdown.scss'

function Dropdown({ title, text }) {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
    console.log(visible)
  }

  return (
    <div className="dropdownContainer">
      <div className="dropdownButton" onClick={handleClick}>
        <span className="dropdownButtonText">{title}</span>
      </div>
      {visible && (
        <div className="dropdownContent">
          <span className="dropdownContentText">{text}</span>
        </div>
      )}
    </div>
  )
}

export default Dropdown
