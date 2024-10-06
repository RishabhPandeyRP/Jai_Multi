import NavBar from "./NavBar";
import mission1 from "../assets/Vector 4.png";
import Footer from "./Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Infrastructure = () => {
    const data = [{
        heading: "Core Shop",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },
    {
        heading: "Moulding ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },
    {
        heading: "Furnace ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },
    {
        heading: "Heat Treatment ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },
    {
        heading: "Machine Shop",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },
    {
        heading: "Quality Assurance ",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum facere exercitationem nobis mollitia recusandae vitae sunt praesentium! Saepe, perferendis aliquid.",
        imgUrl: mission1
    },]

    useEffect(() => {
        AOS.init({
            duration: 1000,
            offset: 300
        });

        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <NavBar></NavBar>
            <div className="border border-red-500 w-[100%] h-auto  flex flex-col items-center justify-center pt-[5%] mb-[5%]">

                <div className="w-[100%] sticky top-[5.5%] md:top-[4.9%] lg:top-[4.9%] z-10 bg-white border border-green-500 flex justify-center mx-auto">
                    <span className="font-[600] text-[40px] text-center w-fit border border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF] sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%]">
                        Our Infrastructure
                    </span>
                </div>




                <div className="w-[90%] md:w-[80%] h-auto  no-scrollbar flex flex-col gap-[100px] md:gap-[200px] border border-green-500 mt-[15%] md:mt-[5%] ml-[10%] md:ml-[0%]" id="scrollable-container" >



                    {
                        data?.map((item, index) => (
                            <div className={`flex flex-col items-center md:items-start  ${index % 2 == 0 ? "lg:flex-row-reverse gap-10 md:gap-28 sm:flex-col" : "gap-10 lg:gap-5 sm:flex-col lg:flex-row"}`} key={index}>
                                <div className={`flex flex-col gap-5 ${index % 2 == 0 ? "pr-[0%]" : "pr-[10%]"}`} data-aos="fade-right">
                                    <span className="text-[32px] font-[600] text-[#312865]" >
                                        {item.heading}
                                    </span>
                                    <p className="font-raleway text-[15px] font-[400] text-justify">
                                        {item.text}
                                    </p>
                                </div>
                                <img src={item.imgUrl} alt="" className="w-[650px] md:w-[850px] h-[400px] md:h-[500px] rounded-md" data-aos="fade-left" />
                            </div>
                        ))
                    }
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
}

export default Infrastructure;
