const fs = require('fs') 
const { v4: uuidv4 } = require('uuid')

const getCar = (root,{id}, ctx) => {
    const data = JSON.parse(fs.readFileSync(ctx.carsFilename,'utf8'))
    return data.find(x => x.id === id)
}

const getCars = (root,{filter = {}}, ctx) => {
    const data = JSON.parse(fs.readFileSync(ctx.carsFilename,'utf8'))
    const keyVal = Object.entries(filter)
    if (keyVal.length === 0) {
        return data
    } else {
        return data.filter(car => keyVal.every(([key,value]) => car[key] === value))
    }
}

const createCar = (root,{input}, ctx) => {
    input.id = uuidv4()
    const data = getCars(root,{}, ctx)
    data.push(input)
    fs.writeFileSync(ctx.carsFilename,JSON.stringify(data))
    return input
}

module.exports = {resolvers:{getCar,getCars,createCar,}}