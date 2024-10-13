import NavBar from "./NavBar";
import mission1 from "../assets/Vector 4.png";
import knuckle from '../assets/KnuckleNew.png'
import yoke from '../assets/yokeNew.png'
import strikerCasting from '../assets/strikerCastingNew.png'
import coupler from '../assets/CouplerNew.png'
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Test1 = () => {
        useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 300, // Adjust this to when the animation should start
            once: false, // Ensures animation triggers again on scroll
        });

        const scrollContainer = document.getElementById('scrollable-container');

        // Function to trigger AOS on container scroll
        const handleScroll = () => {
            const elements = document.querySelectorAll('.aos-init');

            elements.forEach(element => {
                const rect = element.getBoundingClientRect();

                // Check if the element is in the viewport
                if (rect.top < window.innerHeight && rect.bottom > 0) {
                    // Add 'aos-animate' to trigger animation
                    element.classList.add('aos-animate');
                } else {
                    // Remove 'aos-animate' to reset animation when element leaves the viewport
                    element.classList.remove('aos-animate');
                }
            });
        };

        // Add event listener to scrollable container
        scrollContainer.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when component unmounts
        return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }, []);

    const data = [{
        heading: "Coupler Body ",
        text: "The coupler body in freight couplers serves as the main structural component of a railway coupling system, designed to connect and secure freight cars together. Its purpose is critical for the safe and efficient operation of trains, ensuring that the cars remain coupled under various operational conditions, such as heavy loads, impacts, and movements.",
        imgUrl: coupler
    },
    {
        heading: "Knuckle  ",
        text: "The knuckle in freight couplers is a critical component that plays a key role in connecting and securing two freight cars together. It is a movable part of the coupler assembly that allows for the automatic coupling and uncoupling of rail cars",
        imgUrl: knuckle
    },
    {
        heading: "Yoke  ",
        text: "The yoke in freight couplers is an essential component that serves as the structural link between the coupler body (which includes the knuckle) and the rest of the train’s under frame. It plays a critical role in absorbing, distributing, and transferring forces during the operation of freight trains.",
        imgUrl: yoke
    },
    {
        heading: "Striker Casting ",
        text: "The striker casting acts as a point of connection and interaction between the coupler and the railcar, helping to ensure safe and efficient operation of freight trains. The striker casting contributes to the overall safety, efficiency, and reliability of freight train operations.",
        imgUrl: strikerCasting
    },
    {
        heading: " Back Stop ",
        text: "The back stop in freight couplers is a crucial component designed to enhance the safety and functionality of the coupling system by preventing accidental uncoupling, maintaining alignment and absorbing shock and impact forces. ",
        imgUrl: mission1
    },
    {
        heading: "YPS ",
        text: "The Yoke Pin Support (YPS) in freight couplers is an important component that plays a significant role in the overall functionality and reliability of the coupling system by providing support to yoke, distributing forces and integration with draft gear. ",
        imgUrl: mission1
    },]

    return (
        <div className="w-full h-[85vh]  border-black scrollbar-hide ">
            {/* <NavBar /> */}
            <div className=" border-red-500 w-[100%] h-full flex flex-col items-center justify-center pt-[0%] mb-[5%] scrollbar-hide">

                {/* Sticky Heading Section */}
                {/* <div className="border border-red-600 bg-[#0A173B]/100 text-white -mt-2"> */}
                    {/* <div className="w-[100%] sticky top-[7%] md:top-[5%] lg:top-[5%] xl:top-[8.4%] z-10   border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%] ">
                        <span className="font-[600] text-[35px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                            Our Infrastructure
                        </span>
                    </div> */}

                    {/* Scrollable Section */}
                    <div className=" border-red-500 w-[100%] ">
                        <div className="scroll-container w-[90%] md:w-[95%] h-[800px] xl:h-[500px] overflow-y-scroll scrollbar-hide no-scrollbar flex flex-col gap-[100px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[0%] mx-auto" id="scrollable-container">
                            {data?.map((item, index) => (
                                <div className={`flex flex-col items-center md:items-start ${index % 2 === 0 ? "xl:flex-row-reverse gap-10 md:gap-28 sm:flex-col lg:items-center" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
                                    <div className={`flex font-raleway flex-col gap-5 ${index % 2 === 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
                                        <span className="text-[32px] font-[600] text-[#312865]">
                                            {item.heading}
                                        </span>
                                        <p className="font-raleway text-[14px] md:text-[15px] font-[400] text-justify">
                                            {item.text}
                                        </p>
                                    </div>
                                    <img src={item.imgUrl} alt="" className="w-[650px] md:w-[750px] h-[400px] md:h-[400px] rounded-md object-contain " data-aos="fade-left" />
                                </div>
                            ))}
                        </div>
                    </div>
                {/* </div> */}

            </div>
            {/* <Footer /> */}
        </div>
    )
}

export default Test1;