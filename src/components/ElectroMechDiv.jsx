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
            offset: 300
        });


    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className=" border-red-500 w-[100%] h-auto  flex flex-col items-center justify-center pt-[5%] mb-[5%]">

                <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF]            sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%] ">
                    Electro-mechanical Division
                </span>


                <div className="w-[80%] h-auto  no-scrollbar flex flex-col gap-[200px]  border-green-500 mt-[5%]" id="scrollable-container" >



                    {
                        data?.map((item, index) => (
                            <div className={`flex  ${index%2 == 0 ? "flex-row-reverse gap-28":"gap-5"}`}  key={index}>
                                <div className={`flex flex-col gap-5 ${index%2 == 0 ? "pr-[0%]":"pr-[10%]"}`} data-aos="fade-right">
                                    <span className="text-[32px] font-[600] text-[#312865]" >
                                        {item.heading}
                                    </span>
                                    <p className="font-raleway text-[15px] font-[400] text-justify">
                                        {item.text}
                                    </p>
                                </div>
                                <img src={item.imgUrl} alt="" className="w-[50%] h-[500px] rounded-md" data-aos="fade-left" />
                            </div>
                        ))
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default ElectroMechDiv;
