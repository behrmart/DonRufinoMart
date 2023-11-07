/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
        return knex.schema.table('tienditas', function (table) {
          table.string('tiendita_addr_street').notNullable()
          table.string('tiendita_addr_city').notNullable()
          table.string('tiendita_addr_zipcode').notNullable()
          table.string('tiendita_manager_name')
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
        return knex.schema.table('tienditas', function (table) {
            table.dropColumn('tiendita_addr_street') // borro la columna fk_client
            table.dropColumn('tiendita_addr_city') // borro la columna fk_pedido
            table.dropColumn('tiendita_addr_zipcode')
            table.dropColumn('tiendita_manager_name')
        })
      }
    })
  }
