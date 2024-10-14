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


                <div
                    className="w-full h-fit lg:h-fit lg:py-10 border border-[#0A173B] mt-[10%] flex relative font-raleway"
                    style={{
                        backgroundColor: '#111827',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23002B82' stroke-width='0.5'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23002B82'%3E%3Ccircle cx='769' cy='229' r='1'/%3E%3Ccircle cx='539' cy='269' r='1'/%3E%3Ccircle cx='603' cy='493' r='1'/%3E%3Ccircle cx='731' cy='737' r='1'/%3E%3Ccircle cx='520' cy='660' r='1'/%3E%3Ccircle cx='309' cy='538' r='1'/%3E%3Ccircle cx='295' cy='764' r='1'/%3E%3Ccircle cx='40' cy='599' r='1'/%3E%3Ccircle cx='102' cy='382' r='1'/%3E%3Ccircle cx='127' cy='80' r='1'/%3E%3Ccircle cx='370' cy='105' r='1'/%3E%3Ccircle cx='578' cy='42' r='1'/%3E%3Ccircle cx='237' cy='261' r='1'/%3E%3Ccircle cx='390' cy='382' r='1'/%3E%3C/g%3E%3C/svg%3E")`,
                        backgroundSize: 'contain',
                        opacity: 50
                    }}
                >

                    <div className=" border-white flex flex-col lg:flex-row w-[80%] mx-auto justify-between items-center gap-10 my-[5%] lg:my-[0%] lg:gap-10">
                        <div className=" border-white w-[90%] lg:w-[40%] text-white font-railway flex gap-5 flex-col h-fit text-left" data-aos="fade-right">
                            <div className=" text-[30px] font-[500]">
                                Message From Our Leader
                            </div>

                            <div className="flex flex-col gap-5 text-[16px]">
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
                                <p className="text-[16px] ">Sincerely,</p>
                                <p className="text-[16px] ">Jai Gopal Goyal</p>
                                <p className="text-[16px] ">Owner, Rine Group of Industries</p>
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

                <div className="flex flex-col-reverse lg:flex-row-reverse   border-green-500 w-[80%] mx-auto justify-around mt-[10%] gap-[100px] overflow-x-hidden">
                    <div className="relative w-fit mx-auto lg:mx-0" data-aos="zoom-in">
                        <img src={mission1} alt="" className="h-[350px] w-[500px] lg:h-[400px] lg:w-[1700px] object-contain" />

                        {/* <img src={mission2} alt="" className="h-[250px] w-[200px] absolute top-[75%] right-[75%] border-[10px] border-white"/> */}

                    </div>

                    <div className="flex flex-col gap-5 w-fit pr-[5%]  border-red-500" data-aos="fade-right">
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


// background-color: #0024F7;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg %3E%3Cpolygon fill='%230221d4' points='1600 160 0 460 0 350 1600 50'/%3E%3Cpolygon fill='%23041fb1' points='1600 260 0 560 0 450 1600 150'/%3E%3Cpolygon fill='%23051c8d' points='1600 360 0 660 0 550 1600 250'/%3E%3Cpolygon fill='%23071a6a' points='1600 460 0 760 0 650 1600 350'/%3E%3Cpolygon fill='%23091747' points='1600 800 0 800 0 750 1600 450'/%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;
// background-size: cover;




