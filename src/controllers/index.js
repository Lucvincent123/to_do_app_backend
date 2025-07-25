"use strict";
// import
const UserController = require('./user.controller');
// export
module.exports = {
    userController: new UserController.UserController()
};