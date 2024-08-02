import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import Shop from "../Pages/Shop/Shop";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import Login from "../Pages/LoginAndRegister/Login/Login";
import Register from "../Pages/LoginAndRegister/Register/Register";
import CartDetails from "../Pages/CartDetails/CartDetails";
import Checkout from "../Pages/Checkout/Checkout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/shop',
                element: <Shop></Shop>,
            },
            {
                path: '/itemDetails/:id',
                element: <ItemDetails></ItemDetails>,
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
                path: '/cartDetails',
                element: <CartDetails></CartDetails>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
        ]
    },
]);

export default router