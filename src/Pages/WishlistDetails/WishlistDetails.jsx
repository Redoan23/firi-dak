import { BiTrash } from "react-icons/bi";
import { getItemFromLocalStorage, removeSingleItem } from "../../components/localstorage";
import useAuth from "../../Hooks/useAuth/useAuth";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const WishlistDetails = () => {
    const { setRefreshPage, refreshPage } = useAuth()
    const items = getItemFromLocalStorage('wishlist-items')
    const handleItemDelete = (key, id, size) => {
        removeSingleItem(key, id, size)
        setRefreshPage(!refreshPage)
    }
    return (
        <div>
            <Helmet>
                <title>
                    FIRIDAK | WISHLIST
                </title>
            </Helmet>
            {
                items.length ?
                    <div className=" flex lg:flex-row flex-col  lg:justify-around items-center">
                        <div className=" lg:w-1/2 m-5">
                            <h3 className=" text-3xl text-center font-semibold">Your Wishlist Items</h3>
                            <div className="overflow-x-auto p-8">
                                {
                                    items.map(item =>
                                        <div key={item.i} >
                                            <div className=" pb-6 flex justify-between gap-5 items-center w-full">
                                                <div className=" w-[80%]">
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <NavLink to={`/itemDetails/${item.i}`} className="mask mask-square h-24 w-24">
                                                                <img
                                                                    src={item.img}
                                                                    alt=" item image" />
                                                            </NavLink>
                                                        </div>
                                                        <div className=" space-y-2">
                                                            <div className="font-bold text-gray-600">{item.n}</div>
                                                            <button onClick={() => handleItemDelete('wishlist-items', item?.i, item?.s)} ><BiTrash /> </button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <p className=" text-orange-600 w-[20%]">
                                                    {item.p} TK
                                                </p>
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" text-center flex justify-center items-center w-full h-screen">
                        <p className=" text-center text-5xl font-bold text-gray-300 flex items-center"><span className=" text-9xl">!</span> Empty List</p>
                    </div>
            }
        </div>
    );
};

export default WishlistDetails;