const express = require('express');

const routes = express();

const user = require('../controllers/user');
const login = require('../controllers/login');
const task = require('../controllers/task');

routes.post('/register', user.registerUser);
routes.post('/login', login.loginUser);

routes.post('/task/create', task.createTask);
routes.put('/task/edit/:id', task.editTask);
routes.delete('/task/delete/:id', task.removeTask);
routes.get('/task', task.detailsTask);
routes.get('task/:search', task.searchTask);
routes.get('tasks',);

routes.post('task/create-tag',);
routes.get('task/:tag',);

module.exports = routes;