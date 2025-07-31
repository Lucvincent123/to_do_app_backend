'use strict';


const { TaskService } = require('../services');

class TaskController {
    async createTask(req, res) {
        const taskData = req.body;
        try {
            const newTask = await TaskService.createTask(taskData);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async getAllTasksByUserId(req, res) {
        const userId = req.params.userId;
        try {
            const tasks = await TaskService.getAllTasksByUserId(userId);
            res.status(200).json(tasks);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports.TaskController = TaskController;