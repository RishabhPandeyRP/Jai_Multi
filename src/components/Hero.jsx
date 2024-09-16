import heroImg from "../assets/heroImg.png"
import h1 from "../assets/h1.svg"
import h2 from "../assets/h1.svg"
import h3 from "../assets/h1.svg"
import h4 from "../assets/h1.svg"
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
        },
        {
            logo: h2,
            heading: "Number of Knuckles Supplied",
            number: 50000,
            color: "0A173B",
        },
        {
            logo: h3,
            heading: "Experience in Manufacturing",
            number: 30,
            color: "17236A",
        },
        {
            logo: h4,
            heading: "Daily Liquid Metal Pouring Capacity",
            number: 70,
            color: "0A173B",
        },
    ]
    return (
        <div className="w-full h-[75vh]  border-green-600 mb-[12%]">
            <img src={heroImg} alt="heroImg" className="w-full h-full border brightness-[70%] object-cover -z-10" />

            <div className="absolute top-[25%] md:top-[35%] left-[5%] font-raleway text-[28px] md:text-[32px] text-white font-bold w-[55%] z-0">
                Pioneering innovation and precision engineering for Freight Couplers and Knuckles
            </div>

            <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
                <div className="lg:flex absolute top-[70%] hidden  lg:left-[0%] lg:w-[100%] xl:left-[14%] xl:w-[70%]">
                    {
                        data?.map((item) => (
                            <div className={`flex gap-7 xl:w-[70%] lg:w-[60%] py-2 text-white`} style={{ backgroundColor: `#${item.color}` }}>
                                <div>
                                    <img src={item.logo} alt="" />
                                </div>

                                <div className="flex flex-col justify-center">
                                    <div className="font-inter font-extralight text-[12px] w-[90%]">
                                        {item.heading}
                                    </div>
                                    <div className="font-inter font-bold text-[24px]">
                                        {
                                            counterOn && <CountUp start={0} end={item.number} duration={2} delay={0}></CountUp>
                                        }+
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