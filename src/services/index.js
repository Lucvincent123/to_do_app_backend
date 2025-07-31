'use strict';

const userService = require('./user.service');
const taskService = require('./task.service');

module.exports = {
    UserService: new userService.UserService(),
    TaskService: new taskService.TaskService()
};