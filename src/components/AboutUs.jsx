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
            offset: 300
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
                            className=" border-red-500 text-[14px] md:text-[15px] font-[300] w-[100%] md:w-[100%] flex flex-col gap-6 md:gap-9 font-raleway "
                            data-aos="fade-left"
                        >
                            <div>
                                <span className="w-fit text-[20px] md:text-[30px] font-[600] text-[#312865]">
                                    About the Group
                                </span>
                            </div>
                            <div className="w-fit flex gap-3 md:gap-5 flex-col font-raleway text-justify">
                                <p>
                                Rine Group of Industries is a premier manufacturing company specializing in the production of highly critical casting and electromechanical products for the Indian Railways. With an unwavering commitment to precision and quality, we deliver a range of essential components, including couplers, knuckles, axle boxes, alternators, oil cooling units, and control panels. Our advanced engineering and stringent quality standards ensure that every product meets the rigorous demands of the railway sector.
                                </p>
                                <p>
                                With over 250 skilled professionals driving innovation and excellence, Rine Group continues to be a trusted partner to the Indian Railways, contributing to the nation’s transportation infrastructure with reliable, high-performance solutions.
                                </p>
                                {/* <p>
                                    With a passion for innovation and a dedication to excellence, we strive
                                    to deliver world-class products that redefine the way people and goods
                                    move across the world. Explore our range of products and experience the
                                    future of transportation with XYZ.
                                </p> */}
                            </div>
                        </div>
                    </div>
                </div>


                <div className="w-full h-fit lg:h-fit lg:py-10 border border-[#0A173B] bg-black bg-cover bg-fixed mt-[10%] flex  relative font-raleway" 
                style={{
                    backgroundImage: "url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27100%25%27 height=%27100%25%27 viewBox=%270 0 1600 800%27%3E%3Cg %3E%3Cpolygon fill=%27%2302050c%27 points=%271600 160 0 460 0 350 1600 50%27/%3E%3Cpolygon fill=%27%23040918%27 points=%271600 260 0 560 0 450 1600 150%27/%3E%3Cpolygon fill=%27%23060e23%27 points=%271600 360 0 660 0 550 1600 250%27/%3E%3Cpolygon fill=%27%2308122f%27 points=%271600 460 0 760 0 650 1600 350%27/%3E%3Cpolygon fill=%27%230A173B%27 points=%271600 800 0 800 0 750 1600 450%27/%3E%3C/g%3E%3C/svg%3E')"
                }}>
                    <div className=" border-white flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center gap-10 my-[5%] lg:my-[0%] lg:gap-10">
                        <div className=" border-white w-[90%] lg:w-[40%] text-white font-railway flex gap-5 flex-col h-fit text-justify" data-aos="fade-right">
                            <div className=" text-[27px] font-[500]">
                                Message From Our Leader
                            </div>

                            <div className="flex flex-col gap-5 text-[14px]">
                                <p>
                                At Rine Group of Industries, we take immense pride in our role as a trusted supplier to the Indian Railways. Over the past 30 years, our journey has been defined by a commitment to excellence, innovation, and the relentless pursuit of quality in everything we do. We have built a strong foundation rooted in delivering critical casting and electromechanical products that uphold the highest industry standards, ensuring safety and performance.
                                </p>
                                <p>
                                Our success is driven by the dedication of our talented workforce, whose expertise and passion are the backbone of our operations. Together, we have created a culture of continuous improvement, where each challenge is met with a solution-focused approach.

                                </p>
                                <p>
                                As we move forward, we strive to become global leaders in the development and supply of highly critical casting products.
                                </p>
                            </div>

                            <div className="flex flex-col ">
                                <p className="text-[20px] font-[500]">Sincerely,</p>
                                <p className="text-[20px] font-[500]">Jai Gopal Goyal</p>
                                <p className="text-[20px] font-[400]">Owner, Rine Group of Industries</p>
                            </div>

                        </div>

                        <div>
                            <img src={chairImage} alt="" className="w-[500px]  " data-aos="flip-left" />
                        </div>
                    </div>

                </div>




                <div className="flex flex-col-reverse lg:flex-row  border-green-500 w-[80%] mx-auto justify-around mt-[10%] gap-[100px] overflow-x-hidden font-raleway">
                    <div className="relative w-fit mx-auto lg:mx-0" data-aos="zoom-in">
                        <img src={mission1} alt="" className="h-[350px] w-[500px] lg:h-[400px] lg:w-[1700px] object-contain" />

                        {/* <img src={mission2} alt="" className="h-[250px] w-[200px] absolute top-[75%] left-[75%] border-[10px] border-white"/> */}

                    </div>

                    <div className="flex flex-col gap-5 w-fit pl-[5%]" data-aos="fade-left">
                        <span className=" text-[30px] font-[600] text-[#312865]">
                            Our Mission
                        </span>

                        <p className="font-raleway text-[15px] font-[400] text-justify">
                        At Rine Group of Industries, our mission is to deliver excellence in supplying high-quality casting and electromechanical products, ensuring safety and reliability for the Indian Railways and other sectors we serve. We are dedicated to fostering a culture of innovation, continuous improvement, and quality, driven by the expertise and passion of our talented workforce. Our commitment lies in maintaining the highest industry standards while providing solutions that meet critical operational needs.
                        </p>
                    </div>
                </div>

                <div className="flex flex-col-reverse lg:flex-row-reverse border  border-green-500 w-[80%] mx-auto justify-around mt-[10%] gap-[100px] overflow-x-hidden">
                    <div className="relative w-fit mx-auto lg:mx-0" data-aos="zoom-in">
                        <img src={mission1} alt="" className="h-[350px] w-[500px] lg:h-[400px] lg:w-[1700px] object-contain" />

                        {/* <img src={mission2} alt="" className="h-[250px] w-[200px] absolute top-[75%] right-[75%] border-[10px] border-white"/> */}

                    </div>

                    <div className="flex flex-col gap-5 w-fit pr-[5%] border border-red-500" data-aos="fade-right">
                        <span className=" text-[30px] font-[600] text-[#312865]">
                            Our Vision
                        </span>

                        <p className="font-raleway text-[15px] font-[400] text-justify">
                        Our vision is to become a global leader in the development and supply of highly critical casting products, known for our unwavering focus on quality, innovation, and customer satisfaction. We aim to expand our reach, building on our 30 years of experience, to set new benchmarks in the industry and contribute to the progress of sectors that rely on our products for safety and performance.
                        </p>
                    </div>
                </div>



            </div>
            <Footer></Footer>
        </div>
    )
}
export default AboutUs