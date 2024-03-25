import { useState } from 'react'
import './dropdown.scss'

function Dropdown({ title, text }) {
  const [visible, setVisible] = useState(false)
  const handleClick = () => {
    setVisible(!visible)
    console.log(visible)
  }

  return (
    <div>
      <div className="dropdownButton" onClick={handleClick}>
        {title}
      </div>
      {visible && <div className="dropdownText">{text}</div>}
    </div>
  )
}

export default Dropdown
