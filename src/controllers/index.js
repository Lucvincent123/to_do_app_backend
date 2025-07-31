"use strict";
// import
const UserController = require('./user.controller');
const TaskController = require('./task.controller');
// export
module.exports = {
    userController: new UserController.UserController(),
    taskController: new TaskController.TaskController()
};