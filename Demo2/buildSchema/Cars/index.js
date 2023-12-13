const {queryField, mutationField, objectType, enumType, inputObjectType, idArg, arg, list, nonNull} = require('nexus')
const {resolvers} = require('./resolvers')

const Brand = enumType({
    name: 'Brand',
    members: ['TOYOTA', 'SUZUKI', 'NISSAN','HONDA'],
    description: 'Les principales marques de voitures japonaises',
  })

const Car = objectType({
    name: 'Car',
    description: 'Une voiture de Catalogue',
    definition(t) {
      t.field('id', { type: nonNull('ID'), description: 'Id de la voiture'})
      t.field('model', { type: nonNull('String'), description: 'Le modèle de la voiture'})
      t.field('brand', { type: nonNull(Brand), description : 'La marque de la voiture'})
      t.field('year', { type: nonNull('Int'), description: "L'année de la voiture"})
      t.field('price', { type: nonNull('Float'), description: "Le prix de la voiture"})
      t.field('manual', { type: nonNull('Boolean'), description: "Indique si la voiture est en automatique ou manuel"})
    }
})

const CreateCarInput = inputObjectType({
    name: 'CreateCarInput',
    description: 'Input de création de Car',
    definition(t) {
      t.field('model', { type: nonNull('String'), description: 'Le modèle de la voiture'})
      t.field('brand', { type: nonNull(Brand), description : 'La marque de la voiture'})
      t.field('year', { type: nonNull('Int'), description: "L'année de la voiture"})
      t.field('price', { type: nonNull('Float'), description: "Le prix de la voiture"})
      t.field('manual', { type: nonNull('Boolean'), description: "Indique si la voiture est en automatique ou manuel"})
    }
})

const FilterCarInput = inputObjectType({
    name: 'FilterCarInput',
    description: 'Input pour filtrer les Car',
    definition(t) {
      t.field('model', { type: 'String', description: 'Le modèle de la voiture'})
      t.field('brand', { type: Brand, description : 'La marque de la voiture'})
      t.field('year', { type: 'Int', description: "L'année de la voiture"})
      t.field('price', { type: 'Float', description: "Le prix de la voiture"})
      t.field('manual', { type: 'Boolean', description: "Indique si la voiture est en automatique ou manuel"})
    }
})

// QUERY

const GetCarQuery =  queryField('getCar',{
    type: 'Car',
    description: `Renvoie la Car d'id id`,
    args: { id: idArg() },
    resolve: resolvers.getCar,
})

const GetCarsQuery = queryField('getCars',{
    type: list('Car'),
    description: `Renvoie une liste de Cars`,
    args: { filter: arg({type : FilterCarInput}) },
    resolve: resolvers.getCars,
  })

// MUTATION

const CreateCarMutation = mutationField('createCar',{
    type: Car,
    description: `Créé une Car`,
    args: { input: arg({type : nonNull(CreateCarInput)}) },
    resolve: resolvers.createCar
})

module.exports = {
    Brand,
    Car,
    CreateCarInput,
    GetCarQuery,
    GetCarsQuery,
    CreateCarMutation
}