const compareId = (element,id) => element.id === id

const removeElementFromArray = (array,id,comp) => {
    const stack = []
    
    let element = array.pop()
    
    while (!comp(element,id) && array.length !== 0) {
        stack.push(element)
        element = array.pop()
    }

    array.push(...stack)
}

module.exports = {removeElementFromArray, compareId}