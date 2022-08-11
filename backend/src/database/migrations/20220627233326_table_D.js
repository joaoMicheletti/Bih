/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('doce', function(table){
        table.string('id').primary();
        table.blob('image').notNullable();
        table.string('name').notNullable();
        table.string('value').notNullable();
        table.string('stoque').notNullable();
        table.string('description').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('doce');
  
};
