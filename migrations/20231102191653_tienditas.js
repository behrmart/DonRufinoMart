/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('tienditas').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('tienditas', function (table) {
          table.increments('tiendita_id').primary() // primary() quiere decir que es la llave primaria
          table.string('tiendita_name').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
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
    return knex.schema.hasTable('tienditas').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('tienditas')
      }
    })
  }
