import Test from './components/Test'
import './App.css'
// import Journey from './components/Journey'
import NavBar from './components/NavBar'
// import Hero from './components/Hero'
// import AfterHero from './components/AfterHero'
// import Clientage from "./components/Clientage"
// import Contactus from "./components/Contactus"
// import Footer from "./components/Footer"
import { Routes, Route } from 'react-router-dom'
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
import Test5 from './components/Test5'
import Test6 from './components/Test6'
import Test7 from './components/Test7'
import Test8 from './components/Test8'
import Test9 from './components/Test9'
import Test10 from './components/Test10'
import Test11 from './components/Test11'
import Test12 from './components/Test12'
import Test13 from './components/Test13'
import Test14 from './components/Test14'
import Test15 from './components/Test15'
import ElectroMechPage from './components/ElectroMechPage'
import InfrastructurePage from './components/InfrastructurePage'

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
        <Route path="/certification" element={<CertificationsList></CertificationsList>} />
        <Route path="/casting" element={<Casting></Casting>} />
        <Route path="/elctroMechDiv" element={<ElectroMechDiv></ElectroMechDiv>} />
        <Route path="/castingPage" element={<CastingsPage />}>
          <Route path="cbc" element={<Test1 />} />
          <Route path="cp" element={<Test2 />} />
          <Route path="abh" element={<Test3 />} />
          <Route path="st" element={<Test4 />} />
        </Route>
        <Route path="/electromechPage" element={<ElectroMechPage />}>
          <Route path="ba" element={<Test5 />} />
          <Route path="rcru" element={<Test6 />} />
          <Route path="ocu" element={<Test7 />} />
          <Route path="sbc" element={<Test8 />} />
        </Route>
        <Route path="/infraPage" element={<InfrastructurePage />}>
          <Route path="cs" element={<Test9 />} />
          <Route path="m" element={<Test10 />} />
          <Route path="ma" element={<Test11 />} />
          <Route path="ht" element={<Test12 />} />
          <Route path="ms" element={<Test13 />} />
          <Route path="qacl" element={<Test14 />} />
          <Route path="qapl" element={<Test15 />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
