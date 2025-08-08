// This file sets up sub-routes of /api/user
'use strict';

// Import external modules
const express = require('express');

// Import internal modules
const { UserController } = require('../controllers');
const { authorization } = require('../middleware');

// Create router
const router = express.Router();

// Apply actions to each route
router.get('/', UserController.getAllUsers);
router.post('/', UserController.createUser);
router.post('/login', UserController.login);
router.get('/info', authorization, UserController.getUserInfo);

// Export
module.exports = router;
