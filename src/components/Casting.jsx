import NavBar from "./NavBar";
import mission1 from "../assets/Vector 4.png";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Casting = () => {
    const data = [{
        heading: "Coupler Body ",
        text: "The coupler body in freight couplers serves as the main structural component of a railway coupling system, designed to connect and secure freight cars together. Its purpose is critical for the safe and efficient operation of trains, ensuring that the cars remain coupled under various operational conditions, such as heavy loads, impacts, and movements.",
        imgUrl: mission1
    },
    {
        heading: "Knuckle  ",
        text: "The knuckle in freight couplers is a critical component that plays a key role in connecting and securing two freight cars together. It is a movable part of the coupler assembly that allows for the automatic coupling and uncoupling of rail cars",
        imgUrl: mission1
    },
    {
        heading: "Yoke  ",
        text: "The yoke in freight couplers is an essential component that serves as the structural link between the coupler body (which includes the knuckle) and the rest of the train’s under frame. It plays a critical role in absorbing, distributing, and transferring forces during the operation of freight trains.",
        imgUrl: mission1
    },
    {
        heading: "Striker Castin ",
        text: "The striker casting acts as a point of connection and interaction between the coupler and the railcar, helping to ensure safe and efficient operation of freight trains. The striker casting contributes to the overall safety, efficiency, and reliability of freight train operations.",
        imgUrl: mission1
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

    const data2 = [
        {
            heading: "Centre Pivot   ",
            text: "The pivot consists of a cylindrical shaft or pin that is mounted centrally on the truck frame. It is designed to fit into a corresponding socket or receptacle on the wagon body, allowing for rotation.The center pivot supports the entire weight of the wagon body, transferring this weight to the wheel assemblies. It serves as the primary connection point between the body and the trucks.It allows for controlled rotation of the wagon body relative to the trucks. This rotation is essential when the train navigates curves and switches, enabling the wagon to follow the track path smoothly.",
            imgUrl: mission1
        },
        {
            heading: "Axle Box Housing  ",
            text: "Axle Box Housing For Indian Railways & Metro Rail. The axle box encases the axle and typically consists of a main body, a cover, and various internal components such as bearings. The primary function of the axle box is to support the weight of the railway vehicle (such as a wagon or locomotive) and transfer this weight to the wheel-sets and track. It ensures proper alignment of the axle with the wheel, which is essential for smooth operation and to prevent uneven wear on the wheels.",
            imgUrl: mission1
        },
        {
            heading: "Suspension Tube",
            text: "The suspension tube is a cylindrical component that connects various suspension elements, including springs and dampers. Its design allows for flexibility and movement while maintaining structural integrity. The suspension tube helps support the weight of the railway vehicle while allowing for controlled movement. It connects the wheel assemblies (trucks) to the car body, facilitating the transfer of loads. It works in conjunction with springs and dampers to absorb shocks and vibrations from the track, enhancing passenger comfort and reducing wear on components. ",
            imgUrl: mission1
        },
    ]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 300
        });
        window.scrollTo(0, 0);

    }, []);

    return (
        <div className="w-[100%]  border-violet-800">
            <NavBar></NavBar>
            <div className=" border-red-500 w-[100%] h-auto  flex flex-col items-center justify-center pt-[5%] mb-[5%] mx-auto  md:ml-[0%]">

                <div className="w-[100%] sticky top-[6%] md:top-[5%] lg:top-[10%] xl:top-[8.4%] z-10 bg-white   border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%]">
                    <span className="font-[600] text-[30px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                        Centre Buffer Coupler
                    </span>
                </div>


                <div className="w-[90%] md:w-[80%] h-auto  no-scrollbar flex flex-col gap-[100px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[5%] mx-auto  overflow-x-hidden md:overflow-x-visible" id="scrollable-container" >



                    {
                        data?.map((item, index) => (
                            <div className={`flex flex-col items-center md:items-start  ${index % 2 == 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
                                <div className={`flex flex-col gap-5 ${index % 2 == 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
                                    <span className="text-[32px] font-[600] text-[#312865]" >
                                        {item.heading}
                                    </span>
                                    <p className="font-raleway text-[14px] md:text-[15px] font-[400] text-justify">
                                        {item.text}
                                    </p>
                                </div>
                                <img src={item.imgUrl} alt="" className="w-[650px] md:w-[850px] h-[400px] md:h-[500px] rounded-md" data-aos="fade-left" />
                            </div>
                        ))
                    }
                </div>







                {/* <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF]            sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%] ">
                    Centre Buffer Coupler 
                </span> */}


                <div className="w-[100%] md:w-[80%] h-auto  no-scrollbar flex flex-col gap-[30px] md:gap-[200px]  border-green-500 mt-[15%] md:mt-[5%] mx-auto  " id="scrollable-container" >




                    {
                        data2?.map((item, index) => (
                            <div className="flex flex-col gap-10 justify-center items-center  ">
                                <div className="w-[100%] sticky top-[6%] md:top-[5%] lg:top-[10%] xl:top-[8.4%] z-10 bg-white   border-green-500 flex justify-center md:mx-auto pt-[5%] md:pt-[0%]">
                                    <span className="font-[600] text-[35px] text-center w-fit border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                                        {item.heading}
                                    </span>
                                </div>
                                <div className="flex flex-col lg:flex-row gap-5 overflow-x-hidden md:overflow-x-visible px-[7%]" key={index}>
                                    <div className="flex flex-col gap-5 pr-[10%]" data-aos="fade-right">
                                        <span className="text-[32px] font-[600] text-[#312865]" >
                                            {item.heading}
                                        </span>
                                        <p className="font-raleway text-[15px] font-[400] text-justify">
                                            {item.text}
                                        </p>
                                    </div>
                                    <img src={item.imgUrl} alt="" className="w-[650px] md:w-[850px] h-[400px] md:h-[500px] rounded-md" data-aos="fade-left" />
                                </div>
                            </div>
                        ))
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Casting;
