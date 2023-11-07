/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
/* EXPORTS UP clients Table
*/
exports.up = function (knex) {
    return knex.schema.hasTable('clients').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('clients', function (table) {
          table.increments('client_id').primary() // primary() quiere decir que es la llave primaria
          table.string('client_name').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
          table.string('client_lastname').notNullable()
          table.string('client_email').notNullable().unique()
          table.string('client_phone').notNullable().unique()
          table.string('client_addr_street').notNullable()
          table.string('client_addr_zipcode').notNullable()
          table.string('client_addr_barrio').notNullable()
          table.string('client_addr_city').notNullable()
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
exports.down = function (knex) {
    return knex.schema.hasTable('clients').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('clients')
      }
    })
  }