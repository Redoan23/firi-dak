

const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return []
}

const setItemToLocalStorage = (key, id, name, img, quantity, selectedSize, price) => {
    const itemArray = getItemFromLocalStorage(key)
    const data = {
        i: id,
        n: name,
        img: img,
        q: quantity,
        s: selectedSize,
        p: price
    }
    const findItem = itemArray.find(item => item.i === id)
    const findItemBySize = itemArray.filter(item => item.s === selectedSize && item.i === id)
    if (findItemBySize.length === 0) {
        itemArray.push(data)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }
    if (findItem && findItemBySize.length > 0) {
        const id = findItem?.i
        let retrievedItem = getItemFromLocalStorage(key)
        const targetItem = findItemBySize.find(item => item.i === id)
        let finalItem = retrievedItem.filter(item => item.i === id && item.s === targetItem?.s)
        finalItem[0].q = finalItem[0].q + quantity
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(retrievedItem))
    }
}


const removeSingleItem = (key, id, size) => {
    const retrieveCollection = getItemFromLocalStorage(key)
    const filteredItem = retrieveCollection.filter(item => item.i === id && item.s == size)
    const indexOfTheItem = retrieveCollection.indexOf(filteredItem[0])
    retrieveCollection.splice(indexOfTheItem, 1)
    localStorage.removeItem(key)
    localStorage.setItem(key, JSON.stringify(retrieveCollection))
}

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}


// WishList section


export { getItemFromLocalStorage, setItemToLocalStorage, removeItemFromLocalStorage, removeSingleItem }