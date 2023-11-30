const compareId = (element,id) => element.id === id

const removeElementFromArray = (array,id,comp) => {
    const stack = []
    
    let element = array.pop()
    
    while (!comp(element,id) && array.length !== 0) {
        stack.push(element)
        element = array.pop()
    }

    while (stack.length !== 0) {
        array.push(stack.pop())
    }
}

module.exports = {removeElementFromArray, compareId}