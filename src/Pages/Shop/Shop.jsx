import { Link } from "react-router-dom";
import useBanglesData from "../../Hooks/useBanglesData/useBanglesData";
import { IoHeartOutline } from "react-icons/io5";
import { useState } from "react";
import { setWishlistToLocalStorage } from "../../components/localstorage";

const Shop = () => {

    const [bangles] = useBanglesData()
    const [hoveredIndex, setHoveredIndex] = useState(null)
    const handleWishlist = (key, id, name, img, price) => {
        setWishlistToLocalStorage(key, id, name, img, price)
    }

    return (
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 lg:px-10 px-5">
            {
                bangles.map((bangle, i) =>
                    <div key={i} className=" w-full mx-auto flex justify-center" >
                        <div className="card card-compact bg-transparent w-[90%]  md:w-96 text-gray-500 text-center rounded-none" >
                            <div className=" relative w-full h-44 md:h-80 overflow-hidden" onMouseOver={() => setHoveredIndex(i)} onMouseLeave={() => setHoveredIndex(null)} >
                                <Link to={`/itemDetails/${bangle._id}`}>
                                    <img className=" w-full h-full object-cover hover:scale-[1.05] duration-200 ease-in-out transition-all" src={bangle.img} alt="Bangle" />
                                </Link>
                                <div className=' absolute top-4 left-2 space-y-2'>
                                    {
                                        bangle?.discount && <div className=" bg-orange-600 text-white w-12 h-12 rounded-full text-center flex justify-center items-center text-xs">
                                            -{bangle.discount}%
                                        </div>
                                    }
                                    {
                                        bangle?.stockStatus === 'Stock Out' && <div className=" bg-orange-600 text-white w-12 h-12 rounded-full text-center flex justify-center items-center text-xs">
                                            {bangle.stockStatus}
                                        </div>
                                    }
                                </div>
                                <div className={` absolute top-14 -right-6 ease-in-out shadow-sm duration-300  ${hoveredIndex === i ? "-translate-x-6" : "translate-x-20"}`} title='add to wishlist'>
                                    <button onClick={() => handleWishlist('wishlist-items', bangle._id, bangle.name, bangle.img, bangle.price)} className=' bg-white py-3 px-5'>
                                        <IoHeartOutline className=' text-xl' /> </button>
                                </div>
                            </div>
                            <div className="card-body text-center mx-auto h-40">
                                <h2 className="card-title text-base">{bangle.name}</h2>
                                {
                                    bangle?.discountedPrice ?
                                        <div className=" flex gap-2 justify-center items-center">
                                            <span className=" text-gray-400 text-sm line-through">{bangle.price} Tk</span>
                                            <span className=" text-orange-600 text-base">{bangle.discountedPrice} TK</span>
                                        </div>
                                        :
                                        <div> <p className=" text-center text-orange-600 text-base">{bangle.price} TK</p></div>
                                }
                                <div className="card-actions justify-center">
                                    <Link to={`/itemDetails/${bangle._id}`}>
                                        <button className="btn rounded-none text-white  bg-orange-600 border-none hover:bg-gray-200 hover:text-orange-600 min-h-[2rem] ease-in-out duration-500 h-10  ">Add to Cart</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Shop;