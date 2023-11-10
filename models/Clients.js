
// Paso 1. Necesito traer la config del entorno de knex y los detalles de conexion de DB

const knex = require('../config')

const createClient = (body) => {
    return knex
    .insert(body)
    .into('clients')
    .returning ('*')
}

const findAllClients = () => {
    return knex
    .select('*')
    .from('clients')
    .where ('active', true) //traemos los campos que no haya hecho un soft delete
}

const findOneClient = (clientId) => {
    return knex
    .select('*')
    .from('clients')
    .where ('client_id', clientId)
    .where ('active', true) // y ademans traemos los campos que no haya hecho un soft delete
    .first()
}

const modifyClient = (clientId, body) => {
    return knex
    .update(body)
    .from('clients')
    .where('client_id', clientId)
    .returning('*')
}

// Borrado Logico

const  softDeleteClient = (clientId) => {
    return knex
    .update({active: false})
    .from('clients')
    .where ('client_id', clientId)
}

// Borrado hard

const destroyClient = (clientId) => {
    return knex
    .del()
    .from('clients')
    .where('client_id', clientId)
}

module.exports = {
    createClient,
    findAllClients,
    findOneClient,
    modifyClient,
    softDeleteClient,
    destroyClient
}