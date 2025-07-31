'use strict';

const { taskController } = require('../controllers');

const express = require('express');
const router = express.Router();

router.get('/:userId', taskController.getAllTasksByUserId.bind(taskController)); // Bind the controller to ensure 'this' context is correct
router.post('/', taskController.createTask.bind(taskController)); // Bind the controller to ensure 'this' context is correct

module.exports = router;

