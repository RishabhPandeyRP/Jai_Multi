import heroImg from "../assets/trainImg2.jpg"
import h1 from "../assets/hero1.svg"
import h2 from "../assets/hero2.svg"
import h3 from "../assets/hero3.svg"
import h4 from "../assets/hero4.png"
import CountUp from "react-countup"
import ScrollTrigger from "react-scroll-trigger"
import { useState } from "react"

const Hero = () => {

    const [counterOn, setCounterOn] = useState(false);

    let data = [
        {
            logo: h1,
            heading: "Number of couplers supplied",
            number: 30000,
            color: "17236A",
            after:""
        },
        {
            logo: h2,
            heading: "Number of Knuckles Supplied",
            number: 50000,
            color: "0A173B",
            after:""
        },
        {
            logo: h3,
            heading: "Experience in Manufacturing",
            number: 30,
            color: "17236A",
            after:"Years"
        },
        {
            logo: h4,
            heading: "Daily Liquid Metal Pouring Capacity",
            number: 70,
            color: "0A173B",
            after:"Tons"
        },
    ]
    return (
        <div className="w-full h-[80vh]  border-green-600 mb-[10%]">
            <img src={heroImg} alt="heroImg" className="w-full h-full border brightness-[70%] object-cover -z-10" />

            <div className="absolute top-[25%] md:top-[35%] left-[5%] font-newspaper text-[31px] md:text-[38px] text-white font-bold w-[55%] z-0">
                Pioneering Innovation and Precision Engineering for Freight Couplers and Knuckles
            </div>

            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className="lg:flex absolute top-[75%] hidden  lg:left-[0%] lg:w-[100%] xl:left-[14%] xl:w-[70%]">
                    {
                        data?.map((item) => (
                            <div className={`flex justify-between px-2 items-center mx-auto   border-green-500  xl:w-[70%] lg:w-[60%] py-2 text-white`} style={{ backgroundColor: `#${item.color}` }}>
                                <div className=" border-red-500">
                                    <img src={item.logo} alt="" className="object-cover mx-auto w-[70px] h-[70px]" />
                                </div>

                                <div className="flex flex-col justify-center   border-red-500">
                                    <div className="font-inter font-extralight text-[12px] w-[90%]">
                                        {item.heading}
                                    </div>
                                    <div className="font-inter font-bold text-[24px]">
                                        {
                                            counterOn && <CountUp start={0} end={item.number} duration={2} delay={0}></CountUp>
                                        }+{item.after}
                                    </div>
                                </div>

                            </div>
                        ))
                    }
                </div>
            </ScrollTrigger>

            <div className="w-full h-[185px] bg-white  border-red-600">

            </div>


        </div>
    )
}

export default Hero;