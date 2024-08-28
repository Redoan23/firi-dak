import { CiHeart, CiShop, CiShoppingCart, CiSquareInfo, CiUser } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth/useAuth";


const BottomNav = () => {

    const { setCartToggle, cartToggle, setOpenCart } = useAuth()
    console.log(cartToggle)

    const handleCart = () => {
        setOpenCart(true)
        setCartToggle(!cartToggle)
    }
    return (
        <div className=" flex justify-around px-2 py-3 bg-white shadow-lg text-black z-[100]">
            <NavLink to={'/shop'} className={'flex items-center flex-col'}> <CiShop size={20} /> Shop</NavLink>
            <NavLink className={'flex items-center flex-col'}> <CiHeart size={20} /> Wishlist</NavLink>
            <NavLink onClick={handleCart} className={'flex items-center flex-col'}> <CiShoppingCart size={20} /> Cart</NavLink>
            <NavLink to={'/aboutUs'} className={'flex items-center flex-col'}> <CiSquareInfo size={20} /> About Us</NavLink>
            <NavLink to={'/login'} className={'flex items-center flex-col'}> <CiUser size={20} /> My Account</NavLink>
        </div>
    );
};

export default BottomNav;