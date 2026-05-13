exports.up = function(knex) {
  return knex.schema.createTable('courses', table => {
    table.increments('id').primary();
    table.string('title').notNullable();
    table.text('description').notNullable();
    table.string('instructor').notNullable();
    table.string('duration').notNullable();
    table.string('price').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('courses');
};
