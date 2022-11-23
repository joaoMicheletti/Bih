/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
        table.increments();
        table.string('product_name').notNullable();
        table.string('claint_name').notNullable();
        table.string('addreas').notNullable();
        table.string('value_padidos').notNullable();
        table.string('troco').notNullable();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
  
};
