// This file sets up all routes
'use strict';

// Import external modules
const express = require('express');

// Create router
const router = express.Router();

// Import sub-routes
const userRoutes = require('./user.route');
const taskRoutes = require('./task.route');

// Apply routes
router.use('/user', userRoutes);
router.use('/task', taskRoutes);

// Export the router
module.exports = router;
