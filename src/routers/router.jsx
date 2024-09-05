import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Componnet/HomePage/Home/Home";
import Errorpage from "../Componnet/ErrorPage/Errorpage";
import ShopSec from "../Componnet/ShopPage/Shop Sec/ShopSec";
import Aboutpage from "../Componnet/AboutPage/Aboutpage";
import Contact from "../Componnet/ContactPage/Contact";
import Journal from "../Componnet/JournalPage/Journal";
import LoginPage from "../Componnet/LoginPage/LoginPage";
import RegisterPage from "../Componnet/RegisterPage/RegisterPage";
import CartPage from "../Componnet/HomePage/CartPage/CartPage";
import ProcessCheek from "../Componnet/HomePage/Process CheekOut/ProcessCheek";


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
                path: '/cart',
                element: <CartPage/>
            },
            {
                path: '/contact',
                element: <Contact/>
            },
            {
                path: '/journals',
                element: <Journal/>
            },
            {
                path: '/cheekout',
                element:<ProcessCheek/>
            }

        ]
    },
    {
        path: '/login',
        element: <LoginPage/>
    },
    {
        path: '/register',
        element: <RegisterPage/>
    }

])

export default router;