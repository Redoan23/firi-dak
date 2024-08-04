import { NavLink, Outlet } from "react-router-dom";
import DashboardNavbar from "./DashboardNavbar/DashboardNavbar";
import useUserData from "../../Hooks/useUserData/useUserData";
import Footer from "../../Pages/Shared/Footer/Footer";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { MdClose } from "react-icons/md";


const Dashboard = () => {

    const [userData] = useUserData()
    const user = userData?.role

    const [showNav, setShowNav] = useState(false)

    const adminRoute = [
        <NavLink key={1} to={'/dashboard'}>Admin Home</NavLink>,
        <NavLink key={2} to={'/dashboard/userControl'}>User Control</NavLink>,
        <NavLink key={3} to={'/dashboard/ordersPending'}>Orders pending</NavLink>,
        <NavLink key={4} to={'/dashboard/ordersDone'}>Orders Done</NavLink>,
        <NavLink key={5} to={'/dashboard/extras'}>Extras</NavLink>,
    ]
    const userRoute = [
        <NavLink key={1} to={'/dashboard/userProfileInformation'}>Profile Information</NavLink>,
        <NavLink key={2} to={'/dashboard/userShoppingCart'}>Shopping Cart</NavLink>,

    ]

    return (
        <div className={` bg-gray-100 ${showNav && "bg-gray-200 transform duration-150 ease-in-out bg-opacity-85 z-40"}`} >
            <DashboardNavbar></DashboardNavbar>
            <div className=" flex" >
                <div className=" min-h-screen absolute z-30" >
                    <div className="">
                        <div className={`${showNav ? " ease-in-out duration-200 " : "-translate-x-[100%] ease-in-out duration-200"} shadow-2xl bg-gray-500`} >
                            <ul className=" relative flex flex-col bg-teal-700 text-[#FF7F50] w-48 min-h-screen h-fit p-3 space-y-4">

                                {/* toggle button */}
                                <div className={` absolute text-right -right-6`} onClick={() => setShowNav(!showNav)} >
                                    {showNav ? <MdClose className=" text-3xl font-bold" /> : <FaBars className=" text-3xl font-bold" />}
                                </div>
                                {/* toggle button ends */}

                                {
                                    user === 'admin' && adminRoute.map(route => <div className=" border p-2 text-left hover:bg-teal-600" key={route.key} onClick={()=>setShowNav(false)}>{route}</div>)
                                }

                                {
                                    user === 'normalUser' && userRoute.map(route => <div className=" border p-2 text-left hover:bg-teal-600" key={route.key}>{route}</div>)
                                }
                            </ul>
                        </div>
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