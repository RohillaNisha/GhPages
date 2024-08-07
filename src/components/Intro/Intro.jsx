import bg from '../../assets/bg.jpg'
import hire from '../../assets/hireme.png'
import {Link} from 'react-scroll'
import './intro.css'
import { TextboxContext} from '../Context/Context.jsx'
import { useContext } from 'react'


const Intro = () => {
 
  const { handleHireMeClick} = useContext(TextboxContext);


  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I am  <span className="introName">Nisha</span> <br />Fullstack Web Developer </span>
        <p className="introPara">Crafting Code, Creating Impact: Your Fullstack Web Developer for <br/> meaningful applications </p>
        <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={handleHireMeClick}> <button className="hireMeBtn"> <img className="btnImg" src={hire} alt="hire me" /> Hire Me</button> </Link>

      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro