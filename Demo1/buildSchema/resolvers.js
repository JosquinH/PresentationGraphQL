const {removeElementFromArray, compareId} = require('./utils')

const getMovies = (root,{},ctx) => {
    return ctx.data
}


const Query = {getMovies}

module.exports = {resolvers:{Query}}