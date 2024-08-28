import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import useUserData from "../../Hooks/useUserData/useUserData";
import Footer from "../../Pages/Shared/Footer/Footer";
import { FaBars } from "react-icons/fa6";
import { Helmet } from "react-helmet-async";


const Dashboard = () => {

    const [userData] = useUserData()
    const user = userData?.role


    const adminRoute = [
        { key: 1, to: '/dashboard/adminHome', label: 'Admin Home' },
        { key: 2, to: '/dashboard/userControl', label: 'User Control' },
        { key: 3, to: '/dashboard/ordersPending', label: 'Orders Pending' },
        { key: 4, to: '/dashboard/ordersDone', label: 'Orders Done' },
        { key: 5, to: '/dashboard/extras', label: 'Extras' },
        { key: 6, to: '/dashboard/addProducts', label: 'Add Products' },
    ]
    const userRoute = [
        { key: 1, to: '/dashboard/userHome', label: 'Profile Information' },
        { key: 2, to: '/dashboard/userShoppingCart', label: 'Shopping Cart' },
        { key: 2, to: '/dashboard/orders', label: 'Orders' },

    ]

    const renderNavLinks = (routes) => routes.map(route => (
        <NavLink
            key={route.key}
            to={route.to}

            className={'p-3 mx-5 mt-10 border text-center hover:bg-teal-600'}
        >
            {route.label}
        </NavLink>
    ));

    return (
        <div className='bg-gray-100'>
            <Helmet>
                <title>
                    FIRIDAK | DASHBOARD
                </title>
            </Helmet>

            <DashboardNavbar></DashboardNavbar>

            <div className=" ">
                <div className="drawer">
                    <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content my-5 mx-4 md:mx-10">
                        <Outlet></Outlet>
                        <label htmlFor="my-drawer" className=" absolute -top-8 left-2 drawer-button"><FaBars className=" text-xl" /> </label>
                    </div>
                    <div className="drawer-side">

                        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                        <ul className="menu bg-teal-900 text-base-content space-y-3 min-h-full w-[290px] lg:w-80 p-4">
                            <NavLink to={'/'} className={'text-center py-3'}>
                                <h3 className='font-black ease-in-out duration-300'>
                                    <span className=" text-orange-600 text-4xl">F</span><span className=" text-[#c2c7d1fa]">IRIDAK</span>
                                </h3>
                            </NavLink>

                            {
                                user === 'admin' && renderNavLinks(adminRoute)
                            }
                            {
                                user === 'normalUser' && renderNavLinks(userRoute)
                            }
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" flex-wrap">
                <Footer></Footer>
            </div>
        </div >
    );
};

export default Dashboard;