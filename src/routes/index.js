"use strict";
// This file sets up the application routes.
const express = require('express');
const router = express.Router();

// Import user routes
const userRoutes = require('./user.route');
const taskRoutes = require('./task.route');

// Example route
router.use('/user', userRoutes);
router.use('/task', taskRoutes);

// Export the router
module.exports = router;