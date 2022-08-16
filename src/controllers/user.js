const { fieldsToRegister } = require('../validations/postSchema');
const { createPassword } = require('../utils/password');
const userModel = require('../models/userModel');

const errorMessage = require('../messages/error');
const successMessage = require('../messages/success');

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;
  fieldsToRegister.validate({ name, email, password });
  console.log(name, email, password)

  try {
    const hash = await createPassword(password);

    const emailExists = await userModel.getUserEmail(name, email, hash);
    if (emailExists) return res.status(400).json(errorMessage.emailHadBeenUsed);

    await userModel.postUser(name, email, password);
    return res.status(202).json(successMessage.accountCreated);
  } catch (error) {
    return res.status(500).json(error.message);
  }
}

module.exports = {
  registerUser
}