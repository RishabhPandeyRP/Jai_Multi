// import { useState, useEffect } from "react";
// import logo from "../assets/logo.png";
// import { Link } from "react-router-dom";

// const NavBar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasScrolled, setHasScrolled] = useState(false);

//   // Function to handle scroll and update navbar style
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 500) { // Change this value to the distance you want
//         setHasScrolled(true);
//       } else {
//         setHasScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div
//       className={`fixed w-full py-2 shadow-md z-30 text-white transition-colors duration-300 ease-in-out ${
//         hasScrolled
//           ? "bg-[#0A173B] backdrop-blur-none" // Background when scrolled
//           : "bg-[#0A173B]/20 backdrop-blur-sm" // Original transparent background
//       }`}
//     >
//       <div className="flex justify-between items-center pl-[3%] pr-[3%] w-full">
//         <div className="flex justify-between md:w-[87%] lg:w-[75%] xl:w-[69%] items-center">
//           {/* Logo */}
//           <img src={logo} alt="logo" className="w-[120px]" />

//           {/* Desktop Menu */}
//           <div className="hidden md:flex text-[16px] font-medium font-inter sm:space-x-4 md:space-x-6 lg:space-x-8 -ml-[10%]">
//             <span className="cursor-pointer group">
//               <Link to="/">
//                 <span>Home</span>
//               </Link>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//             <span className="cursor-pointer group">
//               <Link to="/aboutus">
//                 <span>About Us</span>
//               </Link>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//             <span className="cursor-pointer group">
//               <span>Product Line</span>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//             <span className="cursor-pointer group">
//               <Link to="/certification">
//                 <span>Certifications</span>
//               </Link>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//             <span className="cursor-pointer group">
//               <Link to="/infra">
//                 <span>Infrastructure</span>
//               </Link>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//             <span className="cursor-pointer group">
//               <Link to="/contactpage">
//                 <span>Contact Us</span>
//               </Link>
//               <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//             </span>
//           </div>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div
//           className="md:hidden flex items-center cursor-pointer mr-3"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <svg
//             className="w-6 h-6 text-white"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth="2"
//               d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//             />
//           </svg>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-2 space-y-4 px-4">
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>Home</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>About Us</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>Product line</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>Certifications</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>Quality</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//           <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
//             <span>Contact Us</span>
//             <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
//           </span>
//         </div>
//       )}
//     </div>
//   );
// };

// export default NavBar;




import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false); // State for Product Line dropdown
    const [navbarBg, setNavbarBg] = useState(false); // State to handle background change on scroll

    // Function to handle scroll event for navbar background color
    const handleScroll = () => {
        if (window.scrollY >= 100) {
            setNavbarBg(true); // Change background after certain scroll
        } else {
            setNavbarBg(false); // Revert back to original style
        }
    };

    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);

    return (
        <div
            className={`fixed ${
                navbarBg ? "bg-[#111827]" : "bg-[#0A173B]/20"
            } backdrop-blur-sm w-[100%] md:w-full py-2 shadow-md shadow-[#0A173B]/25 border-[#111827]/25 z-30 text-white transition-all duration-300`}
        >
            <div className="flex justify-between items-center pl-[3%] pr-[3%] border-green-500 w-full">
                <div className="border-red-500 flex justify-between md:w-[87%] lg:w-[75%] xl:w-[69%] items-center">
                    {/* Logo */}
                    <img src={logo} alt="logo" className="w-[120px] border-red-500" />

                    {/* Desktop Menu */}
                    <div className="hidden md:flex border-red-500 text-[13px] lg:text-[15px] font-medium font-inter sm:space-x-4 md:space-x-6 lg:space-x-8  -ml-[10%]">
                        <span className="cursor-pointer group">
                            <Link to="/"><span>Home</span></Link>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        </span>
                        <span className="cursor-pointer group">
                            <Link to="/aboutus"><span>About Us</span></Link>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        </span>

                        {/* Product Line Dropdown */}
                        <span
                            className="cursor-pointer group relative"
                            onClick={() => setDropdownOpen(!dropdownOpen)} // Toggle dropdown
                        >
                            <span>Product Line</span>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>

                            {/* Dropdown Menu */}
                            {dropdownOpen && (
                                <div className="absolute left-0 mt-2 w-[220px] bg-[#0A173B] text-white rounded-md shadow-lg font-raleway text-[14px]">
                                    <Link
                                        to="/castingPage"
                                        className="block px-4 py-2 hover:bg-[#1e2a4a] transition-all"
                                    >
                                        Castings
                                    </Link>
                                    <Link
                                        to="/elctroMechDiv"
                                        className="block px-4 py-2 hover:bg-[#1e2a4a] transition-all"
                                    >
                                        Electro - Mechanical division 
                                    </Link>
                                </div>
                            )}
                        </span>

                        <span className="cursor-pointer group">
                            <Link to="/certification"><span>Certifications</span></Link>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        </span>
                        <span className="cursor-pointer group">
                            <Link to="/infra"><span>Infrastructure</span></Link>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        </span>
                        <span className="cursor-pointer group">
                            <Link to="/contactpage"><span>Contact Us</span></Link>
                            <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        </span>
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
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
                    <Link to="/"><span>Home</span></Link>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
                    <Link to="/aboutus"><span>About Us</span></Link>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group" onClick={() => setDropdownOpen(!dropdownOpen)}>
                        <span>Product Line</span>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                        {/* Dropdown Menu */}
                        {dropdownOpen && (
                                <div className="absolute left-5 mt-2 w-[220px] bg-[#0A173B] text-white rounded-md shadow-lg font-raleway text-[14px]">
                                    <Link
                                        to="/casting"
                                        className="block px-4 py-2 hover:bg-[#1e2a4a] transition-all"
                                    >
                                        Castings
                                    </Link>
                                    <Link
                                        to="/elctroMechDiv"
                                        className="block px-4 py-2 hover:bg-[#1e2a4a] transition-all"
                                    >
                                        Electro - Mechanical division 
                                    </Link>
                                </div>
                            )}
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
                    <Link to="/certification"><span>Certifications</span></Link>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
                    <Link to="/infra"><span>Infrastructure</span></Link>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                    </span>
                    <span className="block text-[16px] font-medium font-inter cursor-pointer hover:text-blue-500 group">
                        <Link to="/contactpage"><span>Contact Us</span></Link>
                        <div className="transition-all duration-50 ease-out scale-x-0 group-hover:scale-x-100 bg-[#ffffff] h-[5.5%]"></div>
                    </span>
                </div>
            )}
        </div>
    );
};

export default NavBar;
