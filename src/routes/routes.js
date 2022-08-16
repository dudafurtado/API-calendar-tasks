const express = require('express');

const routes = express();

const user = require('../controllers/user');
const login = require('../controllers/login');
const task = require('../controllers/task');
const tag = require('../controllers/tag');

routes.post('/register', user.registerUser);
routes.post('/login', login.loginUser);

routes.post('/task/create', task.createTask);
routes.put('/task/edit/:id', task.editTask);
routes.delete('/task/delete/:id', task.removeTask);
routes.get('/task', task.detailsTask);
routes.get('task/:search', task.searchTask);
routes.get('tasks', task.listTasks);

routes.post('tag/create', tag.createTag);
routes.get('tags', tag.listTags);

module.exports = routes;