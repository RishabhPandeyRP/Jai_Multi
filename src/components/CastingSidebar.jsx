// import { Link, NavLink, useLocation } from "react-router-dom";
// import { useState, useEffect } from "react";

// const CastingSidebar = () => {
//     const [expandedOption, setExpandedOption] = useState('cbc'); // Initialize with the first option expanded
//     const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
//     const location = useLocation(); // Get current location

//     const toggleExpand = (option) => {
//         setExpandedOption(prev => (prev === option ? null : option)); // Toggle expansion
//     };

//     // Ensure the correct option is expanded when navigating between routes
//     useEffect(() => {
//         const currentPath = location.pathname.split('/')[2]; // Get the current section from the URL
//         setExpandedOption(currentPath || 'cbc'); // Auto-select the first option or the current one
//     }, [location]);

//     return (
//         <div className="relative">
//             {/* Toggle Button for Mobile */}
//             <button 
//                 className="md:hidden fixed top-[11%] right-4 z-50 p-2 bg-gray-800 text-white rounded"
//                 onClick={() => setIsSidebarOpen(!isSidebarOpen)}
//             >
//                 {isSidebarOpen ? 'Close' : 'Menu'}
//             </button>

//             {/* Sidebar */}
//             <div 
//                 className={`bg-[#111827] h-[90vh] w-64 font-raleway text-white overflow-y-hidden transition-transform transform ${
//                     isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
//                 } md:translate-x-0 fixed md:relative top-[8.5%] md:top-0 left-0 z-40 md:block`}
//             >
//                 <div className="text-3xl font-bold text-gray-200 text-center my-3">
//                     <Link to="/" onClick={() => setIsSidebarOpen(false)}>Castings</Link>
//                 </div>
//                 <nav className="flex flex-col p-4">
//                     {/* Centre Buffer Coupler */}
//                     <NavLink
//                         to="/castingPage/cbc"
//                         className={({ isActive }) => 
//                             isActive || expandedOption === 'cbc' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
//                         onClick={() => {
//                             toggleExpand('cbc');
//                             setIsSidebarOpen(false); // Close sidebar on mobile after clicking
//                         }}
//                     >
//                         <div className="p-2 flex items-center justify-between">
//                             <span>Centre Buffer Coupler</span>
//                             <span className="ml-2">{expandedOption === 'cbc' ? '-' : '+'}</span> {/* Toggle icon */}
//                         </div>
//                         <div 
//                             className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cbc' ? 'max-h-40' : 'max-h-0'}`}
//                         >
//                             {/* Additional content for CBC */}
//                             <p className="p-2">More details about CBC...</p>
//                         </div>
//                     </NavLink>

//                     {/* Center Pivot */}
//                     <NavLink
//                         to="/castingPage/cp"
//                         className={({ isActive }) => 
//                             isActive || expandedOption === 'cp' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
//                         onClick={() => {
//                             toggleExpand('cp');
//                             setIsSidebarOpen(false);
//                         }}
//                     >
//                         <div className="p-2 flex items-center justify-between">
//                             <span>Center Pivot</span>
//                             <span className="ml-2">{expandedOption === 'cp' ? '-' : '+'}</span> {/* Toggle icon */}
//                         </div>
//                         <div 
//                             className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cp' ? 'max-h-40' : 'max-h-0'}`}
//                         >
//                             <p className="p-2">More details about Center Pivot...</p>
//                         </div>
//                     </NavLink>

//                     {/* Axle Box Housing */}
//                     <NavLink
//                         to="/castingPage/abh"
//                         className={({ isActive }) => 
//                             isActive || expandedOption === 'abh' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
//                         onClick={() => {
//                             toggleExpand('abh');
//                             setIsSidebarOpen(false);
//                         }}
//                     >
//                         <div className="p-2 flex items-center justify-between">
//                             <span>Axle Box Housing</span>
//                             <span className="ml-2">{expandedOption === 'abh' ? '-' : '+'}</span>
//                         </div>
//                         <div 
//                             className={`overflow-hidden transition-all duration-500 ${expandedOption === 'abh' ? 'max-h-40' : 'max-h-0'}`}
//                         >
//                             <p className="p-2">More details about Axle Box Housing...</p>
//                         </div>
//                     </NavLink>

