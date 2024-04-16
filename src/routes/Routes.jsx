import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import Contact from "../pages/Contact/Contact";
import PrivateRoute from "./PrivateRoute";
import ViewProperty from "../pages/ViewProperty/ViewProperty";
import UserProfile from "../pages/UserProfile/UserProfile";
import About from "../pages/About/About";
import Error from "../pages/Error/Error";
import Update from "../pages/Update/Update";
import Agents from "../pages/Agents/Agents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement:<Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                errorElement:<Error></Error>
            },
            {
                path: '/login',
                element: <Login></Login>,
                errorElement:<Error></Error>
            },
            {
                path: '/register',
                element: <Register></Register>,
                errorElement:<Error></Error>
            },
            {
                path: '/contact',
                element: <Contact></Contact>,
                errorElement:<Error></Error>
            },
            {
                path: '/about',
                element: <About></About>,
                errorElement:<Error></Error>
            },
            {
                path: '/userProfile',
                element: <PrivateRoute> <UserProfile></UserProfile></PrivateRoute>,
                errorElement:<Error></Error>
            },
            {
                path: '/house/:ids',
                element: <PrivateRoute><ViewProperty></ViewProperty></PrivateRoute>,
                errorElement:<Error></Error>,
                loader: () => fetch('/houses.json')
            },
            {
                path: '/agent',
                element: <PrivateRoute><Agents></Agents></PrivateRoute>
            },
            {
                path: '/update',
                element: <Update></Update>
            }
        ]
    }
])
export default router;