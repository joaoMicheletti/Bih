/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('propaganda', function(table){
        table.increments();
        table.string('Texto').notNullable();
        table.string('img_propaganda').notNullable();
    }); 
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('prop');
  
};
