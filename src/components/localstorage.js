

const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return []
}

const setItemToLocalStorage = (key, id, quantity, selectedSize) => {
    const itemArray = getItemFromLocalStorage(key)
    console.log(itemArray)
    const data = {
        id: id,
        q: quantity,
        s: selectedSize
    }
    const findItem = itemArray.find(item => item.id === id)
    if (!findItem) {
        itemArray.push(data)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }

}

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export { getItemFromLocalStorage, setItemToLocalStorage, removeItemFromLocalStorage }