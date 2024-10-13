import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const InfrastructureSidebar = () => {
    const [expandedOption, setExpandedOption] = useState('cs'); // Initialize with the first option expanded
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
    const [hoveredOption, setHoveredOption] = useState(null); // Track hover state
    const location = useLocation(); // Get current location

    const toggleExpand = (option) => {
        setExpandedOption(prev => (prev === option ? null : option)); // Toggle expansion
    };

    // Ensure the correct option is expanded when navigating between routes
    useEffect(() => {
        const currentPath = location.pathname.split('/')[2]; // Get the current section from the URL
        setExpandedOption(currentPath || 'cs'); // Auto-select the first option or the current one
    }, [location]);

    return (
        <div className="relative ">
            {/* Toggle Button for Mobile */}
            <button 
                className="md:hidden fixed top-[11%] right-4 z-50 p-2 bg-gray-800 text-white rounded"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
                {isSidebarOpen ? 'Close' : 'Menu'}
            </button>

            {/* Sidebar */}
            <div 
                className={`bg-[#111827] h-[100vh] w-64 font-raleway text-white overflow-y-scroll transition-transform transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 fixed md:relative top-[7.5%] md:top-0 left-0 z-40 md:block pb-[100px] md:pb-[0px]`}
            >
                <div className="text-3xl font-bold text-gray-200 text-center my-3">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>Infrastructure</Link>
                </div>
                <nav className="flex flex-col p-4">
                    {/* Centre Buffer Coupler */}
                    <NavLink
                        to="/infraPage/cs"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'cs' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('cs');
                            setIsSidebarOpen(false); // Close sidebar on mobile after clicking
                        }}
                        onMouseEnter={() => setHoveredOption('cs')} // Start hover tracking
                        onMouseLeave={() => setHoveredOption(null)} // End hover tracking
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Core Shop</span>
                            <span className="ml-2">{expandedOption === 'cs' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cs' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* Conditionally show full content on hover */}
                            {/* <p className="p-2">
                                {hoveredOption === 'cs' ? "25kW & 4.5kW Brushless Alternator for Railways" : "More details about Brushless Alternator"}
                            </p> */}
                        </div>
                    </NavLink>

                    {/* Center Pivot */}
                    <NavLink
                        to="/infraPage/m"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'm' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('m');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('m')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Moulding</span>
                            <span className="ml-2">{expandedOption === 'm' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'm' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'm' ? "Rectifier Cum Regulating Unit for 25 kW & 4.5 kW Brushless Alternator" : "More details about Rectifier Cum Regulating Unit"}
                            </p> */}
                        </div>
                    </NavLink>

                    {/* Axle Box Housing */}
                    <NavLink
                        to="/infraPage/ma"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'ma' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('ma');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('ma')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Melting Area</span>
                            <span className="ml-2">{expandedOption === 'ma' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'ma' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'ma' ? "Oil Cooling Unit For Railways" : "More details about Oil Cooling Unit"}
                            </p> */}
                        </div>
                    </NavLink>

                    {/* Suspension Tube */}
                    <NavLink
                        to="/infraPage/ht"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'ht' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('ht');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('ht')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Heat Treatment</span>
                            <span className="ml-2">{expandedOption === 'ht' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'ht' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'ht' ? "Types of Switch Board Cabinets" : "More details about Switch Board Cabinets"}
                            </p> */}
                        </div>
                    </NavLink>

                    <NavLink
                        to="/infraPage/ms"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'ms' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('ms');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('ms')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Machine Shop</span>
                            <span className="ml-2">{expandedOption === 'ms' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'ms' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'ms' ? "Types of Switch Board Cabinets" : "More details about Switch Board Cabinets"}
                            </p> */}
                        </div>
                    </NavLink>

                    <NavLink
                        to="/infraPage/qacl"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'qacl' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('qacl');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('qacl')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Quality Assurance - Chemical lab</span>
                            <span className="ml-2">{expandedOption === 'qacl' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'qacl' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'qacl' ? "Types of Switch Board Cabinets" : "More details about Switch Board Cabinets"}
                            </p> */}
                        </div>
                    </NavLink>

                    <NavLink
                        to="/infraPage/qapl"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'qapl' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('qapl');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('qapl')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Quality Assurance - Physical lab</span>
                            <span className="ml-2">{expandedOption === 'qapl' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'qapl' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* <p className="p-2">
                                {hoveredOption === 'qapl' ? "Types of Switch Board Cabinets" : "More details about Switch Board Cabinets"}
                            </p> */}
                        </div>
                    </NavLink>
                </nav>
            </div>

            {/* Overlay for mobile view when sidebar is open */}
            {isSidebarOpen && <div className="fixed inset-0 bg-black opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)}></div>}
        </div>
    );
};

export default InfrastructureSidebar;