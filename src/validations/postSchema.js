const yup = require('./yupConfig');

const errorMessage = require('../messages/error');

const fieldsToRegister = yup.object().shape({
  name: yup.string().trim().required().max(80, errorMessage.maxNameUser),
  email: yup.string().email().trim().required().max(60, errorMessage.maxEmailUser),
  password: yup.string().trim().required().min(8, errorMessage.minPasswordUser),
});

const fieldsToLogin = yup.object().shape({
  email: yup.string().email().trim().required().max(60, errorMessage.maxEmailUser),
  password: yup.string().trim().required(),
});

const fieldsToTask = yup.object().shape({
  title: yup.string().trim().max(45, errorMessage.maxTitleTask),
  description: yup.string().trim(),
  when_date: yup.date().required(),
  duration: yup.number().required(),
  tag_id: yup.number(),
});

const fieldsToTag = yup.object().shape({
  name: yup.string().trim().required().max(25, errorMessage.maxNameTag),
});

module.exports = {
  fieldsToRegister,
  fieldsToLogin,
  fieldsToTask,
  fieldsToTag,
}

