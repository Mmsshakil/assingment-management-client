import Root from "../layouts/Root";
import Home from "../pages/Home/Home";

import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Service from "../pages/Service/Service";
import PrivateRoute from "./PrivateRoute";
import Error from "../pages/Error/Error";
import AddProduct from "../pages/AddProduct/AddProduct";
import MyCart from "../pages/MyCart/MyCart";
import UpdateProduct from "../pages/UpdateProduct/UpdateProduct";
import Products from "../pages/Products/Products";
import ProductDetails from "../pages/Products/ProductDetails";
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
                path: '/products/:brand',
                element: <Products></Products>,
                loader: ({ params }) => fetch(`http://localhost:3000/product/${params.brand}`)
            },
            {
                path: '/assingments',
                element: <Assingments></Assingments>,
                loader: () => fetch('http://localhost:3000/assingments')
            },
            {
                path: '/updateProducts/:id',
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)

            },
            {
                path: '/updateAssingments/:id',
                element: <PrivateRoute><UpdateAssingments></UpdateAssingments></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/assingmentDetails/${params.id}`)
            },
            {
                path: '/productDetails/:id',
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:3000/products/${params.id}`)
            },
            {
                path:'/assingmentDetails/:id',
                element: <PrivateRoute><AssingmentDetails></AssingmentDetails></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/assingmentDetails/${params.id}`)
            },
            {
                path: '/cart',
                element: <MyCart></MyCart>,
                loader: () => fetch('http://localhost:3000/cart')
            },
            {
                path: '/takeAssingment/:id',
                element: <TakeAssingment></TakeAssingment>,
                loader: ({params}) => fetch(`http://localhost:3000/assingmentDetails/${params.id}`)
            },
            {
                path: '/myAssingments',
                element: <MyAssingments></MyAssingments>,
                loader: () => fetch('http://localhost:3000/myAssingments')
            },
            {
                path: '/submitedAssingment',
                element: <SubmitedAssingment></SubmitedAssingment>,
                loader: () => fetch('http://localhost:3000/myAssingments')
            },
            {
                path: `/submitedAssingment/:id`,
                element: <MarkAssingment></MarkAssingment>,
                loader: ({params}) => fetch(`http://localhost:3000/submitedAssingment/${params.id}`)
            }

        ]
    }
])

export default router;