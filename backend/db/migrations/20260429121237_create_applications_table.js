exports.up = function(knex) {
  return knex.schema.createTable('applications', table => {
    table.increments('id').primary();
    table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE');
    table.integer('job_id').unsigned().references('id').inTable('jobs').onDelete('CASCADE');
    table.enum('status', ['pending', 'reviewed', 'accepted', 'rejected']).defaultTo('pending');
    table.string('resume_link');
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('applications');
};
