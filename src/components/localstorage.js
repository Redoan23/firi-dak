

const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return []
}

const setItemToLocalStorage = (key, id, name, quantity, selectedSize) => {
    const itemArray = getItemFromLocalStorage(key)
    const data = {
        i: id,
        n: name,
        q: quantity,
        s: selectedSize
    }
    const findItem = itemArray.find(item => item.i === id)
    const findItemSize = itemArray.find(item => item.s === selectedSize)
    if (!findItem || !findItemSize) {
        itemArray.push(data)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }
    if (findItem && findItemSize) {
        const id = findItem?.i
        let retrievedItem = getItemFromLocalStorage(key)
        let targetItem = retrievedItem.filter(item => item.i === id && item.s === findItemSize?.s)
        targetItem[0].q = targetItem[0].q + quantity
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(retrievedItem))

    }
}

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export { getItemFromLocalStorage, setItemToLocalStorage, removeItemFromLocalStorage }