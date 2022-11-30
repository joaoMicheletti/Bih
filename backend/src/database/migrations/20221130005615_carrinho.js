/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('carrinho', function(table){
        table.increments();
        table.string('user').notNullable();
        table.string('names_doce').notNullable();
        table.string('names_salgado').notNullable();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('carrinho');
  
};
