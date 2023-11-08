// El modelo trae los datos de la DB
// No se encarga de validar los datos ni resolver promesas, eso es trabajo del Controllador en MVC

// Paso 1. Necesito traer la config del entorno de knex y los detalles de conexion de DB

const knex = require('../config')

// Paso 2. Crear una funcion que traiga los datos que yo requiera de la DB

const createProduct = (body) => {
    return knex
    .insert(body)
    .into('products')
    .returning('*')
}

const modifyProduct = (productId, body) => {
    return knex
    .update(body)
    .from('products')
    .where('product_id', productId)
    .returning('*')
}

const findAllProducts = () => {
    return knex
    .select('*')
    .from('products')
    .where ('active', true) //traemos los campos que no haya hecho un soft delete
}

const findOneProduct = (productId) => {
    return knex
    .select('*')
    .from('products')
    .where ('product_id', productId)
    .where ('active', true) // y ademans traemos los campos que no haya hecho un soft delete
    .first()
}

// Borrado hard

const destroyProduct = (productId) => {
    return knex
    .del()
    .from('products')
    .where('product_id', productId)
}

// Borrado Logico

const  softDeleteProduct = (productId) => {
    return knex
    .update({active: false})
    .from('products')
    .where ('product_id', productId)
}


// Paso 4 exportar el modelo para que sean accesibles desde el controlador

module.exports = {
    createProduct,
    modifyProduct,
    findAllProducts,
    findOneProduct,
    destroyProduct,
    softDeleteProduct
}
