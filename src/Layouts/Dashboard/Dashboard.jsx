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
    console.log(user)

    const [showNav, setShowNav] = useState(false)

    const adminRoute = [
        <NavLink key={1} to={'/dashboard'}>Admin Home</NavLink>,
        <NavLink key={2} to={'/dashboard/userControl'}>User Control</NavLink>,
        <NavLink key={3} to={'/dashboard/ordersPending'}>Orders pending</NavLink>,
        <NavLink key={4} to={'/dashboard/ordersDone'}>Orders Done</NavLink>,
        <NavLink key={5} to={'/dashboard/extras'}>Extras</NavLink>,
    ]

    return (
        <div className=" bg-gray-100">
            <DashboardNavbar></DashboardNavbar>
            <div className=" flex">
                <div className=" min-h-screen absolute z-30">

                    <div>
                        {
                            user === 'admin' &&

                            <div className={`${showNav ? " ease-in-out duration-300 " : "-translate-x-[100%] ease-in-out duration-300"}`} >
                                <ul className=" relative flex flex-col bg-teal-700 text-[#FF7F50] w-48 min-h-screen h-fit p-3 space-y-4">
                                    <div className={` absolute text-right -right-4 ${showNav ? "" : " "}`} onClick={() => setShowNav(!showNav)} >
                                       { showNav? <MdClose/> : <FaBars />}
                                    </div>
                                    {
                                        adminRoute.map(route => <div className=" border p-2 text-left hover:bg-teal-600" key={route.key}>{route}</div>)
                                    }
                                </ul>
                            </div>
                        }
                    </div>
                </div>
                <div className=" w-full">
                    <div className=" min-h-screen">
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