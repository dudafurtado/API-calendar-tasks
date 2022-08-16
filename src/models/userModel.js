const knex = require('../server/connection');

const getUserEmail = async (email) => {
  const list = await knex('users').select('email').where({ email });
  return list;
}

const postUser = async (name, email, hash) => {
  name = name.trim();
  email = email.trim();
  password = password.trim();

  await knex('users').insert({ name, email, password: hash });
}

module.exports = {
  getUserEmail,
  postUser,
}