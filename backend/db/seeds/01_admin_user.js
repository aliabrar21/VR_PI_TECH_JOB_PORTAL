const bcrypt = require('bcrypt');

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  const hashedPassword = await bcrypt.hash('admin123', 10);
  await knex('users').insert([
    {
      name: 'Admin User',
      email: 'admin@vrpi.com',
      password: hashedPassword,
      role: 'admin'
    }
  ]);
};
