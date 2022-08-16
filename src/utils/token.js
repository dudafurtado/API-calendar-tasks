const jwt = require('jsonwebtoken');

const jwtSecret = process.env.TOKEN_SECRET;

const createToken = (id, email) => {
  return jwt.sign({ id, email }, jwtSecret, { expiresIn: '2h' });
}

const verifyToken = (token) => {
  return jwt.verify(token, jwtSecret);
}

module.exports = {
  createToken,
  verifyToken,
}