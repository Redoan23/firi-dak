

const getItemFromLocalStorage = (key) => {
    const item = localStorage.getItem(key)
    if (item) {
        return JSON.parse(item)
    }
    return []
}

const setItemToLocalStorage = (key, id, quantity) => {
    const itemArray = getItemFromLocalStorage(key)
    console.log(itemArray)
    const findItem = itemArray.find(item => item === id)
    if (!findItem) {
        itemArray.push(id)
        localStorage.setItem(key, JSON.stringify(itemArray))
    }

}

const deleteItemFromLocalStorage = (key) => {
    localStorage.removeItem(key)
}

export { getItemFromLocalStorage  , setItemToLocalStorage,  deleteItemFromLocalStorage  }