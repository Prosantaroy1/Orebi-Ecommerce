import { Outlet } from "react-router-dom";
import Navber from "../Componnet/SharePage/Navber/Navber";

const Main = () => {
    return (
        <div>
            <Navber/>
            <Outlet/>
        </div>
    );
};

export default Main;