import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className=' bg-white'>
            <div className=" min-h-screen mx-auto">
                <Navbar></Navbar>
                <div className=" min-h-screen h-[4000px]">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;