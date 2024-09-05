import { Outlet } from "react-router-dom";
import Navber from "../Componnet/SharePage/Navber/Navber";
import Footer from "../Componnet/SharePage/Footer/Footer";
import { IoCallOutline } from "react-icons/io5";

const Main = () => {
    return (
        <div className="relative">
            <Navber />
            <Outlet />
            <Footer />
            {/* sms */}         
        </div>
    );
};

export default Main;