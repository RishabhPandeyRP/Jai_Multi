import image1 from "../assets/image 3 (1).png"
import image2 from "../assets/image 4.png"
import train from "../assets/Train.svg"
import goto from "../assets/icon.svg"
import r_track from "../assets/Track2.svg"
import { useState, useEffect } from "react"

const Journey = () => {
    let data = [
        {
            heading: "The Foundation ",
            text: "The journey began with the establishment of Rine Engineering Private Limited (REPL). This early venture laid the foundation for the company's expertise in manufacturing industrial components. REPL's initial successes in producing knuckles and couplers marked a significant milestone in the company's history.",
            image: image1
        },
        {
            heading: "Expansion with PD Steels",
            text: "Building upon the momentum of REPL, PD Steels was incorporated. This expansion allowed for increased production capacity and diversification of product offerings. By developing high-demand products such as the 25kW alternator, 4.5kW alternator, oil cooling units, switchboard cabinets, and transformers, PD Steels established a strong presence in electro-mechanical industry. These offerings not only enhanced the company's market position but also signalled its shift toward providing critical, high-performance solutions for coaches.",
            image: image2
        },
        {
            heading: "Birth of Jai Multi Engineering Company",
            text: "A pivotal year in the company's evolution, Jai Multi Engineering Company was officially incorporated. Industrialist KG GOYAL started a world class foundry in 2010 with 800 MT Capacity at Derabassi, Mohali (Punjab).  This new entity consolidated the strengths of REPL and PD Steels, setting the stage for future growth and innovation. JMECO's commitment to quality and customer satisfaction continued to drive its success in the industrial components market.",
            image: image2
        },
        {
            heading: " A Decade of Growth and Innovation",
            text: "State of the Art manufacturing facilities like green and no bake moulding facility with automatic sand plant system, ARC & Induction furnaces, various types of electric heat treatment facility. Testing laboratory equipped with complete range of testing facilities including Spectrometer, Image Analyser, UTM, MPI, Hardness Testing Machine, Flaw Detector, Sand Testing Machine, Physical Testing Machines, Radiography Testing Equipments etc, that makes it a complete foundry to meet the highest quality standards and total customer satisfaction.",
            image: image2
        }
    ]


    const [isFixed, setIsFixed] = useState(false);
    const [scrollDirection, setScrollDirection] = useState('down');

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const trainElement = document.getElementById("train");
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            // The point where the train should stop moving and become fixed
            const stopPoint = windowHeight / 2; // Middle of the viewport

            // Update scroll direction
            if (scrollY > lastScrollY) {
                setScrollDirection('down');
            } else if (scrollY < lastScrollY) {
                setScrollDirection('up');
            }

            lastScrollY = scrollY;

            if (trainElement) {
                const trainRect = trainElement.getBoundingClientRect();

                // Check if the train has reached the stop point
                if (trainRect.top <= stopPoint && !isFixed) {
                    setIsFixed(true);
                } else if (scrollY === 0) {
                    // Reset when the user scrolls back to the top
                    setIsFixed(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFixed]);

    return (
        <div className="w-[81%] h-fit  border-blue-400 mx-auto relative bg-white -z-10 mb-[1%]">
            {/* for heading and text */}
            <div className="flex flex-col gap-[10%] sm:gap-10 lg:gap-5  border-red-500 bg-white">
                <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF]            sm:text-[40px] lg:text-[52px] xl:text-[62px]  ">
                    Our Journey in manufacturing
                </span>
                <span className="font-[400] text-[15px] text-center text-black/60 w-[75%]  border-red-200 mx-auto font-inter mt-5            sm:text-[16px] lg:text-[16px] xl:text-[16px]  sm:w-[75%] lg:w-[60%] sm:mt-5 lg:mt-0 xl:-mt-3">
                    We have been manufacturing critical casting products for 30+ years. We take the pride in telling that we are leading manufacturers in Couplers and Knuckles for Indian Railways.
                </span>

                {/* <button className="w-fit h-fit px-6 py-3 border border-[#0A173B] bg-[#0A173B] text-white mx-auto rounded-[4px] text-[16px] font-[600] font-inter mt-12 flex gap-3 justify-center items-baseline               sm:px-6 lg:px-10 sm:py-3 lg:py-4  sm:text-[16px] lg:text-[16px]  sm:mt-10  sm:gap-3 xl:mt-8">
                    <span>Request Demo</span>

                    <img src={goto} alt="icon" className="w-[10%] h-[10%]" loading="lazy" />
                </button> */}

                <div className=" border-red-500 w-full h-[50px]">

                </div>
            </div>

            {/* for main content */}
            <div className="w-[98%]  py-4  border-green-500 mx-auto  flex flex-col           h-auto mt-15 gap-16 sm:gap-20 lg:gap-24 ">
                {
                    data?.map((item, index) => (
                        <div className={`w-full flex justify-between items-center flex-col sm:flex-col ${index % 2 === 1 ? `lg:flex-row-reverse md:flex-row-reverse ` : `lg:flex-row md:flex-row `} gap-8 sm:gap-12`}>
                            {/* for heading and text */}
                            <div className="w-full lg:w-[40%]  border-green-400 flex flex-col">
                                <span className="font-raleway text-[20px] sm:text-[22px] md:text-[23px] lg:text-[24px] font-[600] w-fit md:mx-0 sm:mx-0 lg:mx-0">
                                    {item.heading}
                                </span>

                                <span className="font-inter font-[400] text-[14px] sm:text-[14px] md:text-[15px] lg:text-[16px] text-black/60 mt-2 md:w-[95%] md:mx-0  sm:w-[95%] sm:mx-0 sm:text-justify lg:w-[90%] lg:mx-0 text-justify ">
                                    {item.text}
                                </span>
                            </div>

                            {/* for image */}
                            <div className="w-full lg:w-fit">
                                <img src={item.image} alt="img" className="w-[80%] mx-auto md:w-[90%] lg:w-[90%] md:mx-auto sm:w-[85%] sm:mx-auto rounded-[2%]" loading="lazy" />
                            </div>
                        </div>
                    ))
                }


            </div>

            {/* Train element */}
            <div
                id="train"
                className={`${isFixed
                        ? "fixed top-1/2 transform -translate-y-1/2"
                        : "absolute top-[20%]"
                    } left-[50.8%] -translate-x-1/2 -z-10 hidden sm:hidden md:hidden lg:block transition-all duration-500 ease-in-out`}
            >
                <img
                    src={train}
                    alt="train"
                    className={`h-[250px] md:hidden lg:block lg:h-[80%] xl:h-[80%] transform transition-transform duration-500 ${scrollDirection === 'up' ? 'rotate-180' : ''}`}
                    
                    loading="lazy"
                />
            </div>

            <div className="absolute hidden top-[70%] left-[51%] lg:top-[29%] xl:top-[30%] -translate-x-1/2 -translate-y-[15%] -z-20 sm:hidden md:hidden lg:block xl:block  border-green-700">
                <img src={r_track} alt="" srcset="" className="-z-20 h-[250px] md:h-[70%] lg:h-[77%] xl:h-[80%]" loading="lazy" />



                <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-white/95 via-white/15 to-transparent z-40"></div>

                <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-white via-white/70 to-transparent z-10"></div>
            </div>

        </div>
    )
}

export default Journey




