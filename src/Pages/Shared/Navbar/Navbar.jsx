import { useEffect, useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { CiHeart, CiShirt, CiShoppingCart } from "react-icons/ci";
import { FaBars, } from "react-icons/fa6";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import MobileNav from "./MobileNav";
import Cart from "./ShoppingCart/Cart";
import { GiSquareBottle } from "react-icons/gi";
import { PiHoodieLight } from "react-icons/pi";
import useAuth from "../../../Hooks/useAuth/useAuth";
import Swal from "sweetalert2";
import { getItemFromLocalStorage } from "../../../components/localstorage";
import { toast, Toaster } from "sonner";
import useUserData from "../../../Hooks/useUserData/useUserData";
import useAxiosPublic from "../../../Hooks/useAxiosPublic/useAxiosPublic";
import SearchResult from "./SearchResult/SearchResult";


const Navbar = () => {

    const axiosPublic = useAxiosPublic()
    const { user, logOut, refreshPage, setCartToggle, cartToggle, setOpenCart, openCart, searchModal } = useAuth()
    const [userData] = useUserData()
    const userRole = userData?.role


    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);
    const [openModal, setOpenModal] = useState(false)
    const [hiddenCategory, setHiddenCategory] = useState(false)
    const [moreCategory, setMoreCategory] = useState(false)

    const [itemLength, setItemLength] = useState(null)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 10) {
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
        setMobileNav(true)
        setOpenModal(!openModal)
    }

    // cart related functionalities

    const handleCart = () => {
        setOpenCart(true)
        setCartToggle(!cartToggle)
    }
    const handleLogout = () => {

        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                logOut()
                    .then(toast(`logout successful`))
            }
        });
    }

    // notification for empty category
    const handleUpcomingNotification = () => {
        return Swal.fire({
            title: "Upcoming soon",
            icon: "info",
            position: "top-end",
            timer: 1000,
            showConfirmButton: false
        });
    }

    // get the items from local storage
    useEffect(() => {
        const itemInTheStorage = getItemFromLocalStorage('cart-items')
        const totalQuantity = itemInTheStorage.reduce((accumulator, item) => { return (accumulator + item.q) }, 0)
        setItemLength(totalQuantity)

    }, [refreshPage])


    // search functionality


    // const [searchText, setSearchText] = useState('')
    const [searchResultData, setSearchResultData] = useState(null)
    const handleSetSearch = (e) => {

        const value = e.target.value
        // setSearchText(value)
        console.log(value)

        if (!value) {
            console.log(true)
            setSearchResultData(null)
            return
        }

        axiosPublic.get(`/searchItem/${value}`)
            .then(res => {
                setSearchResultData(res.data)
            })
    }

    // const handleSearch = () => {

    //     if (searchText === '') {
    //         setSearchResultData(null)
    //         return
    //     }
    //     axiosPublic.get(`/searchItem/${searchText}`)
    //         .then(res => {
    //             console.log(res.data)
    //             setSearchResultData(res.data)
    //         })
    // }

    useEffect(() => {
        setSearchResultData(null)
    }, [searchModal])

    return (
        <div onClick={() => setSearchResultData(null)} className=" sticky top-0 z-50">
            {
                mobileNav && <MobileNav openModal={openModal} ></MobileNav>
            }
            {
                openCart && <Cart></Cart>
            }
            <div className={` ${isScrolled ? "lg:pt-2 " : "lg:pt-8 "} w-full max-w-full mx-auto  px-2 text-black border-b bg-opacity-90 transition-all duration-300 bg-white`}>
                <div className={`flex justify-between flex-start items-center duration-300 ease-in-out w-full max-w-screen-xl mx-auto lg:py-0 py-2`}>
                    <div className=" block lg:hidden">
                        <div onClick={handleMobileNav} className={` flex items-center gap-3`}>
                            <FaBars />
                            <h3 className=" text-lg"> Menu</h3>
                        </div>
                    </div>

                    {/* Shop Name/ title  */}

                    <div>
                        <NavLink to={'/'}>
                            <h3 className={` ${isScrolled ? 'text-xl' : 'text-2xl'} font-black ease-in-out duration-300`}>
                                <span className=" text-orange-600 text-4xl">F</span>
                                <span className=" text-[#c2c7d1fa]">IRIDAK</span>
                            </h3>
                        </NavLink>
                    </div>

                    {/* search input box */}

                    <div className={` ${isScrolled ? " w-10/12 h-13" : ""} w-[75%] h-12 duration-300 ease-in-out lg:block hidden relative`}>
                        <input
                            onChange={handleSetSearch}
                            type="text"
                            name="searchbar"
                            id="searchbar"
                            className=" w-full h-full bg-transparent border-2 p-2 outline-none"
                            placeholder="search here..."
                        />
                        {/* <FaMagnifyingGlass onClick={handleSearch} className={` ${isScrolled ? " text-xl" : ""} absolute duration-300 ease-in-out right-4 bottom-4`} /> */}
                        {
                            searchResultData &&

                            <div onClick={() => setSearchResultData(null)}>
                                <SearchResult ItemData={searchResultData} ></SearchResult>
                            </div>
                        }
                    </div>

                    {/* wishlist and cart button/icon */}

                    <div className=" flex gap-5 items-center">

                        <NavLink to={'/wishlistDetails'} className=" relative border-none p-0 m-0 btn bg-transparent text-black btn-sm hover:bg-transparent shadow-none ">
                            <CiHeart className=" text-3xl" />
                        </NavLink>

                        <div className=" relative border-none p-0 m-0 btn bg-transparent text-black btn-sm hover:bg-transparent shadow-none " onClick={handleCart}>
                            <CiShoppingCart className=" text-3xl" />
                            <p className=" absolute -top-2 right-3 text-orange-600">{itemLength ? itemLength : 0}</p>
                        </div>

                        {user ? <button onClick={handleLogout} className=" hidden lg:block btn btn-sm border-none bg-orange-600  text-white hover:text-orange-600 hover:bg-gray-200 rounded-none">Logout</button>
                            : <Link to={'/login'}><button className=" hidden lg:block btn btn-sm border-none bg-orange-600  text-white hover:text-orange-600 hover:bg-gray-200 rounded-none">Login</button></Link>
                        }
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
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} onClick={handleUpcomingNotification}> SPECIAL DISCOUNT PRODUCTS</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} onClick={handleUpcomingNotification}> <GiSquareBottle /> ATTAR</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} onClick={handleUpcomingNotification}> <CiShirt /> T-SHIRT</NavLink>
                                            <NavLink className={' border-b p-2  flex items-center gap-2 hover:text-orange-600 hover:bg-gray-100 ease-in-out duration-300'} onClick={handleUpcomingNotification}> <PiHoodieLight /> HOODIE</NavLink>
                                            {moreCategory && <h3 className={' border-b p-2  text-center uppercase'} > No more categories</h3>}
                                            <button onClick={() => setMoreCategory(!moreCategory)} className={' p-2  flex items-center bg-gray-100 gap-2 text-center justify-center'}>{moreCategory ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center gap-3">
                                <NavLink to={'/'} className=" hover:text-orange-600 duration-300 ease-in-out">Home</NavLink>
                                <NavLink to={'/shop'} className=" hover:text-orange-600 duration-300 ease-in-out">Shop</NavLink>
                                {
                                    userRole === 'admin' && <NavLink to={'/dashboard/adminHome'} onClick={() => setOpenCart(false)} className=" hover:text-orange-600 duration-300 ease-in-out">Dashboard</NavLink>
                                }
                                {/* {
                                    userRole === 'normalUser' && <NavLink to={'/dashboard/userHome'} className=" hover:text-orange-600 duration-300 ease-in-out">Dashboard</NavLink>
                                } */}
                                <NavLink to={'/aboutUs'} className=" hover:text-orange-600 duration-300 ease-in-out">About Us</NavLink>
                            </div>
                        </div>
                        <div className=" ">
                            <h3 className=" text-2xl flex gap-2 items-center">
                                <BsTelephone />
                                01327319170
                            </h3>
                        </div>
                    </div>
                </div>
                <Toaster position="bottom-right" closeButton={true} richColors></Toaster>
            </div>
        </div>
    );
};

export default Navbar;