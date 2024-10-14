import { Outlet } from "react-router-dom";
import CastingSidebar from "./CastingSidebar";
import Footer from "./Footer";
import NavBar from "./NavBar";
import {  Navigate, useLocation } from "react-router-dom";
import ElectroMechSidebar from "./ElectroMechSidebar";

const ElectroMechPage = () => {
    const location = useLocation();

    // Redirect to default content if no specific section is selected
    if (location.pathname === "/electromechPage") {
        return <Navigate to="/electromechPage/ba" />;
    }
    return (
        <div className="w-full h-full  border-green-500">
            <NavBar></NavBar>
            <div className="h-[67px] w-full  border-green-500"></div>
            <div className="flex w-full h-[100%]  border-red-500">
                <ElectroMechSidebar />
                <div className="flex-1 p-6  border-red-600  h-[100%]">
                    <Outlet />
                </div>
            </div>
            {/* <Footer></Footer> */}
        </div>
    )
}

export default ElectroMechPage;