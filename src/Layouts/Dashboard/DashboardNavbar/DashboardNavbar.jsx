import { NavLink } from "react-router-dom";


const DashboardNavbar = () => {
    return (
        <div>
            <div className=" bg-teal-800 pb-1 px-9">
                <NavLink to={'/'}><h3 className='font-black ease-in-out duration-300'><span className=" text-orange-600 text-4xl">F</span><span className=" text-[#c2c7d1fa]">IRIDAK</span></h3></NavLink>
            </div>
            <div>

            </div>
        </div>
    );
};

export default DashboardNavbar;