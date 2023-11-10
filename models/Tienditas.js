
const knex = require('../config')

const findAllTienditas = () => {
    return knex
    .select('*')
    .from('tienditas')
    .where ('active', true) //traemos los campos que no haya hecho un soft delete
}

module.exports = {
    findAllTienditas
}