// background-color: #0C182D;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2000' height='2000' viewBox='0 0 800 800'%3E%3Cg fill='none' %3E%3Cg stroke='%23002B82' stroke-width='17'%3E%3Cline x1='-8' y1='-8' x2='808' y2='808'/%3E%3Cline x1='-8' y1='792' x2='808' y2='1608'/%3E%3Cline x1='-8' y1='-808' x2='808' y2='8'/%3E%3C/g%3E%3Cg stroke='%23002a7d' stroke-width='16'%3E%3Cline x1='-8' y1='767' x2='808' y2='1583'/%3E%3Cline x1='-8' y1='17' x2='808' y2='833'/%3E%3Cline x1='-8' y1='-33' x2='808' y2='783'/%3E%3Cline x1='-8' y1='-783' x2='808' y2='33'/%3E%3C/g%3E%3Cg stroke='%23002878' stroke-width='15'%3E%3Cline x1='-8' y1='742' x2='808' y2='1558'/%3E%3Cline x1='-8' y1='42' x2='808' y2='858'/%3E%3Cline x1='-8' y1='-58' x2='808' y2='758'/%3E%3Cline x1='-8' y1='-758' x2='808' y2='58'/%3E%3C/g%3E%3Cg stroke='%23002773' stroke-width='14'%3E%3Cline x1='-8' y1='67' x2='808' y2='883'/%3E%3Cline x1='-8' y1='717' x2='808' y2='1533'/%3E%3Cline x1='-8' y1='-733' x2='808' y2='83'/%3E%3Cline x1='-8' y1='-83' x2='808' y2='733'/%3E%3C/g%3E%3Cg stroke='%2300256e' stroke-width='13'%3E%3Cline x1='-8' y1='92' x2='808' y2='908'/%3E%3Cline x1='-8' y1='692' x2='808' y2='1508'/%3E%3Cline x1='-8' y1='-108' x2='808' y2='708'/%3E%3Cline x1='-8' y1='-708' x2='808' y2='108'/%3E%3C/g%3E%3Cg stroke='%23002469' stroke-width='12'%3E%3Cline x1='-8' y1='667' x2='808' y2='1483'/%3E%3Cline x1='-8' y1='117' x2='808' y2='933'/%3E%3Cline x1='-8' y1='-133' x2='808' y2='683'/%3E%3Cline x1='-8' y1='-683' x2='808' y2='133'/%3E%3C/g%3E%3Cg stroke='%23002264' stroke-width='11'%3E%3Cline x1='-8' y1='642' x2='808' y2='1458'/%3E%3Cline x1='-8' y1='142' x2='808' y2='958'/%3E%3Cline x1='-8' y1='-158' x2='808' y2='658'/%3E%3Cline x1='-8' y1='-658' x2='808' y2='158'/%3E%3C/g%3E%3Cg stroke='%2300215f' stroke-width='10'%3E%3Cline x1='-8' y1='167' x2='808' y2='983'/%3E%3Cline x1='-8' y1='617' x2='808' y2='1433'/%3E%3Cline x1='-8' y1='-633' x2='808' y2='183'/%3E%3Cline x1='-8' y1='-183' x2='808' y2='633'/%3E%3C/g%3E%3Cg stroke='%23001f5a' stroke-width='9'%3E%3Cline x1='-8' y1='592' x2='808' y2='1408'/%3E%3Cline x1='-8' y1='192' x2='808' y2='1008'/%3E%3Cline x1='-8' y1='-608' x2='808' y2='208'/%3E%3Cline x1='-8' y1='-208' x2='808' y2='608'/%3E%3C/g%3E%3Cg stroke='%23001d55' stroke-width='8'%3E%3Cline x1='-8' y1='567' x2='808' y2='1383'/%3E%3Cline x1='-8' y1='217' x2='808' y2='1033'/%3E%3Cline x1='-8' y1='-233' x2='808' y2='583'/%3E%3Cline x1='-8' y1='-583' x2='808' y2='233'/%3E%3C/g%3E%3Cg stroke='%23001c50' stroke-width='7'%3E%3Cline x1='-8' y1='242' x2='808' y2='1058'/%3E%3Cline x1='-8' y1='542' x2='808' y2='1358'/%3E%3Cline x1='-8' y1='-558' x2='808' y2='258'/%3E%3Cline x1='-8' y1='-258' x2='808' y2='558'/%3E%3C/g%3E%3Cg stroke='%23001a4b' stroke-width='6'%3E%3Cline x1='-8' y1='267' x2='808' y2='1083'/%3E%3Cline x1='-8' y1='517' x2='808' y2='1333'/%3E%3Cline x1='-8' y1='-533' x2='808' y2='283'/%3E%3Cline x1='-8' y1='-283' x2='808' y2='533'/%3E%3C/g%3E%3Cg stroke='%23001946' stroke-width='5'%3E%3Cline x1='-8' y1='292' x2='808' y2='1108'/%3E%3Cline x1='-8' y1='492' x2='808' y2='1308'/%3E%3Cline x1='-8' y1='-308' x2='808' y2='508'/%3E%3Cline x1='-8' y1='-508' x2='808' y2='308'/%3E%3C/g%3E%3Cg stroke='%23001741' stroke-width='4'%3E%3Cline x1='-8' y1='467' x2='808' y2='1283'/%3E%3Cline x1='-8' y1='317' x2='808' y2='1133'/%3E%3Cline x1='-8' y1='-333' x2='808' y2='483'/%3E%3Cline x1='-8' y1='-483' x2='808' y2='333'/%3E%3C/g%3E%3Cg stroke='%2300153c' stroke-width='3'%3E%3Cline x1='-8' y1='342' x2='808' y2='1158'/%3E%3Cline x1='-8' y1='442' x2='808' y2='1258'/%3E%3Cline x1='-8' y1='-458' x2='808' y2='358'/%3E%3Cline x1='-8' y1='-358' x2='808' y2='458'/%3E%3C/g%3E%3Cg stroke='%23001338' stroke-width='2'%3E%3Cline x1='-8' y1='367' x2='808' y2='1183'/%3E%3Cline x1='-8' y1='417' x2='808' y2='1233'/%3E%3Cline x1='-8' y1='-433' x2='808' y2='383'/%3E%3Cline x1='-8' y1='-383' x2='808' y2='433'/%3E%3C/g%3E%3Cg stroke='%23013' stroke-width='1'%3E%3Cline x1='-8' y1='392' x2='808' y2='1208'/%3E%3Cline x1='-8' y1='-408' x2='808' y2='408'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
// background-attachment: fixed;


// background-color: #111827;
// background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23002B82' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23111827'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");