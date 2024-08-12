import { useState , useContext} from 'react';
import './navbar.css'
import logo from '../../assets/logo.png'
import {Link} from 'react-scroll'
import contactImg from '../../assets/contact.png'
import Menu from '../../assets/menu.png'
import { TextboxContext } from '../Context/Context'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {message, setMessage } = useContext(TextboxContext);


  return (
    <nav className='navbar'>
        <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} onClick={()=> setMessage('')}>
          <img src={logo} alt="logo" className='logo' /> 
        </Link>
        <div className='desktopMenu'>
            <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={()=> setMessage('') }>Home</Link>
            <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={()=> setMessage('') } >About</Link>
            <Link activeClass='active' to='works' spy={true} smooth={true} offset={-100} duration={500} className='desktopMenuListItem' onClick={()=> setMessage('') }>Portfolio</Link>
        </div>
        <button className='desktopMenuBtn' onClick={() => {
          document.getElementById('contact').scrollIntoView({behavior: 'smooth'});
        }}>
            <img src= {contactImg} alt="contact Image" className='desktopMenuImg' />Contact Me</button>
            <img src={Menu} alt="Menu" className='mobMenu' onClick={() =>setShowMenu(!showMenu)}/>
            <div className='navMenu' style={{display: showMenu? 'flex': 'none'}}>
                <Link activeClass='active' to='intro' spy={true} smooth={true} offset={-100} duration={500} className='listItem' onClick={()=> setShowMenu(false) & setMessage('') }>Home</Link>
                <Link activeClass='active' to='skills' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=> setShowMenu(false)  & setMessage('') }>About</Link>
                <Link activeClass='active' to='works' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=> setShowMenu(false)  & setMessage('') }>Portfolio</Link>
                <Link activeClass='active' to='contact' spy={true} smooth={true} offset={-70} duration={500} className='listItem' onClick={()=> setShowMenu(false)  & setMessage('') }>Contacts</Link>

            </div>
    </nav>
  )
}

export default Navbar