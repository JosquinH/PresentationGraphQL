const fs = require('fs') 
const {resolvers: carResolver} = require('../Cars/resolvers.js')

const getCarFromPersonalCar = (root,{},ctx) => {
    return carResolver.getCar(root,{id: root.carId},ctx)
}

const getPersonalCar = (root,{id},ctx) => {
    const data = getPersonalCars(root,{},ctx)
    return data.find(x => x.id === id)
}

const getPersonalCars = (root,{},ctx) => {
    return JSON.parse(fs.readFileSync(ctx.personalCarsFilename,'utf8'))
}

const createPersonalCar = (root,{input},ctx) => {
    const data = getPersonalCars(root,{}, ctx)
    data.push(input)
    fs.writeFileSync(ctx.personalCarsFilename,JSON.stringify(data))
    return input
}

module.exports = {resolvers:{getCarFromPersonalCar,getPersonalCar,getPersonalCars,createPersonalCar}} 