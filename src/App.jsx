import Navbar from "./components/Navbar/Navbar.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Skills from "./components/Skills/Skills.jsx"
import Works from "./components/Works/Works.jsx"
import Contact from "./components/Contact/Contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import { TextboxProvider } from "./components/Context/Context.jsx"


function App() {


  return (
    <div className="App">
      <TextboxProvider >
        <Navbar/>
        <Intro/>
        <Skills/>
        <Works/>
        <Contact/>
        <Footer/>
      </TextboxProvider>
    </div>
  )
}

export default App
