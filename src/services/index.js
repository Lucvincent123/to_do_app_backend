'use strict';

const userService = require('./user.service');

module.exports = {
    UserService: new userService.UserService()
};