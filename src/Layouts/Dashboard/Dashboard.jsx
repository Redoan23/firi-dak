import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import useUserData from "../../Hooks/useUserData/useUserData";
import Footer from "../../Pages/Shared/Footer/Footer";
import { FaBars } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";


const Dashboard = () => {

    const [userData] = useUserData()
    const user = userData?.role

    const [showNav, setShowNav] = useState(false)

    const adminRoute = [
        { key: 1, to: '/dashboard', label: 'Admin Home' },
        { key: 2, to: '/dashboard/userControl', label: 'User Control' },
        { key: 3, to: '/dashboard/ordersPending', label: 'Orders Pending' },
        { key: 4, to: '/dashboard/ordersDone', label: 'Orders Done' },
        { key: 5, to: '/dashboard/extras', label: 'Extras' },


    ]
    const userRoute = [
        { key: 1, to: '/dashboard/userProfileInformation', label: 'Profile Information' },
        { key: 2, to: '/dashboard/userShoppingCart', label: 'Shopping Cart' },

    ]

    const renderNavLinks = (routes) => routes.map(route => (
        <NavLink
            key={route.key}
            to={route.to}
            onClick={() => setShowNav(false)}
            className={'p-3 mx-5 border text-center hover:bg-teal-600'}
        >
            {route.label}
        </NavLink>
    ));

    // to hide scrolling while showing the slide
    useEffect(() => {
        if (showNav) {
            document.body.style.overflow= 'hidden';
        } else {
            document.body.style.overflow= 'auto';
        }
        return () => {
            document.body.style.overflow= 'auto';
        };
    }, [showNav]);

    return (
        <div className={` bg-gray-100 ${showNav && "bg-gray-200 transform duration-150 ease-in-out bg-opacity-85 z-40"}`} >
            <DashboardNavbar></DashboardNavbar>
            <div className=" " >
                <div className=" absolute z-30 top-0 h-full" >
                    <div className={`${showNav ? " ease-in-out duration-200 " : "-translate-x-[100%] ease-in-out duration-200"} shadow-2xl bg-gray-500 h-full`} >
                        <ul className=" relative flex flex-col bg-teal-700 text-[#FF7F50] w-[16rem] md:w-72 min-h-screen h-full p-3 space-y-4">

                            {/* toggle button */}
                            <div className={` absolute text-right -right-8`} onClick={() => setShowNav(!showNav)} >
                                {showNav ? <MdClose className=" text-3xl font-bold" /> : <FaBars className=" text-2xl font-bold" />}
                            </div>
                            {/* toggle button ends */}

                            {
                                user === 'admin' && renderNavLinks(adminRoute)
                            }
                            {
                                user === 'normalUser' && renderNavLinks(userRoute)
                            }
                        </ul>
                    </div>
                </div>
                <div className=" w-full" onClick={() => setShowNav(false)}>
                    <div className=" min-h-screen max-w-screen-lg mx-auto">
                        <Outlet></Outlet>
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