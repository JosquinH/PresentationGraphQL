const fs = require('fs') 
const { v4: uuidv4 } = require('uuid')
const {resolvers: personalCarsResolvers} = require('../PersonalCars/resolvers.js')

// QUERY

const getPersonnalCarsFromGarage = (root,{},ctx) => {
    const personnalCars = personalCarsResolvers.getPersonalCars(root,{},ctx)
    return root.personnalCarNumberPlates.map(personnalCarNumberPlate => 
        personnalCars.find(personnalCar => personnalCar.numberPlate === personnalCarNumberPlate)
    )
}

const getGarages = (root,{},ctx) => {
    return JSON.parse(fs.readFileSync(ctx.garagesFilename,'utf8'))
}

// MUTATION

const createGarage = (root,{input},ctx) => {
    input.id = uuidv4()
    const data = getGarages(root,{},ctx)
    data.push(input)
    fs.writeFileSync(ctx.garagesFilename,JSON.stringify(data))
    return input
}

module.exports = {resolvers:{getPersonnalCarsFromGarage,getGarages,createGarage}}
