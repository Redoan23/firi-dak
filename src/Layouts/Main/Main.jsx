import { Outlet } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";


const Main = () => {
    return (
        <div className=' bg-gray-100'>
            <div className=" min-h-screen mx-auto">
                <Navbar></Navbar>
                <div className=" min-h-screen">
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;