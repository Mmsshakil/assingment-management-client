import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import AddProduct from "../pages/AddProduct/AddProduct";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";

import Assingments from "../pages/Assingments/Assingments";
import AssingmentDetails from "../pages/Assingments/AssingmentDetails";
import UpdateAssingments from "../pages/Assingments/UpdateAssingments";
import TakeAssingment from "../pages/Assingments/TakeAssingment";
import MyAssingments from "../pages/Assingments/MyAssingments";
import SubmitedAssingment from "../pages/Assingments/SubmitedAssingment/SubmitedAssingment";
import MarkAssingment from "../pages/Assingments/SubmitedAssingment/MarkAssingment";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/service.json')
                // loader: () => fetch('/public/service.json')
                // loader: () => fetch('../../public/service.json')


            },
            {
                path: '/service/:id',
                element: <PrivateRoute><Service></Service></PrivateRoute>,
                loader: () => fetch('/service.json')
                // loader: () => fetch('./service.json')
                // loader: () => fetch('/public/service.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/addProduct',
                element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
            },
        
            {
                path: '/assingments',
                element: <Assingments></Assingments>,
                loader: () => fetch(`https://assingment-manage-server.vercel.app/assingments`)
                // loader: ({currentPage, itemsPerpage}) => fetch(`https://assingment-manage-server.vercel.app/assingments?page=${currentPage}&size=${itemsPerpage}`)
            },
            {
                path: '/updateProducts/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://assingment-manage-server.vercel.app/products/${params.id}`)

            },
            {
                path: '/updateAssingments/:id',
                element: <PrivateRoute><UpdateAssingments></UpdateAssingments></PrivateRoute>,
                loader: ({params}) => fetch(`https://assingment-manage-server.vercel.app/product/${params.id}`)
            },
        
            {
                path:'/assingmentDetails/:id',
                element: <PrivateRoute><AssingmentDetails></AssingmentDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://assingment-manage-server.vercel.app/assingmentDetails/${params.id}`)
            },
          
            {
                path: '/takeAssingment/:id',
                element: <PrivateRoute><TakeAssingment></TakeAssingment></PrivateRoute>,
                loader: ({params}) => fetch(`https://assingment-manage-server.vercel.app/assingmentDetails/${params.id}`)
            },
            {
                path: '/myAssingments',
                element: <PrivateRoute><MyAssingments></MyAssingments></PrivateRoute>,
                loader: () => fetch('https://assingment-manage-server.vercel.app/myAssingments')
            },
            {
                path: '/submitedAssingment',
                element: <PrivateRoute><SubmitedAssingment></SubmitedAssingment></PrivateRoute>,
                loader: () => fetch('https://assingment-manage-server.vercel.app/myAssingments')
            },
            {
                path: `/submitedAssingment/:id`,
                element: <PrivateRoute><MarkAssingment></MarkAssingment></PrivateRoute>,
                loader: ({params}) => fetch(`https://assingment-manage-server.vercel.app/submitedAssingment/${params.id}`)
            }

        ]
    }
])

export default router;