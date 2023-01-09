/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    
    return knex.schema.createTable('salgados', function(table){


        table.increments();        
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.string('preço').notNullable();
        table.string('estoque').notNullable();       
        table.string('img_salgado').notNullable();
        table.string('status').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('salgados');
  
};
