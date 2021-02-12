exports.up = function(knex, Promise) {
    return knex.schema.createTable('utilisateur', function(table) {
      table.increments('idUtilisateur').primary();
      table.string('email').notNullable().unique();
      table.string('pseudo').notNullable();
      table.string('mot_de_passe').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
  }
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTable('utilisateur');
  }