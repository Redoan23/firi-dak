import { BsTelephone } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <div className=" max-w-full mx-auto pt-8 text-black border-b">
            <div className=" flex items-center justify-between w-full max-w-screen-xl mx-auto">
                <div>
                    <NavLink to={'/'}><h3 className=" text-3xl font-black"><span className=" text-red-600">FIRI</span> <span className=" text-green-600">DAAK</span></h3></NavLink>
                </div>
                <div className=" w-4/5 ">
                    <input type="text" name="searchbar" id="searchbar" className=" w-full h-11 bg-transparent border-2 p-2" placeholder="search here..." />
                </div>
                <div>
                    <CiShoppingCart className=" text-3xl" />
                </div>
            </div>
            <div className=" border w-full mt-6">
                <div className=" flex items-center justify-between  max-w-screen-xl mx-auto">
                    <div className=" flex items-center gap-4">
                        <div className=" bg-red-100 flex items-center justify-between p-3 w-60">
                            <div className=" flex items-center gap-3">
                                <FaBars />
                                <h3>Category</h3>
                            </div>
                            <MdKeyboardArrowDown />
                        </div>
                        <div className=" flex items-center gap-3">
                            <NavLink to={'/'}>Home</NavLink>
                            <NavLink to={'/shop'}>Shop</NavLink>
                        </div>
                    </div>
                    <div className=" ">
                        <h3 className=" text-2xl flex gap-2 items-center">
                            <BsTelephone />
                            01700112233
                        </h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;