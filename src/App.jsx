import Test from './components/Test'
import './App.css'
import Journey from './components/Journey'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import AfterHero from './components/AfterHero'
import Clientage from "./components/Clientage"
import Contactus from "./components/Contactus"
import Footer from "./components/Footer"

function App() {
  

  return (
    <div className="">
      {/* <Test></Test> */}
      <NavBar></NavBar>
      <Hero></Hero>
      <AfterHero></AfterHero>
      <div></div>
      <Journey></Journey>
      <Clientage></Clientage>
      <Contactus></Contactus>
      <Footer></Footer>
    </div>
  )
}

export default App
