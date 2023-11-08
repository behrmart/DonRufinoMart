
// Paso 1. Necesito traer la config del entorno de knex y los detalles de conexion de DB

const knex = require('../config')

const findAllClients = () => {
    return knex
    .select('*')
    .from('clients')
    .where ('active', true) //traemos los campos que no haya hecho un soft delete
}

module.exports = {
    findAllClients
}