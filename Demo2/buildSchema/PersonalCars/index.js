const {queryField, mutationField, objectType, inputObjectType, idArg, arg, list, nonNull} = require('nexus')
const {resolvers} = require('./resolvers')

const PersonalCar = objectType({
    name: 'PersonalCar',
    description: 'Une voiture personnelle',
    definition(t) {
      t.field('numberPlate', { type: nonNull('ID'), description: "La plaque d'imatriculation de la voiture"})
      t.field('car', { 
        type: nonNull('Car'), 
        description: "La voiture",
        resolve: resolvers.getCarFromPersonalCar
      })
    }
})

const CreatePersonalCarInput = inputObjectType({
  name: 'CreatePersonalCarInput',
  description: 'Input de création de voiture personnelle',
  definition(t) {
    t.field('numberPlate', { type: nonNull('ID'), description: "La plaque d'imatriculation de la voiture"})
    t.field('carId', { type: nonNull('ID'), description: "L'ID de la voiture",
    })
  }
})

// QUERY

const GetPersonalCarQuery = queryField('getPersonalCar',{
  type: 'PersonalCar',
  description: `Renvoie la voiture personnelle d'id id`,
  args: { id: idArg() },
  resolve: resolvers.getPersonalCar,
})

const GetPersonalCarsQuery = queryField('getPersonalCars',{
  type: list('PersonalCar'),
  description: `Renvoie une liste de voitures personnelles`,
  resolve: resolvers.getPersonalCars,
})

// MUTATION

const CreatePersonalCarMutation = mutationField('createPersonalCar',{
  type: PersonalCar,
  description: `Créer une voiture personnelle`,
  args: { input: arg({type : nonNull(CreatePersonalCarInput)}) },
  resolve: resolvers.createPersonalCar
})

module.exports = {
   PersonalCar,
   GetPersonalCarsQuery,
   CreatePersonalCarMutation
}