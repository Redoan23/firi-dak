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
import UserHome from "../Pages/User/UserHome/UserHome";
import ShoppingCart from "../Pages/User/ShoppingCart/ShoppingCart";
import Orders from "../Pages/User/Orders/Orders";
import AboutUs from "../Pages/AboutUs/AboutUs";
import WishlistDetails from "../Pages/WishlistDetails/WishlistDetails";
import AdminRoutes from "./AdminRoutes/AdminRoutes";
import ReviewPending from "../Pages/Admin/ReviewPending/ReviewPending";
import MobileSearchResult from "../Pages/Shared/Navbar/MobileSearchResult/MobileSearchResult";


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
                path: '/wishlistDetails',
                element: <WishlistDetails></WishlistDetails>
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/aboutUs',
                element: <AboutUs />
            },
            {
                path: '/mobileSearchResult',
                element: <MobileSearchResult />
            },
        ]
    },

    {
        path: '/dashboard',
        element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
        children: [
            {
                path: '/dashboard/adminHome',
                element: <AdminRoutes><AdminHome></AdminHome></AdminRoutes>
            },
            {
                path: '/dashboard/ordersPending',
                element: <AdminRoutes><OrdersPending></OrdersPending></AdminRoutes>
            },
            {
                path: '/dashboard/reviewsPending',
                element: <AdminRoutes><ReviewPending></ReviewPending></AdminRoutes>
            },
            {
                path: '/dashboard/ordersDone',
                element: <AdminRoutes><OrdersDone></OrdersDone></AdminRoutes>
            },
            {
                path: '/dashboard/userControl',
                element: <AdminRoutes><UserControl></UserControl></AdminRoutes>
            },
            {
                path: '/dashboard/addProducts',
                element: <AdminRoutes><AddProducts></AddProducts></AdminRoutes>
            },
            {
                path: '/dashboard/extras',
                element: <AdminRoutes><Extras></Extras></AdminRoutes>
            },
            {
                path: '/dashboard/userHome',
                element: <UserHome></UserHome>
            },
            {
                path: '/dashboard/userShoppingCart',
                element: <ShoppingCart></ShoppingCart>
            },
            {
                path: '/dashboard/orders',
                element: <Orders></Orders>
            },

        ]
    }
]);

export default router