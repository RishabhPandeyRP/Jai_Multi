
import NavBar from './NavBar'
import Hero from './Hero'
import AfterHero from './AfterHero'
import Clientage from "./Clientage"
import Contactus from "./Contactus"
import Footer from "./Footer"
import Journey from "./Journey"

const FirstPage = () => {
    return (
        <div>
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

export default FirstPage