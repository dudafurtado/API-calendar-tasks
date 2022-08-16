const bcrypt = require('bcrypt');

const createPassword = async (password) => {
  return await bcrypt.hash(password.trim(), 10);
}

const verifyPassword = async (passwordOriginal, passwordToVerify) => {
  return await bcrypt.compare(passwordToVerify, passwordOriginal);
}

module.exports = {
  createPassword,
  verifyPassword,
}