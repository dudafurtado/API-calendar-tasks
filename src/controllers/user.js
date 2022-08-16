const { fieldsToRegister } = require('../validations/postSchema');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  fieldsToRegister.validate({ name, email, password });

  try {
    
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  registerUser
}