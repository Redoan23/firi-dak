

const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return []
}

const setItemToLocalStorage = (key, id, name, quantity, selectedSize) => {
    const itemArray = getItemFromLocalStorage(key)
    // console.log(itemArray)
    const data = {
        i: id,
        n: name,
        q: quantity,
        s: selectedSize
    }
    const findItem = itemArray.find(item => item.i === id)
    if (!findItem) {
        itemArray.push(data)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }
    if (findItem) {
        const id = findItem?.i
        let retrievedItem = getItemFromLocalStorage(key)
        let targetItem = retrievedItem.find(item => item.i === id)
        targetItem.q = targetItem.q + quantity
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(retrievedItem))

    }
}

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export { getItemFromLocalStorage, setItemToLocalStorage, removeItemFromLocalStorage }