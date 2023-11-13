
const knex = require('../config')

const findAllTienditas = () => {
    return knex
    .select('*')
    .from('tienditas')
    .where ('active', true) //traemos los campos que no haya hecho un soft delete
}

const findOneTiendita = (tienditaId) => {
    return knex
    .select('*')
    .from('tienditas')
    .where ('tiendita_id', tienditaId)
    .where ('active', true) // y ademans traemos los campos que no haya hecho un soft delete
    .first()
}

const createTiendita = (body) => {
    return knex
    .insert(body)
    .into('tienditas')
    .returning ('*')
}

const modifyTiendita = (tienditaId, body) => {
    return knex
    .update(body)
    .from('tienditas')
    .where('tiendita_id', tienditaId)
    .returning('*')
}

// Borrado Logico

const  softDeleteTiendita = (tienditaId) => {
    return knex
    .update({active: false})
    .from('tienditas')
    .where ('tiendita_id', tienditaId)
}

// Borrado hard

const destroyTiendita = (tienditaId) => {
    return knex
    .del()
    .from('tienditas')
    .where('tiendita_id', tienditaId)
}


module.exports = {
    findAllTienditas,
    findOneTiendita,
    createTiendita,
    modifyTiendita,
    softDeleteTiendita,
    destroyTiendita
}