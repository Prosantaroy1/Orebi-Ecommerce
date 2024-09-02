import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Componnet/HomePage/Home/Home";
import Errorpage from "../Componnet/ErrorPage/Errorpage";
import ShopSec from "../Componnet/ShopPage/Shop Sec/ShopSec";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/shop',
                element:<ShopSec/>
            }
        ]
    }
])

export default router;