/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
            // info produtos
        table.increments();
        table.string('name').notNullable();
        table.string('quantidade').nullable();
        table.string('preço').notNullable();
                                                                                                    
           //info claint
        table.string('name_c').notNullable();
        table.string('rua').notNullable();
        table.string('casa_n').notNullable();
        table.string('cep').notNullable();
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
