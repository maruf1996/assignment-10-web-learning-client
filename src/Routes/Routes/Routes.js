import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import Course from "../../Pages/Courses/Course/Course";
import Courses from "../../Pages/Courses/Courses/Courses";
import Details from "../../Pages/Courses/Details/Details";
import Home from "../../Pages/Home/Home/Home";
import NotFound from "../../Pages/NotFound/NotFound";
import FAQ from "../../Pages/Others/FAQ";
import Login from "../../Pages/Shared/Login/Login";
import Register from "../../Pages/Shared/Login/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/course',
                element:<Courses></Courses>
            },
            {
                path:'/category/:id',
                element:<Course></Course>,
                loader:({params})=>fetch(`https://web-learning-server-psi.vercel.app/category/${params.id}`)
            },
            {
                path:'/category/:id/details/:id',
                element:<PrivateRoute><Details></Details></PrivateRoute>,
                loader:({params})=>fetch(`https://web-learning-server-psi.vercel.app/details/${params.id}`)
            },
            {
                path:'/faq',
                element:<FAQ></FAQ>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:'*',
                element:<NotFound></NotFound>
            }
        ]
    }
])