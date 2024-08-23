import profile from '../../assets/profile.png'
import hi from '../../assets/hi.png'
// import {Link} from 'react-scroll'
import './intro.css'
import { TextboxContext} from '../Context/Context.jsx'
import { useContext } from 'react'
import { ExternalLink } from 'react-external-link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils } from '@fortawesome/free-solid-svg-icons'
import { faBed} from '@fortawesome/free-solid-svg-icons'
import { faCode} from '@fortawesome/free-solid-svg-icons'
import { faRepeat} from '@fortawesome/free-solid-svg-icons'
import { faSquareGithub} from '@fortawesome/free-brands-svg-icons'
import { faLinkedin} from '@fortawesome/free-brands-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faSquareInstagram} from '@fortawesome/free-brands-svg-icons'


const Intro = () => {
 
  const { handleHireMeClick} = useContext(TextboxContext);


  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello !   <img src={hi} alt="hello hand" className="handIcon"/> My name is </span>
        <span className="introText"><span className="introName"> NISHA </span> ROHILLA </span>
        <p className="Iam"> I am a  &nbsp;
        <ul>
          <li className='list'> <span className="listIAm"> Fullstack Developer </span></li>
          <li className='list'> <span className="listIAm"> Balanced Multitasker </span></li>
          <li className='list'> <span className="listIAm"> Coding Supermom </span></li>
          <li className='list'> <span className="listIAm"> Daily Yogi </span></li>
        </ul>
        </p> 
        {/* <span className="introText">I am  <span className="introName">Nisha</span> <br />Fullstack Web Developer </span> */}
        {/* <p className="introPara">Crafting Code, Creating Impact: Your Fullstack Web Developer for <br/> meaningful applications </p> */}
        {/* <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} onClick={handleHireMeClick}> <button className="hireMeBtn"> <img className="btnImg" src={hire} alt="hire me" /> Hire Me</button> </Link> */}
      </div>
      <div className="iconDiv">
        <div className="eatSleepCodeRepeat">
          <div className="iconWithText">
            <FontAwesomeIcon icon={faUtensils} className="eat"/>
            <span>eat <span className="eatBraces">( );</span></span>  
          </div>
          <div className="iconWithText">
            <FontAwesomeIcon icon={faBed} className="sleep" />
            <span> sleep <span className="sleepBraces">( );</span></span>
          </div>
          <div className="iconWithText">
            <FontAwesomeIcon icon={faCode} className="code" />
            <span>code <span className="codeBraces">( );</span></span> 
          </div>
          <div className="iconWithText">
            <FontAwesomeIcon icon={faRepeat} className="repeat" /> 
            <span>repeat <span className="repeatBraces">( );</span></span>
          </div>
        </div>
        <div className="socialMediaContactIcons">
          <ExternalLink href="https://github.com/RohillaNisha"> <FontAwesomeIcon icon={faSquareGithub} className="githubIcon" />  </ExternalLink>
          <ExternalLink href="https://www.linkedin.com/in/nisharohilla88/">  <FontAwesomeIcon icon={faLinkedin} className="linkedinIcon" />  </ExternalLink>
          <ExternalLink href="https://www.facebook.com/profile.php?id=100000610492043"><FontAwesomeIcon icon={faSquareFacebook} className="fbIcon"/> </ExternalLink>
          <ExternalLink href="https://www.instagram.com/nisha.bioinfo/"> <FontAwesomeIcon icon={faSquareInstagram}  className="instaIcon"/> </ExternalLink>   
        </div>    
      </div>   
      <img src={profile} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro