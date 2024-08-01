

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
    console.log('item found by find id', findItem)
    // const findItemSize = itemArray.find(item => item.s === selectedSize)
    const findItemBySize = itemArray.filter(item => item.s === selectedSize && item.i === id)
    console.log('item found by find size', findItemBySize)
    // if (!findItem || !findItemSize) {
    //     itemArray.push(data)
    //     localStorage.setItem(key, JSON.stringify(itemArray))
    // }
    if (findItemBySize.length === 0) {
        console.log('true')
        itemArray.push(data)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }
    if (findItem && findItemBySize.length > 0) {
        const id = findItem?.i
        let retrievedItem = getItemFromLocalStorage(key)
        console.log('retrived item', retrievedItem)
        const targetItem = findItemBySize.find(item => item.i === id)
        let finalItem = retrievedItem.filter(item => item.i === id && item.s === targetItem?.s)
        console.log(finalItem)
        finalItem[0].q = finalItem[0].q + quantity
        localStorage.removeItem(key)
        localStorage.setItem(key, JSON.stringify(retrievedItem))
    }
}

const removeItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export { getItemFromLocalStorage, setItemToLocalStorage, removeItemFromLocalStorage }