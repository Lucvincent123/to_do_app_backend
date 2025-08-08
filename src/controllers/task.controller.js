// This file sets up controllers for task routes
'use strict';

// Import services
const { TaskService } = require('../services');

// Construct controller
class TaskController {
    // POST /api/task
    async createTask(req, res) {
        const tokenUserId = req.userId;
        const taskData = req.body;
        if (tokenUserId !== taskData.userId)
            return res.status(401).json({ success: true, message: 'User ID not match' });
        try {
            const newTask = await TaskService.createTask(taskData);
            res.status(201).json({ success: true, message: 'Task created', data: newTask });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // GET /api/task/user/:userId
    async getAllTasksByUserId(req, res) {
        const paramsUserId = req.params.userId;
        const tokenUserId = req.userId;
        if (paramsUserId !== tokenUserId) return res.status(401).json({ success: false, message: 'User id not match' });
        try {
            const tasks = await TaskService.getAllTasksByUserId(paramsUserId);
            res.status(200).json({ success: true, message: 'Tasks fetched', data: tasks });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // DELETE /api/task/:taskId
    async deleteTaskById(req, res) {
        const tokenUserId = req.userId;
        const taskId = req.params.taskId;
        try {
            const deletedTask = await TaskService.deleteTaskById(taskId, tokenUserId);
            res.status(200).json({ sucess: true, message: 'Task deleted', data: deletedTask });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // GET /api/task/:taskId
    async getTaskById(req, res) {
        const taskId = req.params.taskId;
        const tokenUserId = req.userId;
        try {
            const task = await TaskService.getTaskById(taskId, tokenUserId);
            res.status(200).json({ success: true, message: 'Task fetched', data: task });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // PUT /api/task/:taskId
    async updateTaskById(req, res) {
        const tokenUserId = req.userId;
        const taskId = req.params.taskId;
        const data = req.body;
        try {
            const editedTask = await TaskService.updateTaskById(taskId, data, tokenUserId);
            res.status(200).json({ success: true, message: 'Task updated', data: editedTask });
            console.log('hello');
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

// Export
module.exports = TaskController;
