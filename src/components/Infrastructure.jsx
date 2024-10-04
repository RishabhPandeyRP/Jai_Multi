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
            <div className=" border-red-500 w-[100%] h-auto  flex flex-col items-center justify-center pt-[5%] mb-[5%]">

                <span className="font-[600] text-[40px] text-center w-fit  border-red-200 mx-auto font-raleway text-transparent bg-clip-text bg-gradient-to-r from-[#0A173B] to-[#0025FF]            sm:text-[40px] lg:text-[52px] xl:text-[62px] mt-[1%] ">
                    Our Infrastructure
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

export default Infrastructure;
