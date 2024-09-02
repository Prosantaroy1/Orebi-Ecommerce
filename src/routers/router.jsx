import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Componnet/HomePage/Home/Home";
import Errorpage from "../Componnet/ErrorPage/Errorpage";
import ShopSec from "../Componnet/ShopPage/Shop Sec/ShopSec";
import Aboutpage from "../Componnet/AboutPage/Aboutpage";
import Contact from "../Componnet/ContactPage/Contact";
import Journal from "../Componnet/JournalPage/Journal";


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
            },
            {
                path: '/about',
                element:<Aboutpage/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/journals',
                element: <Journal/>
            }

        ]
    }
])

export default router;