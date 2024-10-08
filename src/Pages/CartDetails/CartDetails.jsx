import { BiTrash } from "react-icons/bi";
import { Link } from "react-router-dom";
import useCartCalculations from "../../Hooks/useCartCalculations/useCartCalculations";
import { removeSingleItem } from "../../components/localstorage";
import useAuth from "../../Hooks/useAuth/useAuth";
import useExtraInfoData from "../../Hooks/useExtraInfoData/useExtraInfoData";
import { Helmet } from "react-helmet-async";


const CartDetails = () => {

    const [extraInfoData] = useExtraInfoData()
    const [itemQuantity, totalPrice, items] = useCartCalculations()
    const { refreshPage, setRefreshPage } = useAuth()
    const handleItemDelete = (key, id, size) => {
        removeSingleItem(key, id, size)
        setRefreshPage(!refreshPage)
    }

    return (
        <div>
            <Helmet>
                <title>
                    FIRIDAK | CART DETAILS
                </title>
            </Helmet>
            <div>
                {items.length ?
                    <div className=" flex lg:flex-row flex-col  lg:justify-around items-center">
                        <div className=" lg:w-1/2 m-5">
                            <h3 className=" text-3xl font-semibold p-5">You have {itemQuantity} items in your cart</h3>
                            <div className="overflow-x-auto p-8">
                                {
                                    items.map(item =>
                                        <div key={item.i} >
                                            <div className=" pb-6 flex justify-between gap-5 items-center w-full">
                                                <div className=" w-[80%]">
                                                    <div className="flex items-center gap-3">
                                                        <div className="avatar">
                                                            <div className="mask mask-square h-24 w-24">
                                                                <img
                                                                    src={item.img}
                                                                    alt=" item image" />
                                                            </div>
                                                        </div>
                                                        <div className=" space-y-2">
                                                            <div className="font-bold text-gray-600">{item.n}</div>
                                                            <div className="text-sm ">{itemQuantity} x {item?.s}</div>
                                                            <button onClick={() => handleItemDelete('cart-items', item?.i, item?.s)} className=" "><BiTrash /> </button>
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
                        <div className=" border-2 border-gray-500 w-[280px] h-[400px] p-3 mt-10">
                            <div className=" text-gray-500 space-x-4 w-full">
                                <h3 className=" text-xl font-semibold text-gray-600 pb-5"> Checkout Summary</h3>
                                <div className=" pb-3">
                                    <p className=" flex items-center justify-between">Total: <span className=" text-orange-600">{totalPrice} TK</span> </p>
                                </div>
                                <div className=" space-y-4">
                                    <p>Shipping :</p>
                                    <div action="" className=" flex flex-col items-end">
                                        <p className=" flex items-center gap-4"> Home Delivery ({extraInfoData ? extraInfoData[0]?.homeDeliveryFee + ' TK' : '...'})</p>
                                        <p className=" flex items-center gap-4"> Courier ({extraInfoData ? extraInfoData[0]?.courierFee + ' TK' : '...'})</p>
                                    </div>
                                    <p className=" border-t border-b py-3 flex items-center justify-between">SubTotal: <span className=" text-orange-600">{totalPrice} TK</span></p>
                                </div>
                            </div>
                            <div className=" pt-10">
                                <Link to={'/checkout'}><button className=" btn w-full bg-orange-600 text-white border-none hover:bg-gray-200 hover:text-orange-600 ease-in-out duration-500 rounded-none">Proceed to Order</button></Link>
                            </div>
                        </div>
                    </div>
                    :
                    <div className=" text-center flex justify-center items-center w-full h-screen">
                        <p className=" text-center text-5xl font-bold text-gray-300 flex items-center"><span className=" text-9xl">!</span> Your car is empty</p>
                    </div>
                }
            </div>
        </div>
    );
};

export default CartDetails;