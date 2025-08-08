// This file import all controllers and then export
'use strict';
// import
const UserController = require('./user.controller');
const TaskController = require('./task.controller');
// export
module.exports = {
    UserController: new UserController(),
    TaskController: new TaskController(),
};
