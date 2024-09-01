import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Componnet/HomePage/Home/Home";
import Errorpage from "../Componnet/ErrorPage/Errorpage";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement:<Errorpage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    }
])

export default router;