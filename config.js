
const env = process.env.NODE_ENV || 'development' //development por defecto si no hay 

const knexfile = require ('./knexfile')
const knex = require ('knex')


// mandar a llamar la config correcta del knexfile.js

module.exports = knex(knexfile[env])