/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/* EXPORTS UP products Table
*/
exports.up = function (knex) {
    return knex.schema.hasTable('products').then(function (exists) {
      if (!exists) {
        return knex.schema.createTable('products', function (table) {
          table.increments('product_id').primary() // primary() quiere decir que es la llave primaria
          table.string('product_name').notNullable() // notNullable() quiere decir que no puede quedar vacio (nulo)
          table.text('product_description')
          table.decimal('product_price')
          table.text('product_sku')
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
    Aquí colocaremos la lógica para deshacer la migración, es decir, eliminar la tabla, eliminar campos, etc.
*/
exports.down = function (knex) {
    return knex.schema.hasTable('products').then(function (exists) {
      if (exists) {
        return knex.schema.dropTable('products')
      }
    })
  }
