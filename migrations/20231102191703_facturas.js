/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('facturas').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('facturas', function (table) {
          table.increments('factura_id').primary() // primary() quiere decir que es la llave primaria
          table.boolean('active').notNullable().defaultTo(true) // defaultTo() quiere decir un valor por defecto
          table.timestamp('created_at').defaultTo(knex.fn.now()) // fn.now() es una función de knex que nos da la fecha y hora actual
        })
      }
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/*  EXPORTS.DOWN
*/
exports.down = function (knex) {
    return knex.schema.hasTable('facturas').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('facturas')
      }
    })
  }