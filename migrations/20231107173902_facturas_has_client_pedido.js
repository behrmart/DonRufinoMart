/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('facturas').then(function (exists) {
      if (exists) {
        return knex.schema.table('facturas', function (table) {
          // Agregar dos columnas fk_client y fk_pedido y que sea llaves foraneas
          table.integer('fk_client').unsigned().references('clients.client_id') // references() es una función de knex que nos permite hacer referencia a otra tabla y a su llave primaria
          table.integer('fk_pedido').unsigned().references('pedidos.pedido_id')
        })
      }
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('facturas').then(function (exists) {
      if (exists) {
        return knex.schema.table('facturas', function (table) {
          table.dropColumn('fk_client') // borro la columna fk_client
          table.dropColumn('fk_pedido') // borro la columna fk_pedido
        })
      };
    })
  }