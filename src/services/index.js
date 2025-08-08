// This file import all service and export
'use strict';

const UserService = require('./user.service');
const TaskService = require('./task.service');

// Export
module.exports = {
    UserService: new UserService(),
    TaskService: new TaskService(),
};
