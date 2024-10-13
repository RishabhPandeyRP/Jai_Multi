import { Link, NavLink, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

const CastingSidebar = () => {
    const [expandedOption, setExpandedOption] = useState('cbc'); // Initialize with the first option expanded
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
        <div className="bg-[#111827] h-[90vh]  w-64 font-raleway text-white overflow-y-hidden">
            <div className="text-3xl font-bold text-gray-200 text-center my-3">
                <Link to="/">Castings</Link>
            </div>
            <nav className="flex flex-col p-4">
                {/* Centre Buffer Coupler */}
                <NavLink
                    to="/castingPage/cbc"
                    className={({ isActive }) => 
                        isActive || expandedOption === 'cbc' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                    onClick={() => toggleExpand('cbc')}
                >
                    <div className="p-2 flex items-center justify-between">
                        <span>Centre Buffer Coupler</span>
                        <span className="ml-2">{expandedOption === 'cbc' ? '-' : '+'}</span> {/* Toggle icon */}
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cbc' ? 'max-h-40' : 'max-h-0'}`}
                    >
                        {/* Additional content for CBC goes here */}
                        <p className="p-2">More details about CBC...</p>
                    </div>
                </NavLink>

                {/* Center Pivot */}
                <NavLink
                    to="/castingPage/cp"
                    className={({ isActive }) => 
                        isActive || expandedOption === 'cp' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                    onClick={() => toggleExpand('cp')}
                >
                    <div className="p-2 flex items-center justify-between">
                        <span>Center Pivot</span>
                        <span className="ml-2">{expandedOption === 'cp' ? '-' : '+'}</span> {/* Toggle icon */}
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ${expandedOption === 'cp' ? 'max-h-40' : 'max-h-0'}`}
                    >
                        {/* Additional content for CP goes here */}
                        <p className="p-2">More details about Center Pivot...</p>
                    </div>
                </NavLink>

                {/* Axle Box Housing */}
                <NavLink
                    to="/castingPage/abh"
                    className={({ isActive }) => 
                        isActive || expandedOption === 'abh' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                    onClick={() => toggleExpand('abh')}
                >
                    <div className="p-2 flex items-center justify-between">
                        <span>Axle Box Housing</span>
                        <span className="ml-2">{expandedOption === 'abh' ? '-' : '+'}</span> {/* Toggle icon */}
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ${expandedOption === 'abh' ? 'max-h-40' : 'max-h-0'}`}
                    >
                        {/* Additional content for ABH goes here */}
                        <p className="p-2">More details about Axle Box Housing...</p>
                    </div>
                </NavLink>

                {/* Suspension Tube */}
                <NavLink
                    to="/castingPage/st"
                    className={({ isActive }) => 
                        isActive || expandedOption === 'st' ? "bg-gray-700 rounded mb-2 flex flex-col transition-all duration-500 p-3" : "p-2 rounded mb-2 hover:bg-gray-700 transition-all"}
                    onClick={() => toggleExpand('st')}
                >
                    <div className="p-2 flex items-center justify-between">
                        <span>Suspension Tube</span>
                        <span className="ml-2">{expandedOption === 'st' ? '-' : '+'}</span> {/* Toggle icon */}
                    </div>
                    <div 
                        className={`overflow-hidden transition-all duration-500 ${expandedOption === 'st' ? 'max-h-40' : 'max-h-0'}`}
                    >
                        {/* Additional content for ST goes here */}
                        <p className="p-2">More details about Suspension Tube...</p>
                    </div>
                </NavLink>
            </nav>
        </div>
    );
};

export default CastingSidebar;
