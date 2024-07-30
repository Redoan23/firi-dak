import { createBrowserRouter } from "react-router-dom";
import Main from '../Layouts/Main/Main';
import Home from '../Pages/Home/Home';
import Shop from "../Pages/Shop/Shop";
import ItemDetails from "../Pages/ItemDetails/ItemDetails";

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
                element: <ItemDetails></ItemDetails> ,
            },
        ]
    },
]);

export default router