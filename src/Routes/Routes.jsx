import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import Shop from "../Pages/Shop/Shop";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";
import Login from "../Pages/LoginAndRegister/Login/Login";
import Register from "../Pages/LoginAndRegister/Register/Register";
import CartDetails from "../Pages/CartDetails/CartDetails";
import Checkout from "../Pages/Checkout/Checkout";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import AdminHome from "../Pages/Admin/AdminHome/AdminHome";
import OrdersPending from "../Pages/Admin/OrdersPending/OrdersPending";
import OrdersDone from "../Pages/Admin/OrdersDone/OrdersDone";
import UserControl from "../Pages/Admin/UserControl/UserControl";
import Extras from "../Pages/Admin/Extras/Extras";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import AddProducts from "../Pages/Admin/AddProducts/AddProducts";

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
    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard',
                element: <AdminHome></AdminHome>
            },
            {
                path: '/dashboard/ordersPending',
                element: <OrdersPending></OrdersPending>
            },
            {
                path: '/dashboard/ordersDone',
                element: <OrdersDone></OrdersDone>
            },
            {
                path: '/dashboard/userControl',
                element: <UserControl></UserControl>
            },
            {
                path: '/dashboard/addProducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/extras',
                element: <Extras></Extras>
            },

            // normalUser
            // {
            //     path:'/dashboard',

            // }
        ]
    }
]);

export default router