import { NavLink } from "react-router-dom";


const BottomNav = () => {
    return (
        <div className=" flex justify-around p-2 bg-white shadow-lg">
            <NavLink>Shop</NavLink>
            <NavLink>Wishlist</NavLink>
            <NavLink>Cart</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>My Account</NavLink>
        </div>
    );
};

export default BottomNav;