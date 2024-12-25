import {
    createBrowserRouter,
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddTutorials from "../pages/AddTutorials/AddTutorials";
import FindTutors from "../pages/FindTutors/FindTutors";
import MyTutorials from "../pages/MyTutorials/MyTutorials";
import MyBookedTutors from "../pages/MyBookedTutors/MyBookedTutors";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: '/find-tutors',
                element: <FindTutors></FindTutors>
            },
            {
                path: '/addTutorials',
                element: <PrivateRoute><AddTutorials></AddTutorials></PrivateRoute>
            },
            {
                path: '/myTutorials',
                element: <PrivateRoute><MyTutorials></MyTutorials></PrivateRoute>
            },
            {
                path: '/myBookedTutors',
                element: <PrivateRoute><MyBookedTutors></MyBookedTutors></PrivateRoute>
            }
        ]
    },
]);

export default router