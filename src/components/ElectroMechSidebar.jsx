import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const ElectroMechSidebar = () => {
    const [expandedOption, setExpandedOption] = useState('ba'); // Initialize with the first option expanded
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile toggle
    const [hoveredOption, setHoveredOption] = useState(null); // Track hover state
    const location = useLocation(); // Get current location

    const toggleExpand = (option) => {
        setExpandedOption(prev => (prev === option ? null : option)); // Toggle expansion
    };

    // Ensure the correct option is expanded when navigating between routes
    useEffect(() => {
        const currentPath = location.pathname.split('/')[2]; // Get the current section from the URL
        setExpandedOption(currentPath || 'ba'); // Auto-select the first option or the current one
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
                className={`bg-[#111827] h-[90vh] w-64 font-raleway text-white overflow-y-hidden transition-transform transform ${
                    isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                } md:translate-x-0 fixed md:relative top-[8.5%] md:top-0 left-0 z-40 md:block`}
            >
                <div className="text-3xl font-bold text-gray-200 text-center my-3">
                    <Link to="/" onClick={() => setIsSidebarOpen(false)}>Electro-Mech Division</Link>
                </div>
                <nav className="flex flex-col p-4">
                    {/* Centre Buffer Coupler */}
                    <NavLink
                        to="/electromechPage/ba"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'cbc' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('ba');
                            setIsSidebarOpen(false); // Close sidebar on mobile after clicking
                        }}
                        onMouseEnter={() => setHoveredOption('ba')} // Start hover tracking
                        onMouseLeave={() => setHoveredOption(null)} // End hover tracking
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Brushless Alternator</span>
                            <span className="ml-2">{expandedOption === 'ba' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cbc' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            {/* Conditionally show full content on hover */}
                            <p className="p-2">
                                {hoveredOption === 'ba' ? "25kW & 4.5kW Brushless Alternator for Railways" : "More details about Brushless Alternator"}
                            </p>
                        </div>
                    </NavLink>

                    {/* Center Pivot */}
                    <NavLink
                        to="/electromechPage/rcru"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'rcru' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('rcru');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('rcru')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Rectifier Cum Regulating Unit</span>
                            <span className="ml-2">{expandedOption === 'rcru' ? '-' : '+'}</span> {/* Toggle icon */}
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'rcru' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'rcru' ? "Rectifier Cum Regulating Unit for 25 kW & 4.5 kW Brushless Alternator" : "More details about Rectifier Cum Regulating Unit"}
                            </p>
                        </div>
                    </NavLink>

                    {/* Axle Box Housing */}
                    <NavLink
                        to="/electromechPage/ocu"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'ocu' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('ocu');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('ocu')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Oil Cooling Unit</span>
                            <span className="ml-2">{expandedOption === 'ocu' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'ocu' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'ocu' ? "Oil Cooling Unit For Railways" : "More details about Oil Cooling Unit"}
                            </p>
                        </div>
                    </NavLink>

                    {/* Suspension Tube */}
                    <NavLink
                        to="/electromechPage/sbc"
                        className={({ isActive }) => 
                            isActive || expandedOption === 'sbc' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                        onClick={() => {
                            toggleExpand('sbc');
                            setIsSidebarOpen(false);
                        }}
                        onMouseEnter={() => setHoveredOption('sbc')}
                        onMouseLeave={() => setHoveredOption(null)}
                    >
                        <div className="p-2 flex items-center justify-between">
                            <span>Switch Board Cabinets</span>
                            <span className="ml-2">{expandedOption === 'sbc' ? '-' : '+'}</span>
                        </div>
                        <div 
                            className={`overflow-hidden transition-all duration-500 ${expandedOption === 'sbc' ? 'max-h-40' : 'max-h-0'}`}
                        >
                            <p className="p-2">
                                {hoveredOption === 'sbc' ? "Types of Switch Board Cabinets" : "More details about Switch Board Cabinets"}
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

export default ElectroMechSidebar;