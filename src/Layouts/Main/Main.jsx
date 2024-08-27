import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";
import BottomNav from "../../Pages/Shared/BottomNav/BottomNav";


const Main = () => {
    return (
        <div className=' bg-gray-100'>
            <div className=" min-h-screen mx-auto">
                <Navbar></Navbar>
                <div className=" min-h-screen">
                    <Outlet></Outlet>
                </div>
                <div className=" mt-12">
                    <Footer></Footer>
                </div>
            </div>
            <div className=" py-1 sticky bottom-0 bg-white lg:hidden">
                <BottomNav />
            </div>
        </div>
    );
};

export default Main;