import { Outlet } from "react-router-dom";
import Navber from "../Componnet/SharePage/Navber/Navber";
import Footer from "../Componnet/SharePage/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;