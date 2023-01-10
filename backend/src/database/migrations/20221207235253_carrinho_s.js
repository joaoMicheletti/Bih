/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('carrinho_salgado', function(table){
        table.increments();
        table.string('full_date').notNullable();
        table.string('user').notNullable();
        table.string('name').notNullable();
        table.string('quantidade').notNullable();
        table.string('estoque').notNullable();
        table.string('preço').notNullable();
        table.string('img').notNullable();

    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('carrinho');
  
};
