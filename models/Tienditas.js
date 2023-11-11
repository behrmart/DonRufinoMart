
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
module.exports = {
    findAllTienditas,
    findOneTiendita
}