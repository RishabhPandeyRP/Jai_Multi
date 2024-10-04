import Test from './components/Test'
import './App.css'
// import Journey from './components/Journey'
 import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import AfterHero from './components/AfterHero'
// import Clientage from "./components/Clientage"
// import Contactus from "./components/Contactus"
// import Footer from "./components/Footer"
import { Routes , Route } from 'react-router-dom'
import AboutUs from './components/AboutUs'
import FirstPage from './components/FirstPage'
import ContactPage from './components/ContactPage'
import Infrastructure from './components/Infrastructure'
import CertificationsList from './components/CertificationsList'

function App() {
  

  return (
    <div className="">
      {/* <Test></Test> */}
      {/* <NavBar></NavBar>
      <Hero></Hero>
      <AfterHero></AfterHero>
      <div></div>
      <Journey></Journey>
      <Clientage></Clientage>
      <Contactus></Contactus>
      <Footer></Footer> */}
      {/* <NavBar></NavBar> */}
      <Routes>
        <Route path="/" element={<FirstPage></FirstPage>} />
        <Route path="/aboutus" element={<AboutUs></AboutUs>} />
        <Route path="/contactpage" element={<ContactPage></ContactPage>} />
        <Route path="/infra" element={<Infrastructure></Infrastructure>} />
        <Route path="/certification" element={<CertificationsList></CertificationsList>}/>
      </Routes>
    </div>
  )
}

export default App
