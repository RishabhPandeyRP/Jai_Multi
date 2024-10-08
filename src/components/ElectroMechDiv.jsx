import NavBar from "./NavBar";
import mission1 from "../assets/Vector 4.png";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const ElectroMechDiv = () => {
    const data = [{
        heading: "25kW & 4.5kW Brushless Alternator for Railways ",
        text: "The purpose of alternators in trains is to generate electrical power needed to operate various on-board systems and support key functionalities, such as lighting, air conditioning, communication systems, and auxiliary equipment. Alternators are essential for the efficient operation of diesel-electric and electric trains, where they convert mechanical energy from the engine or traction system into electrical energy.",
        imgUrl: mission1
    },
    {
        heading: "Rectifier Cum Regulating Unit for 25 kW & 4.5 kW Brushless Alternator ",
        text: "The Rectifier Cum Regulating Unit (RRU) for an alternator in Indian Railways serves multiple essential functions related to converting and regulating electrical power, ensuring a stable and efficient power supply for various on-board systems.",
        imgUrl: mission1
    },
    {
        heading: "Oil Cooling Unit For Railways  ",
        text: "In Indian Railways, oil cooling units play a crucial role in cooling electrical equipment, particularly in electric locomotives, maintaining the performance and safety of locomotives, ensuring smooth and reliable train operations across the vast rail network of India.",
        imgUrl: mission1
    },
    {
        heading: "Types of Switch Board Cabinets ",
        text: "The Switch Board Cabinet (SBC) in trains serves as a centralised control and distribution point for electrical systems within a coach or locomotive. It plays a crucial role in managing and protecting the onboard electrical circuits and systems.",
        imgUrl: mission1
    },

    ]

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

    return (
        <div>
            <NavBar></NavBar>
            <div className="border-red-500 w-[100%] h-auto flex flex-col items-center justify-center pt-[5%] mb-[5%]">

                {/* Scrollable Section */}
                <div
                    className="border-red-600 bg-black bg-cover bg-fixed text-white w-[100%] h-[620px] py-[1.5%] mt-[9%]  lg:mt-[2%]"
                    style={{
                        backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg %3E%3Cpolygon fill=%27%2302050c%27 points=%271600 160 0 460 0 350 1600 50%27/%3E%3Cpolygon fill=%27%23040918%27 points=%271600 260 0 560 0 450 1600 150%27/%3E%3Cpolygon fill=%27%23060e23%27 points=%271600 360 0 660 0 550 1600 250%27/%3E%3Cpolygon fill=%27%2308122f%27 points=%271600 460 0 760 0 650 1600 350%27/%3E%3Cpolygon fill=%27%230A173B%27 points=%271600 800 0 800 0 750 1600 450%27/%3E%3C/g%3E%3C/svg%3E')"
                    }}>

                    {/* Scrollable container */}
                    <div className="scroll-container w-[90%] md:w-[85%] h-[95%] lg:h-[100%] overflow-y-scroll scrollbar-hide no-scrollbar flex flex-col gap-[100px] md:gap-[100px]   border-green-500 mt-[4%] md:mt-[0%] mx-auto" id="scrollable-container">

                        {/* Sticky heading within the scrollable section */}
                        <div className="sticky top-0 bg-slate-500/50 backdrop-blur-md rounded-lg z-10 py-1   border-green-500 flex justify-center">
                            {/* <span className="font-[600] text-[35px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                                Our Infrastructure
                            </span> */}
                            <span className="font-[600] text-[35px] text-center w-[100%]  mx-auto font-raleway text-white sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[0%]  border-red-500">
                                Electro-Mechanical Division
                            </span>
                        </div>

                        {/* Dynamic content inside the scrollable container */}

                        {data?.map((item, index) => (
                            <div className={` px-[2%] flex flex-col items-center  md:items-start ${index % 2 === 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
                                <div className={`flex flex-col gap-5 ${index % 2 === 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
                                    <span className="text-[32px] font-[600] text-white">
                                        {item.heading}
                                    </span>
                                    <p className="font-raleway text-[14px] md:text-[15px] font-[400] text-justify">
                                        {item.text}
                                    </p>
                                </div>
                                <img
                                    src={item.imgUrl}
                                    alt=""
                                    className="w-full sm:w-[450px] md:w-[750px] h-auto sm:h-[250px] md:h-[400px] max-w-sm sm:max-w-[350px] rounded-md mx-auto"
                                    data-aos="fade-left"
                                />

                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ElectroMechDiv;
