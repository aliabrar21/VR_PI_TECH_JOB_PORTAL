exports.up = function(knex) {
  return knex.schema.createTable('internships', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('company').notNullable();
    table.string('duration').notNullable();
    table.string('stipend').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('internships');
};
