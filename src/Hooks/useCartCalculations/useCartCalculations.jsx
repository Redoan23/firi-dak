import { useEffect, useState } from "react";
import { getItemFromLocalStorage } from "../../components/localstorage";
import useAuth from "../useAuth/useAuth";

const useCartCalculations = () => {
    const { refreshPage } = useAuth()
    const items = getItemFromLocalStorage('cart-items')
    const [itemQuantity, setItemQuantity] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)


    useEffect(() => {
        if (items.length > 0) {
            const totalItems = items.reduce((acc, item) => { return (acc + item.q) }, 0)
            const totalAmount = items.reduce((acc, item) => { return (acc + item.p) }, 0)

            setItemQuantity(totalItems)
            setTotalPrice(totalAmount)
        }
        else {
            setItemQuantity(0)
            setTotalPrice(0)
        }
    }, [refreshPage])

    return [itemQuantity, totalPrice, items]
};

export default useCartCalculations;