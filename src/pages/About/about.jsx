import Collapse from '../../components/Collapse/collapse'
import AboutData from '../../assets/data/about.json'
import './about.scss'

function About() {
  const aboutList = AboutData

  return (
    <div className="aboutContainer">
      <img className="aboutCover" src="../src/assets/cover/cover2.png" alt="" />
      <div className="aboutCollapseContainer">
        {aboutList.map((about) => (
          <Collapse key={about.id} title={about.title} text={about.text} />
        ))}
      </div>
    </div>
  )
}

export default About
