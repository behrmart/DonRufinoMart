/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
    return knex.schema.hasTable('tienditas').then(function (exists) {
      if (exists) {
        return knex.schema.table('tienditas', function (table) {
          // Agregar una columna fk_factura y que sea llave foranea
          // Haremos que facturas (facturas) pueda pertenecer a tienditas (tienditas)
          table.integer('fk_factura').unsigned().references('facturas.factura_id') // references() es una función de knex que nos permite hacer referencia a otra tabla y a su llave primaria
        })
      }
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
    return knex.schema.hasTable('tienditas').then(function (exists) {
      if (exists) {
        return knex.schema.table('tienditas', function (table) {
          table.dropColumn('fk_factura') // borro la columna fk_factura
        })
      };
    })
  }