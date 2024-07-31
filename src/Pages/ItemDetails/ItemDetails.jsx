import { useParams } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic/useAxiosPublic";
import { useQuery } from "react-query";
import { useState } from "react";
import AdditionalInfoTab from "./AdditionalInfoTab/AdditionalInfoTab";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { getItemFromLocalStorage, setItemToLocalStorage, } from "../../components/localstorage";



const ItemDetails = () => {

    const axiosPublic = useAxiosPublic()
    const { id } = useParams()

    const { data: itemDetails = [] } = useQuery({
        queryKey: [`itemDetails${id}`],
        queryFn: async () => {
            const res = await axiosPublic.get(`/bangles/itemDetails/${id}`)
            return res.data
        }
    })


    // functionalities for the add to cart button
    const [value, setValue] = useState(1)
    const cartValue = (e) => {
        setValue(parseInt(e.target.value))
    }
    const increaseValue = () => {
        setValue(value + 1)
    }
    const decreaseValue = () => {
        if (value >= 2) {
            setValue(value - 1)
        }
    }
    // add to cart API

    const handleAddToCart = (id) => {
        getItemFromLocalStorage('cart-item')
        setItemToLocalStorage('cart-items', id, quantity)
    }

    return (
        <div className=" mt-12">
            <div className="hero bg-white w-[80%] place-items-center mx-auto">
                <div className="hero-content overflow-hidden py-14 flex-col lg:flex-row">
                    <img
                        src={itemDetails.img}
                        className=" max-w-[320px] md:max-w-md object-cover rounded-lg shadow-lg" />
                    {/* {isLoading && <span className=" text-center">loading...</span> } */}
                    <div>
                        <h1 className="text-4xl text-gray-700 font-bold">{itemDetails.name}</h1>
                        <p className="py-4 underline font-semibold text-xl text-orange-600">
                            {itemDetails.price} TK
                        </p>
                        <div className=" flex gap-3 items-center py-4">
                            <p className=" text-gray-600">Size</p>
                            <select name="size" id="size" className=" bg-white border-2 border-gray-500 p-1">
                                <option selected disabled value="choose and option">Choose an option</option>
                                <option value="2.4">2.4</option>
                                <option value="2.6">2.6</option>
                                <option value="2.8">2.8</option>
                            </select>
                        </div>
                        <div className=" flex  gap-3">
                            <div className=" flex gap-1">
                                <button onClick={decreaseValue} className=" px-1 border text-lg ">-</button>
                                <input onChange={cartValue} defaultValue={value} value={value} min={1} type="number" name="amount" id="amount" className=" bg-white border w-12 text-center" />
                                <button onClick={increaseValue} className=" px-1 border">+</button>
                            </div>
                            <button onClick={() => handleAddToCart(id)} className="btn min-h-[1rem] h-9  bg-orange-600 border-none rounded-none text-white hover:bg-gray-200 hover:text-orange-600 ease-in-out duration-500">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" pt-4">
                <AdditionalInfoTab itemInfo={itemDetails} />
            </div>
            <div className=" divider">

            </div>
            <div className=" pt-4 mx-auto">
                <div className=" w-[80%] mx-auto">
                    <h3 className=" text-black text-2xl font-semibold pb-6">You May Also Like</h3>
                </div>
                <RelatedProducts />
            </div>
        </div>
    );
};

export default ItemDetails;