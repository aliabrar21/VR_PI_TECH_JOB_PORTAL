exports.up = function(knex) {
  return knex.schema.createTable('jobs', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('company').notNullable();
    table.string('location').notNullable();
    table.string('salary').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('jobs');
};
