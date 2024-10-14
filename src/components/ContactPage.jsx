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
        <div className="flex flex-col gap-0">
            <NavBar></NavBar>
            <div className="w-full  border-green-500 h-[70px]"></div>
                <div className="flex justify-center py-9 w-full h-fit  border-green-600 mb-[0%]">
                    {/* <img src={heroImg} alt="heroImg" className="w-full h-full border brightness-[60%] object-cover -z-10 " /> */}

                    <div className=" text-center font-raleway text-[27px] md:text-[40px] text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] font-bold w-[54%] md:w-[50%] z-0 ">
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