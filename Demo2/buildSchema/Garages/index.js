const {queryField, mutationField, objectType, inputObjectType, arg, list, nonNull} = require('nexus')
const {resolvers} = require('./resolvers')

const Garage = objectType({
    name: 'Garage',
    description: 'Un garage de voitures personnelles',
    definition(t) {
      t.field('id', { type: nonNull('ID')})
      t.field('personnalCars', { 
        type: nonNull(list(nonNull('PersonalCar'))), 
        description: "La liste des voiturees personnelles",
        resolve: resolvers.getPersonnalCarsFromGarage
      })
    }
})

const CreateGarageInput = inputObjectType({
    name: 'CreateGarageInput',
    description: 'Un garage de voitures personnelles',
    definition(t) {
      t.field('personnalCarNumberPlates', { 
        type: nonNull(list(nonNull('ID'))), 
        description: "La liste des plaques d'imatriculation des voiturees personnelles",
      })
    }
})

// QUERY

const GetGaragesQuery = queryField('getGarages',{
    type: list(Garage),
    description: 'Renvoie une liste de Garages',
    resolve: resolvers.getGarages
})

// MUTATION


const CreateGarageMutation = mutationField('createGarage',{
    type: Garage,
    description: `Créer un garage`,
    args: { input: arg({type : nonNull(CreateGarageInput)}) },
    resolve: resolvers.createGarage
  })

module.exports = {
    Garage,
    CreateGarageInput,
    GetGaragesQuery,
    CreateGarageMutation
}