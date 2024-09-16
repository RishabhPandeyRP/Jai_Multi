// import logo from "../assets/logo.png"
// const NavBar = ()=>{
//     return(
//         <div className="w-full py-2 border border-red-800 ">

//             <div className="flex justify-between items-center pl-[3%]  border-green-500 w-[90%]">
//             <img src={logo} alt="logo" className=" border-red-500"/>

//             <div className=" border-red-500 w-[534Px] mx-auto text-[16px] font-medium font-inter flex justify-between ">
//                 <span className="cursor-pointer">Home</span>
//                 <span className="cursor-pointer">About</span>
//                 <span className="cursor-pointer">Engine Parts</span>
//                 <span className="cursor-pointer">Information</span>
//                 <span className="cursor-pointer">Contact Us</span>
//             </div>
//             </div>
//         </div>
//     )
// }

// export default NavBar




import { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="fixed bg-[#0A173B]/20 backdrop-blur-sm w-full py-2 shadow-md shadow-[#0A173B]/25 border-[#0A173B]/25  z-10 text-white">
            <div className="flex justify-between items-center pl-[3%] pr-[3%] border-green-500 w-full">
                <div className=" border-red-500 flex justify-between md:w-[87%] lg:w-[75%] xl:w-[69%] items-center">
                    {/* Logo */}
                    <img src={logo} alt="logo" className="w-[120px] border-red-500" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex  border-red-500 text-[16px] font-medium font-inter sm:space-x-4 md:space-x-6 lg:space-x-8 -ml-[10%]">
                        <span className="cursor-pointer hover:text-blue-500">Home</span>
                        <span className="cursor-pointer hover:text-blue-500">About Us</span>
                        <span className="cursor-pointer hover:text-blue-500">Product Line</span>
                        <span className="cursor-pointer hover:text-blue-500">Certifications</span>
                        <span className="cursor-pointer hover:text-blue-500">Quality</span>
                        <span className="cursor-pointer hover:text-blue-500">Contact Us</span>
                    </div>
                </div>

                {/* Hamburger Icon for Mobile */}
                <div
                    className="md:hidden flex items-center cursor-pointer mr-3"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                        />
                    </svg>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden mt-2 space-y-4 px-4">
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        Home
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        About
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        Product Line
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        Certifications
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        Quality
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500">
                        Contact Us
                    </span>
                </div>
            )}
        </div>
    );
};

export default NavBar;
