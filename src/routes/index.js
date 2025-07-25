"use strict";
// This file sets up the application routes.
const express = require('express');
const router = express.Router();

// Import user routes
const userRoutes = require('./user.route');

// Example route
router.use('/user', userRoutes);

// Export the router
module.exports = router;