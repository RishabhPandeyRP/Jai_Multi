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

const Test15 = () => {
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
        heading: "Quality Assurance - Physical Lab :",
        text: 
            (<div >
                <p className="text-[18px] lg:text-[20px]">Our physical testing lab operates under a rigorous quality control framework, ensuring that all materials and products meet the highest industry benchmarks. Equipment includes:</p>

                <div className="flex flex-col gap-2 ml-[5%] mt-[2%] text-[16px] lg:text-[18px]">
                    <ul style={{listStyleType:"disc"}}>
                    <li>Hardness Tester BHN</li>
                    <li>Universal Testing Machine</li>
                    <li>Impact Testing</li>
                    <li>D-Meter</li>
                    <li>Vickers Hardness Tester</li>
                    <li>Rockwell Hardness Tester</li>
                    <li>Immersion Pyrometer</li>
                    <li>Microscope</li>
                    <li>Surface Table 3ft x 3ft</li>
                    <li>Height Gauge</li>
                    <li>Vernier and Profile Projector</li>
                    </ul>
                </div>
            </div>)
        ,
        imgUrl: mission1
    }]

    return (
        <div className="w-full h-[85vh]  border-black scrollbar-hide ">
            {/* <NavBar /> */}
            <div className="  border-red-500 w-[100%] h-full flex flex-col items-center justify-center pt-[0%] mb-[5%] scrollbar-hide">

                {/* Sticky Heading Section */}
                {/* <div className="border border-red-600 bg-[#0A173B]/100 text-white -mt-2"> */}
                    {/* <div className="w-[100%] sticky top-[7%] md:top-[5%] lg:top-[5%] xl:top-[8.4%] z-10   border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%] ">
                        <span className="font-[600] text-[35px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                            Our Infrastructure
                        </span>
                    </div> */}

                    {/* Scrollable Section */}
                    <div className=" border-red-500 w-[100%] ">
                        <div className="scroll-container w-[90%] md:w-[95%] h-fit xl:h-[550px] overflow-y-scroll scrollbar-hide no-scrollbar flex flex-col gap-[100px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[0%] mx-auto" id="scrollable-container">
                            {data?.map((item, index) => (
                                <div className={`flex flex-col items-center md:items-start xl:mt-[70px] h-fit ${index % 2 === 0 ? "xl:flex-row-reverse gap-10 md:gap-28 sm:flex-col lg:items-center" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row "}`} key={index}>
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

export default Test15;