//                     {/* Suspension Tube */}
//                     <NavLink
//                         to="/castingPage/st"
//                         className={({ isActive }) => 
//                             isActive || expandedOption === 'st' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
//                         onClick={() => {
//                             toggleExpand('st');
//                             setIsSidebarOpen(false);
//                         }}
//                     >
//                         <div className="p-2 flex items-center justify-between">
//                             <span>Suspension Tube</span>
//                             <span className="ml-2">{expandedOption === 'st' ? '-' : '+'}</span>
//                         </div>
//                         <div 
//                             className={`overflow-hidden transition-all duration-500 ${expandedOption === 'st' ? 'max-h-40' : 'max-h-0'}`}
//                         >
//                             <p className="p-2">More details about Suspension Tube...</p>
//                         </div>
//                     </NavLink>
//                 </nav>
//             </div>

//             {/* Overlay for mobile view when sidebar is open */}
//             {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
//         </div>
//     );
// };

// export default CastingSidebar;


import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const CastingSidebar = () => {
    const [expandedOption, setExpandedOption] = useState('cbc'); // Initialize with the first option expanded
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
    const [hoveredOption, setHoveredOption] = useState(null); // Track hover state
    const location = useLocation(); // Get current location

    const toggleExpand = (option) => {
        setExpandedOption(prev => (prev === option ? null : option)); // Toggle expansion
    };

    // Ensure the correct option is expanded when navigating between routes
    useEffect(() => {
        const currentPath = location.pathname.split('/')[2]; // Get the current section from the URL
        setExpandedOption(currentPath || 'cbc'); // Auto-select the first option or the current one
    }, [location]);

    return (
        <div className="relative -z-10">
            {/* Toggle Button for Mobile */}
            <button 
                className="md:hidden fixed top-[11%] right-4 z-50 p-2 bg-gray-800 text-white rounded"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Close' : 'Menu'}
            </button>

            {/* Sidebar */}
            <div 
                className={`bg-[#111827] h-[90vh] w-64 font-raleway text-white overflow-y-hidden transition-transform transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 fixed md:relative top-[8.5%] md:top-0 left-0 z-40 md:block`}
            >
                <div className="text-3xl font-bold text-gray-200 text-center my-3">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>Castings</Link>
                </div>
                <nav className="flex flex-col p-4">
                    {/* Centre Buffer Coupler */}
                    <NavLink
                        to="/castingPage/cbc"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'cbc' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('cbc');
                            setIsSidebarOpen(false); // Close sidebar on mobile after clicking
                        }}
                        onMouseEnter={() => setHoveredOption('cbc')} // Start hover tracking
                        onMouseLeave={() => setHoveredOption(null)} // End hover tracking
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Centre Buffer Coupler</span>
                            <span className="ml-2">{expandedOption === 'cbc' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cbc' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* Conditionally show full content on hover */}
                            <p className="p-2">
                                {hoveredOption === 'cbc' ? "More details about CBC..." : "More details about CBC..."}
                            </p>
                        </div>
                    </NavLink>

                    {/* Center Pivot */}
                    <NavLink
                        to="/castingPage/cp"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'cp' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('cp');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('cp')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Center Pivot</span>
                            <span className="ml-2">{expandedOption === 'cp' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cp' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'cp' ? "More details about Center Pivot..." : "More details about Center Pivot..."}
                            </p>
                        </div>
                    </NavLink>

                    {/* Axle Box Housing */}
                    <NavLink
                        to="/castingPage/abh"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'abh' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('abh');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('abh')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Axle Box Housing</span>
                            <span className="ml-2">{expandedOption === 'abh' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'abh' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'abh' ? "More details about Axle Box Housing..." : "More details about Axle Box Housing..."}
                            </p>
                        </div>
                    </NavLink>

                    {/* Suspension Tube */}
                    <NavLink
                        to="/castingPage/st"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'st' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('st');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('st')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Suspension Tube</span>
                            <span className="ml-2">{expandedOption === 'st' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'st' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'st' ? "More details about Suspension Tube..." : "More details about Suspension Tube..."}
                            </p>
                        </div>
                    </NavLink>
                </nav>
            </div>

            {/* Overlay for mobile view when sidebar is open */}
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
        </div>
    );
};

export default CastingSidebar;
