import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiShoppingCart } from "react-icons/ci";
import { FaBars } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 156) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleMobileNav = () => {
        console.log('working')
        setMobileNav(!mobileNav)
    }

    return (
        <div onClick={() => setMobileNav(!mobileNav)}>
            {
                mobileNav && <MobileNav></MobileNav>
            }
            <div className={` ${isScrolled ? " " : " "} w-full max-w-full mx-auto pt-8 text-black border-b sticky top-0 bg-opacity-95 transition-all duration-200 bg-white`}>
                <div className=" flex items-center justify-between w-full max-w-screen-xl mx-auto">
                    <div className=" block  lg:hidden">
                        <div onClick={handleMobileNav} className={` ${mobileNav && " hidden"} flex items-center gap-3`}>
                            <FaBars />
                            <h3 className=" text-lg"> Menu</h3>
                        </div>
                    </div>
                    <div>
                        <NavLink to={'/'}><h3 className={` ${isScrolled ? 'text-xl' : 'text-2xl'} font-black  ease-in-out duration-300`}><span className=" text-orange-600 text-5xl">F</span><span className=" text-gray-300">IRIDAK</span></h3></NavLink>
                    </div>
                    <div className=" w-4/5 lg:block hidden ">
                        <input type="text" name="searchbar" id="searchbar" className=" w-full h-11 bg-transparent border-2 p-2" placeholder="search here..." />
                    </div>
                    <div>
                        <CiShoppingCart className=" text-3xl" />
                    </div>
                </div>
                <div className={` ${isScrolled ? "mt-2" : "mt-6"} border w-full  ease-in-out duration-300`}>
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
        </div>
    );
};

export default Navbar;