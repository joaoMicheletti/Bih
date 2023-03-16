/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('pedidos', function(table){
            // info produtos
        table.increments();
        table.string('name_p').notNullable();
        table.string('quantidade').nullable();
        table.string('preço').notNullable();
        table.string('troco').notNullable();
        table.string('status').notNullable();
        table.string('np').notNullable();
                                                                                                    
           //info claint
        table.string('namec').notNullable();
        table.string('iduser').notNullable();
        table.string('rua').notNullable();
        table.string('casa').notNullable();
        table.string('cep').notNullable();
    });
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.dropTable('pedidos');
  
};
