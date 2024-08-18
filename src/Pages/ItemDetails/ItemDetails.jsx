import { useParams } from "react-router-dom";
import { useState } from "react";
import AdditionalInfoTab from "./AdditionalInfoTab/AdditionalInfoTab";
import RelatedProducts from "./RelatedProducts/RelatedProducts";
import { getItemFromLocalStorage, setItemToLocalStorage, setWishlistToLocalStorage, } from "../../components/localstorage";
import { toast } from "sonner";
import useItemDetails from "../../Hooks/useItemDetails/useItemDetails";
import useAuth from "../../Hooks/useAuth/useAuth";
import { IoHeartOutline } from "react-icons/io5";



const ItemDetails = () => {

    const { id } = useParams()
    const [itemDetails] = useItemDetails(id)
    const { refreshPage, setRefreshPage } = useAuth()

    // functionalities for the add to cart button
    const [quantity, setQuantity] = useState(1)
    const [selectedSize, setSelectedSize] = useState(null)
    const name = itemDetails?.name
    const originalPrice = itemDetails?.price
    const PriceWithDiscount = itemDetails?.discountedPrice
    const price = PriceWithDiscount ? PriceWithDiscount : originalPrice
    const img = itemDetails?.img

    const cartValue = (e) => {
        setQuantity(parseInt(e.target.value))
    }
    const increaseValue = () => {
        setQuantity(quantity + 1)
    }
    const decreaseValue = () => {
        if (quantity >= 2) {
            setQuantity(quantity - 1)
        }
    }

    const handleSizeSelection = (e) => {
        setSelectedSize((e.target.value))
    }

    // add to cart functions

    const handleAddToCart = (id, name, img, quantity, selectedSize, price) => {
        if (!quantity) {
            return toast('Please select quantity')
        }
        if (!selectedSize) {
            return toast('Please choose size')
        }
        getItemFromLocalStorage('cart-items')
        setItemToLocalStorage('cart-items', id, name, img, quantity, selectedSize, price)
        setRefreshPage(!refreshPage)

    }

    // add to wishlist functionalities
    const handleWishlist = (key, id, name, img, price) => {
        setWishlistToLocalStorage(key, id, name, img, price)
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
                        <div>
                            {itemDetails.discountedPrice ?
                                <div className=" flex items-center gap-3">
                                    <p className=" line-through">
                                        {itemDetails.price} Tk
                                    </p>
                                    <p className="py-4 underline font-semibold text-xl text-orange-600">
                                        {itemDetails.discountedPrice} TK
                                    </p>
                                </div>
                                :
                                <p className="py-4 underline font-semibold text-xl text-orange-600 ">
                                    {itemDetails.price} Tk
                                </p>
                            }
                        </div>
                        <div className=" flex gap-3 items-center py-4">
                            <p className=" text-gray-600">Size</p>
                            <select onChange={handleSizeSelection} name="size" id="size" className=" bg-white border-2 border-gray-500 p-1">
                                <option value=''>Choose an option</option>
                                <option value="2.4">2.4</option>
                                <option value="2.6">2.6</option>
                                <option value="2.8">2.8</option>
                            </select>
                        </div>
                        <div className=" flex  gap-3">
                            <div className=" flex gap-1">
                                <button onClick={decreaseValue} className=" px-1 border text-lg ">-</button>
                                <input onChange={cartValue} value={quantity} min={1} type="number" name="amount" id="amount" className=" bg-white border w-12 text-center" />
                                <button onClick={increaseValue} className=" px-1 border">+</button>
                            </div>
                            <button onClick={() => handleAddToCart(id, name, img, quantity, selectedSize, price)} className="btn min-h-[1rem] h-9  bg-orange-600 border-none rounded-none text-white hover:bg-gray-200 hover:text-orange-600 ease-in-out duration-500">Add to Cart</button>
                        </div>

                        <button onClick={() => handleWishlist('wishlist-items', itemDetails._id, itemDetails.name, itemDetails.img, itemDetails.discountedPrice)} className=" text-orange-600 flex items-center gap-2 pt-5">Add to Wishlist <IoHeartOutline /></button>

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