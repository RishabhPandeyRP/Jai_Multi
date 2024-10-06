import NavBar from "./NavBar"
import heroImg from "../assets/trainImg2.jpg"
import titGarh from "../assets/titaImg.png"
import chairImage from "../assets/Cut Image for About.png"
import mission1 from "../assets/Grapgic-01.png"
import mission2 from "../assets/Hraphic 2.png"
import Footer from "./Footer"
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react"

const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        AOS.init({
            duration: 1000,
            offset: 150
        });
    }, [])

    return (
        <div className=" border-red-500">
            <NavBar></NavBar>
            <div className=" mt-[0%]  border-green-500 mb-[15%]">
                <div className="relative w-full h-[60vh]  border-green-600 mb-[10%]">
                    <img src={heroImg} alt="heroImg" className="w-full h-full border brightness-[60%] object-cover -z-10 " />

                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center  font-newspaper text-[31px] md:text-[38px] text-white font-bold w-[54%] z-0 ">
                        Empowering Progress:
                        Driving Innovation with Purpose and Passion
                    </div>

                </div>

                {/* <div className="flex flex-col w-[80%] mx-auto justify-between items-center  border-red-300 ">
                    <div className="relative">
                        <div>
                            <img src={titGarh} alt="" className="h-[500px] w-[400px] object-contain" />
                        </div>
                        <div className="absolute border-4 border-[#312865] w-[450px] h-[400px] top-[13%] -left-[6%] -z-10">

                        </div>
                    </div>

                    <div className="text-[14px] font-[300] w-[55%] flex flex-col gap-9  border-red-400" data-aos="fade-left">
                        <div>
                            <span className=" text-[30px] font-[600] text-[#312865]">About the Group</span>
                        </div>
                        <div className="flex gap-5 flex-col font-raleway text-[15px] font-[400]">
                            <p>Titagarh is a leading comprehensive mobility solution provider with a strong presence in India and Italy. With state-of-the-art factories in both countries, we are committed to meeting the diverse requirements of passenger and freight rail systems.</p>
                            <p>At Titagarh, we specialize in crafting cutting-edge transportation solutions, including semi high-speed trains, urban metros, passenger coaches, propulsion equipment, and a wide array of wagons, including specialized ones.</p>
                            <p>With a passion for innovation and a dedication to excellence, we strive to deliver world class products that redefine the way people and goods move across the world. Explore our range of products and experience the future of transportation with Titagarh.</p>
                        </div>
                    </div>
                </div> */}

                <div className="flex flex-col md:flex-row w-[90%] md:w-[80%] mx-auto justify-around items-center gap-8   border-red-900">
                    <div className="relative  border-red-900">
                        <div>
                            <img
                                src={titGarh}
                                alt=""
                                className="h-[300px] w-[250px] md:h-[450px] md:w-[350px] object-contain lg:h-[500px] lg:w-[400px]"
                            />
                        </div>
                        <div className="absolute border-4 border-[#312865] w-[280px] h-[230px] md:w-[350px] md:h-[350px] top-[13%] -left-[6%] md:-left-[50%] md:top-[11%] lg:top-[13%] lg:-left-[6%] lg:w-[450px] lg:h-[400px] -z-10 md:hidden lg:block xl:block"></div>
                    </div>

                    <div className="overflow-x-hidden  border-green-500 w-[95%] lg:w-[40%]">
                        <div
                            className=" border-red-500 text-[14px] md:text-[15px] font-[300] w-[100%] md:w-[100%] flex flex-col gap-6 md:gap-9 "
                            data-aos="fade-left"
                        >
                            <div>
                                <span className="w-fit text-[20px] md:text-[30px] font-[600] text-[#312865]">
                                    About the Group
                                </span>
                            </div>
                            <div className="w-fit flex gap-3 md:gap-5 flex-col font-raleway text-justify">
                                <p>
                                    XYZ is a leading comprehensive mobility solution provider with a
                                    strong presence in India and Italy. With state-of-the-art factories in
                                    both countries, we are committed to meeting the diverse requirements of
                                    passenger and freight rail systems.
                                </p>
                                <p>
                                    At XYZ, we specialize in crafting cutting-edge transportation
                                    solutions, including semi high-speed trains, urban metros, passenger
                                    coaches, propulsion equipment, and a wide array of wagons, including
                                    specialized ones.
                                </p>
                                <p>
                                    With a passion for innovation and a dedication to excellence, we strive
                                    to deliver world-class products that redefine the way people and goods
                                    move across the world. Explore our range of products and experience the
                                    future of transportation with XYZ.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-fit lg:h-fit lg:py-10 border border-[#0A173B] bg-[#0A173B] mt-[10%] flex  relative ">
                    <div className=" border-white flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center gap-10 my-[5%] lg:my-[0%] lg:gap-10">
                        <div className=" border-white w-[90%] lg:w-[40%] text-white font-railway flex gap-5 flex-col h-fit text-justify" data-aos="fade-right">
                            <div className=" text-[25px] font-[500]">
                                MESSAGE FROM OUR LEADER
                            </div>

                            <div className="flex flex-col gap-5 text-[14px]">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti alias accusantium ipsam nihil nemo quasi in beatae eos minima, quae sequi, eum dolore ad consequatur fugit nostrum aut ratione sed ducimus a. Explicabo esse ea beatae, qui et magnam eum nostrum quidem veritatis. Blanditiis impedit itaque fuga. Iste, earum.
                                </p>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque deleniti alias accusantium ipsam nihil nemo quasi in beatae eos minima, quae sequi, eum dolore ad consequatur fugit nostrum aut ratione sed ducimus a. Explicabo esse ea beatae, qui et magnam eum nostrum quidem veritatis. Blanditiis impedit itaque fuga. Iste, earum.
                                </p>
                            </div>

                            <div className="flex flex-col ">
                                <p className="text-[25px] font-[500]">MR. XYZ</p>
                                <p className="text-[18px] font-[400]">Executive Chairman</p>
                            </div>

                        </div>

                        <div>
                            <img src={chairImage} alt="" className="w-[500px]  " data-aos="flip-left" />
                        </div>
                    </div>

                </div>




                <div className="flex flex-col-reverse lg:flex-row  border-green-500 w-[85%] mx-auto justify-around mt-[10%] gap-[100px] overflow-x-hidden">
                    <div className="relative w-fit mx-auto lg:mx-0" data-aos="zoom-in">
                        <img src={mission1} alt="" className="h-[350px] w-[500px] lg:h-[550px] lg:w-[2600px]" />

                        {/* <img src={mission2} alt="" className="h-[250px] w-[200px] absolute top-[75%] left-[75%] border-[10px] border-white"/> */}

                    </div>

                    <div className="flex flex-col gap-5 w-fit pl-[5%]" data-aos="fade-left">
                        <span className=" text-[30px] font-[600] text-[#312865]">
                            Our Mission
                        </span>

                        <p className="font-raleway text-[15px] font-[400] text-justify">
                            At XYZ, we are dedicated to ensuring utmost customer satisfaction through the delivery of high-quality products and services. Our goal is to establish ourselves as a world-class mobility solutions provider in the infrastructure sector, catering to the unique needs of our customers and facilitating their long-term business success. Our values manifest in the holistic satisfaction of all stakeholders, with due focus on benefiting society at large.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row  border-green-500 w-[85%] mx-auto justify-around mt-[10%] gap-[100px] overflow-x-hidden">
                    <div className="relative w-fit mx-auto lg:mx-0" data-aos="zoom-in">
                        <img src={mission1} alt="" className="h-[350px] w-[500px] lg:h-[550px] lg:w-[2600px]" />

                        {/* <img src={mission2} alt="" className="h-[250px] w-[200px] absolute top-[75%] right-[75%] border-[10px] border-white"/> */}

                    </div>

                    <div className="flex flex-col gap-5 w-fit pr-[5%]" data-aos="fade-right">
                        <span className=" text-[30px] font-[600] text-[#312865]">
                            Our Vision
                        </span>

                        <p className="font-raleway text-[15px] font-[400] text-justify">
                            At XYZ, we are dedicated to ensuring utmost customer satisfaction through the delivery of high-quality products and services. Our goal is to establish ourselves as a world-class mobility solutions provider in the infrastructure sector, catering to the unique needs of our customers and facilitating their long-term business success. Our values manifest in the holistic satisfaction of all stakeholders, with due focus on benefiting society at large.
                        </p>
                    </div>
                </div>



            </div>
            <Footer></Footer>
        </div>
    )
}
export default AboutUs