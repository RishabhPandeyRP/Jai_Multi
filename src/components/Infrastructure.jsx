// import NavBar from "./NavBar";
// import mission1 from "../assets/Vector 4.png";
// import Footer from "./Footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// const Infrastructure = () => {
//     const data = [{
//         heading: "Core Shop",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Moulding ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Furnace ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Heat Treatment ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Machine Shop",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Quality Assurance ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },]

//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             offset: 300
//         });

//         window.scrollTo(0, 0);
//     }, []);

//     return (
//         <div className="w-full border border-black scrollbar-hide">
//             <NavBar></NavBar>
//             <div className=" border-red-500 w-[100%] h-auto  flex flex-col items-center justify-center pt-[5%] mb-[5%]">

//                 <div className="w-[100%] sticky top-[7%] md:top-[5%] lg:top-[5%] xl:top-[8.4%] z-10 bg-white  border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%]">
//                     <span className="font-[600] text-[35px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
//                         Our Infrastructure
//                     </span>
//                 </div>




//                 <div className="w-[90%] md:w-[80%] h-auto  no-scrollbar flex flex-col gap-[100px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[5%] mx-auto  overflow-x-hidden md:overflow-x-visible" id="scrollable-container" >



//                     {
//                         data?.map((item, index) => (
//                             <div className={`flex flex-col items-center md:items-start  ${index % 2 == 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
//                                 <div className={`flex flex-col gap-5 ${index % 2 == 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
//                                     <span className="text-[32px] font-[600] text-[#312865]" >
//                                         {item.heading}
//                                     </span>
//                                     <p className="font-raleway text-[14px] md:text-[15px] font-[400] text-justify">
//                                         {item.text}
//                                     </p>
//                                 </div>
//                                 <img src={item.imgUrl} alt="" className="w-[650px] md:w-[850px] h-[400px] md:h-[500px] rounded-md" data-aos="fade-left" />
//                             </div>
//                         ))
//                     }
//                 </div>

//             </div>
//             <Footer></Footer>
//         </div>
//     );
// }

// export default Infrastructure;




// import NavBar from "./NavBar";
// import mission1 from "../assets/Vector 4.png";
// import Footer from "./Footer";
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import { useEffect } from "react";

// const Infrastructure = () => {
//     const data = [{
//         heading: "Core Shop",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Moulding ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Furnace ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Heat Treatment ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Machine Shop",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     },
//     {
//         heading: "Quality Assurance ",
//         text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
//         imgUrl: mission1
//     }]

//     useEffect(() => {
//         AOS.init({
//             duration: 1000,
//             offset: 300, // Adjust this to when the animation should start
//             once: false, // Ensures animation triggers again on scroll
//         });

//         const scrollContainer = document.getElementById('scrollable-container');

//         // Function to trigger AOS on container scroll
//         const handleScroll = () => {
//             const elements = document.querySelectorAll('.aos-init');

//             elements.forEach(element => {
//                 const rect = element.getBoundingClientRect();

//                 // Check if the element is in the viewport
//                 if (rect.top < window.innerHeight && rect.bottom > 0) {
//                     // Add 'aos-animate' to trigger animation
//                     element.classList.add('aos-animate');
//                 } else {
//                     // Remove 'aos-animate' to reset animation when element leaves the viewport
//                     element.classList.remove('aos-animate');
//                 }
//             });
//         };

//         // Add event listener to scrollable container
//         scrollContainer.addEventListener('scroll', handleScroll);

//         // Cleanup the event listener when component unmounts
//         return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }, []);

//     return (
//         <div className="w-full border border-black scrollbar-hide">
//             <NavBar />
//             <div className="border-red-500 w-[100%] h-auto flex flex-col items-center justify-center pt-[5%] mb-[5%]">

//                 {/* Sticky Heading Section */}
//                 <div className="border border-red-600 bg-[#0A173B]/100 text-white -mt-2">
//                     <div className="w-[100%] sticky top-[7%] md:top-[5%] lg:top-[5%] xl:top-[8.4%] z-10   border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%] ">
//                         <span className="font-[600] text-[35px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
//                             Our Infrastructure
//                         </span>
//                     </div>

//                     {/* Scrollable Section */}
//                     <div className=" border-red-500 w-[100%]  py-[3.5%]">
//                         <div className="scroll-container w-[90%] md:w-[85%] h-[500px] overflow-y-scroll scrollbar-hide no-scrollbar flex flex-col gap-[100px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[0%] mx-auto" id="scrollable-container">
//                             {data?.map((item, index) => (
//                                 <div className={`flex flex-col items-center md:items-start ${index % 2 === 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
//                                     <div className={`flex flex-col gap-5 ${index % 2 === 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
//                                         <span className="text-[32px] font-[600] text-[#312865]">
//                                             {item.heading}
//                                         </span>
//                                         <p className="font-raleway text-[14px] md:text-[15px] font-[400] text-justify">
//                                             {item.text}
//                                         </p>
//                                     </div>
//                                     <img src={item.imgUrl} alt="" className="w-[650px] md:w-[850px] h-[400px] md:h-[500px] rounded-md " data-aos="fade-left" />
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 </div>

//             </div>
//             <Footer />
//         </div>
//     );
// }

// export default Infrastructure;






