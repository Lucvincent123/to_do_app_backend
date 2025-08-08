// This file sets up sub-routes of /api/task
'use strict';

// Import external modules
const express = require('express');

// Import controllers
const { TaskController } = require('../controllers');
const { authorization } = require('../middleware/index');

// Create router
const router = express.Router();

// Apply actions to each route
router.get('/user/:userId', authorization, TaskController.getAllTasksByUserId);
router.post('/', authorization, TaskController.createTask);
router.delete('/:taskId', authorization, TaskController.deleteTaskById);
router.get('/:taskId', authorization, TaskController.getTaskById);
router.put('/:taskId', authorization, TaskController.updateTaskById);

// Export
module.exports = router;
