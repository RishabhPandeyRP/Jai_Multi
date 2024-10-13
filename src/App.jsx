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
import Casting from './components/Casting'
import ElectroMechDiv from './components/ElectroMechDiv'
import CastingsPage from './components/CastingsPage'
import Test1 from './components/Test1'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
import Test4 from './components/Test4'

function App() {
  

  return (
    <div className="w-[100%] scrollbar-hide">
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
        <Route path="/casting" element={<Casting></Casting>} />
        <Route path="/elctroMechDiv" element={<ElectroMechDiv></ElectroMechDiv>} />
        <Route path="/castingPage" element={<CastingsPage />}>
            <Route path="cbc" element={<Test1 />} />
            <Route path="cp" element={<Test2 />} />
            <Route path="abh" element={<Test3 />} />
            <Route path="st" element={<Test4 />} />
          </Route>
      </Routes>
    </div>
  )
}

export default App
