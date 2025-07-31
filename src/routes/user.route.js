'use strict';

const express = require('express');
const router = express.Router();
const { userController } = require('../controllers');

const { authorization } = require('../middleware');


router.get('/', authorization, userController.getUser.bind(userController)); // Bind the controller to ensure 'this' context is correct
router.post('/', userController.createUser.bind(userController)); // Bind the controller to ensure 'this' context is correct
router.post('/login', userController.login.bind(userController)); // Assuming you want to handle PUT requests for creating users as well
router.get('/:id', userController.getUserById.bind(userController)); // Bind the controller to ensure 'this' context is correct


module.exports = router;