import NavBar from "./NavBar";
import mission1 from "../assets/Vector 4.png";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Infrastructure = () => {
    const data = [
        {
            heading: "Core Shop",
            text:( 
            <div className="flex flex-col font-raleway  border-red-800">
                <p className="text-[25px] font-[500]">Intensive sand mixer with batch capacity:</p>
                <div className="flex flex-col gap-2 ml-[2%]">
                    <p>1. 200kg</p>
                    <p>2. 100kg</p>
                </div>

                <p className="text-[25px] font-[500]">Processes used to make cores:</p>
                <div className="flex flex-col gap-2 ml-[2%]">
                    <p>1.	CO₂ Silicate</p>
                    <p>2.	No-bake process</p>
                    <div>
                        <p>3.	Shell core shooter:</p>
                        <div className="ml-[4%]">
                            <p>MAKE - vee.pee</p>
                            <p>Capacity - 10 to 15 sets of core/hr</p>
                        </div>
                    </div>
                </div>
            </div>)
            ,
            imgUrl: mission1
        },
        {
            heading: "Moulding ",
            text: 
            (<div className="flex flex-col font-raleway  border-red-800">
                {/* <p className="text-[45px] font-[500]">Moulding Infrastructure:</p> */}
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-[25px] font-[500]">1.	Arpa-1300</p>
                        <div className="flex flex-col gap-2 ml-[2%]">
                            <p>MAKE - BMD George Fisher</p>
                            <p>Capacity - 20 moulds/hr</p>
                        </div>
                    </div>
                    <div >
                        <p className="text-[25px] font-[500]">2.	FM-3.0 (High Pressure)</p>
                        <div className="flex flex-col gap-2 ml-[2%]">
                            <p>MAKE - RHINO</p>
                            <p>Capacity - 20 moulds/hr</p>
                        </div>
                    </div>
                    <div >
                        <p className="text-[25px] font-[500]">3.	No-bake System</p>
                        <div className="flex flex-col gap-2 ml-[2%]">
                            <p>MAKE - Omega</p>
                            <p>Capacity - 10 moulds/hr</p>
                        </div>
                    </div>
                </div>

                <p className=" text-[25px] mt-[2%]">A fully automated sand reclamation system minimizes wastage of sand and reduces environmental degradation.</p>
                
            </div>)
            ,
            imgUrl: mission1
        },
        {
            heading: "Melting Area ",
            text: 
            (<div className="flex flex-col font-raleway  border-red-800">
                
                <div className="flex flex-col gap-2">
                    <div>
                        <p className="text-[25px] font-[500]">1.	Arc Furnace</p>
                        <div className="flex flex-col gap-2 ml-[2%]">
                            <p>MAKE - Megatherm</p>
                            <p>Capacity - 5 Ton</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-[25px] font-[500]">2.	Induction Furnace</p>
                        <div className="flex flex-col gap-2 ml-[2%]">
                            <p>MAKE - Inductotherm</p>
                            <p>Capacity - Four crucibles with 2.5-ton capacity each</p>
                        </div>
                    </div>
                    
                </div>

                <p className="text-[25px] font-[500]">We use bottom-pouring ladles for pouring liquid metal.</p>
                
            </div>)
            ,
            imgUrl: mission1
        },
        {
            heading: "Heat Treatment ",
            text: 
                (<div className="flex flex-col gap-5">
                    <p className="text-[25px] font-[500]">A fully equipped heat treatment area with:</p>
                    <div className="flex flex-col gap-2 ml-[2%]">
                        <p>1.	Bell Furnaces, each with a capacity of 8 tons</p>
                        <p>2.	Pit Furnaces, each with a capacity of 2 tons</p>
                        <p>3.	A Quenching Tank with a capacity of 40,000 liters</p>
                    </div>
                </div>)
            ,
            imgUrl: mission1
        },
        {
            heading: "Machine Shop",
            text: "The Machine Shop at Pd Steels includes state-of-the-art machinery such as Horizontal Machining Centres (HMC), CNC Vertical Lathe Machines, CNC Boring Machines, Vertical Turning Lathes (VTL), Laser Cutting Machines, and Coordinate Measuring Machines (CMM).",
            imgUrl: mission1
        },
        {
            heading: "Quality Assurance - Chemical Lab",
            text: "Our quality control process is meticulously designed to ensure that every aspect of production adheres to the highest industry standards. Our chemical laboratory is equipped with state-of-the-art tools for precise and comprehensive analysis. This includes Spectrometers, Sand Testing Machines, Rapid Moisture Tellers, Sand Permeability Testers, Shatter Index Testers, Green Strength Machines, Core Hardness Testers, and Mould Hardness Testers.",
            imgUrl: mission1
        },
        {
            heading: "Quality Assurance - Physical Lab",
            text: 
                (<div>
                    <p>Our physical testing lab operates under a rigorous quality control framework, ensuring that all materials and products meet the highest industry benchmarks. Equipment includes:</p>

                    <div className="flex flex-col gap-2">
                        <span>Hardness Tester BHN</span>
                        <span>Universal Testing Machine</span>
                        <span>Impact Testing</span>
                        <span>D-Meter</span>
                        <span>Vickers Hardness Tester</span>
                        <span>Rockwell Hardness Tester</span>
                        <span>Immersion Pyrometer</span>
                        <span>Microscope</span>
                        <span>Surface Table 3ft x 3ft</span>
                        <span>Height Gauge</span>
                        <span>Vernier and Profile Projector</span>

                    </div>
                </div>)
            ,
            imgUrl: mission1
        }
    ];

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
        <div className="w-full  border-black scrollbar-hide">
            <NavBar />
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
                                Our Infrastructure
                            </span>
                        </div>

                        {/* Dynamic content inside the scrollable container */}

                        {data?.map((item, index) => (
                            <div className={` px-[2%] flex flex-col items-center  md:items-start ${index % 2 === 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
                                <div className={`flex flex-col gap-5 ${index % 2 === 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
                                    <span className="text-[32px] font-[600] text-white">
                                        {item.heading}
                                    </span>
                                    <p className="font-raleway text-justify">
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
            <Footer />
        </div>
    );
}

export default Infrastructure;



// background-color: #000000;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%2302050c' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23040918' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23060e23' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%2308122f' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%230A173B' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;