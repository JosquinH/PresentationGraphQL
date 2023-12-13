/**
 * Point d'entrée du schéma graphQL. Il se charge de :
 * - Importer tous les types graphQL défini à partir du fichier "schema.js"
 */

const { makeSchema,queryType } = require('nexus')
const path = require('path')
const Cars = require('./Cars')
  

const nexusSchema = makeSchema({
  types: [
    ...Object.values(Cars)
  ],

  outputs: {
    schema: path.join(__dirname, '/schema.graphql')
  }
})


module.exports = { nexusSchema}