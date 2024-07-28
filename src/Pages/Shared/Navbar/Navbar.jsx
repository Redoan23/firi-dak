import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiShirt, CiShoppingCart } from "react-icons/ci";
import { FaBars, FaMagnifyingGlass } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import Cart from "./ShoppingCart/Cart";
import { GiSquareBottle } from "react-icons/gi";
import { PiHoodieLight } from "react-icons/pi";


const Navbar = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [openCart, setOpenCart] = useState(false)
    const [cartSwitch, setCartSwitch] = useState(false)
    const [hiddenCategory, setHiddenCategory] = useState(false)
    const [moreCategory, setMoreCategory] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 50) {
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
        setMobileNav(true)
        setOpenModal(!openModal)
    }

    // cart related functionalities

    const handleCart = () => {
        setOpenCart(true)
        setCartSwitch(!cartSwitch)
    }
    return (
        <div className="  sticky top-0 z-10">
            {
                mobileNav && <MobileNav openModal={openModal} ></MobileNav>
            }
            {
                openCart && <Cart cartSwitch={cartSwitch}></Cart>
            }
            <div className={` ${isScrolled ? "lg:pt-2 " : "lg:pt-8 "} w-full max-w-full mx-auto  px-2 text-black border-b bg-opacity-85 transition-all duration-200 bg-white`}>
                <div className={`flex justify-between flex-start items-center duration-300 ease-in-out  w-full max-w-screen-xl mx-auto`}>
                    <div className=" block  lg:hidden">
                        <div onClick={handleMobileNav} className={`  flex items-center gap-3`}>
                            <FaBars />
                            <h3 className=" text-lg"> Menu</h3>
                        </div>
                    </div>
                    <div>
                        <NavLink to={'/'}><h3 className={` ${isScrolled ? 'text-xl' : 'text-2xl'} font-black  ease-in-out duration-300`}><span className=" text-orange-600 text-4xl">F</span><span className=" text-gray-300">IRIDAK</span></h3></NavLink>
                    </div>
                    <div className={` ${isScrolled ? " w-10/12 h-13" : ""} w-4/5 h-12 duration-300 ease-in-out lg:block hidden relative`}>
                        <input type="text" name="searchbar" id="searchbar" className=" w-full h-full bg-transparent border-2 p-2 outline-none" placeholder="search here..." />
                        <FaMagnifyingGlass className={` ${isScrolled ? " text-xl" : ""} absolute duration-300 ease-in-out right-4 bottom-4`} />
                    </div>
                    <div className=" btn bg-transparent text-black border-none hover:bg-transparent shadow-none " onClick={handleCart}>
                        <CiShoppingCart className=" text-3xl" />
                    </div>
                </div>
                <div className={` ${isScrolled ? "mt-2" : "mt-6"} border w-full  ease-in-out duration-300 lg:block hidden`}>
                    <div className=" flex items-center justify-between  max-w-screen-xl mx-auto">
                        <div className=" flex items-center gap-4">
                            <div onMouseOver={() => setHiddenCategory(true)} onMouseLeave={() => setHiddenCategory(false)}>
                                <div className=" bg-red-100 flex items-center justify-between p-3 w-60">
                                    <div className=" flex items-center gap-3">
                                        <FaBars />
                                        <h3>Category</h3>
                                    </div>
                                    {hiddenCategory ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
                                </div>
                                <div className=" absolute">
                                    <div>
                                        <div className={` flex flex-col text-black text-sm bg-white border box-shadow shadow-lg  w-60 ${hiddenCategory ? "  " : " hidden"} duration-300 transition-transform ease-in-out `}>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} to={'/shop'}> SPECIAL DISCOUNT PRODUCTS</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} to={'/shop'}> <GiSquareBottle /> ATTAR</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} to={'/shop'}> <CiShirt /> T-SHIRT</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} to={'/shop'}> <PiHoodieLight /> HOODIE</NavLink>
                                            {moreCategory && <h3 className={' border-b p-2  text-center uppercase'} > No more categories</h3>}
                                            <button onClick={() => setMoreCategory(!moreCategory)} className={' p-2  flex items-center bg-gray-100 gap-2 text-center justify-center'}>{moreCategory ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center gap-3">
                                <NavLink to={'/'} className=" hover:text-orange-600 duration-300 ease-in-out">Home</NavLink>
                                <NavLink to={'/shop'} className=" hover:text-orange-600 duration-300 ease-in-out">Shop</NavLink>
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