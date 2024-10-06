import ContactForm from "./ContactForm"
import CorporateOffice from "./CorporateOffice"
import Footer from "./Footer";
import NavBar from "./NavBar";
import heroImg from "../assets/trainImg2.jpg"
import { useEffect } from "react";

const ContactPage = ()=>{
    useEffect(()=>{
        window.scrollTo(0, 0);
    },[])
    return(
        <div className="flex flex-col gap-5">
            <NavBar></NavBar>
                <div className="relative w-full h-[60vh]  border-green-600 mb-[0%]">
                    <img src={heroImg} alt="heroImg" className="w-full h-full border brightness-[60%] object-cover -z-10 " />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-newspaper text-[27px] md:text-[38px] text-white font-bold w-[54%] md:w-[30%] z-0 ">
                    Get In Touch:
                    Let's Start a Conversation
                    </div>

                </div>
            <ContactForm></ContactForm>
            <CorporateOffice></CorporateOffice>
            <Footer></Footer>
        </div>
    )
}

export default ContactPage;