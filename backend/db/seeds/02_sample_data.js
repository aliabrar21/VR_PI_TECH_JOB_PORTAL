exports.seed = async function(knex) {
  await knex('jobs').del();
  await knex('courses').del();
  await knex('internships').del();

  await knex('jobs').insert([
    { title: 'Frontend Developer', description: 'React JS Developer needed for building modern UI.', company: 'VRPI Tech', location: 'Remote', salary: '$50k - $70k' },
    { title: 'Backend Developer', description: 'Node JS Developer for API development.', company: 'VRPI Tech', location: 'Hyderabad', salary: '$60k - $80k' }
  ]);

  await knex('courses').insert([
    { title: 'Full Stack Web Development', description: 'Learn MERN stack from scratch.', instructor: 'John Doe', duration: '3 Months', price: '$100' },
    { title: 'Advanced React patterns', description: 'Master React with hooks and context.', instructor: 'Jane Smith', duration: '1 Month', price: '$50' }
  ]);

  await knex('internships').insert([
    { title: 'Software Engineering Intern', description: 'Assist in building web applications.', company: 'VRPI Tech', duration: '6 Months', stipend: '$500/month' }
  ]);
};
