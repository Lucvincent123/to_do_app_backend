// This file provides all services of task model
'use strict';

// Import task model
const taskModel = require('../models/task.model');

// Construct task service
class TaskService {
    async createTask(taskData) {
        // Logic to create a new task in the database
        try {
            const newTask = new taskModel(taskData);
            await newTask.save();
            return newTask;
        } catch (error) {
            throw new Error(`Error creating task: ${error.message}`);
        }
    }

    async getAllTasksByUserId(userId) {
        // Logic to retrieve all tasks for a specific user
        try {
            const tasks = await taskModel.find({ userId });
            return tasks;
        } catch (error) {
            throw new Error(`Error retrieving tasks for user ${userId}: ${error.message}`);
        }
    }

    async getTaskById(taskId, tokenUserId) {
        // Logic to get a task with a specific id
        try {
            const task = await taskModel.findOne({ _id: taskId, userId: tokenUserId });
            return task;
        } catch (error) {
            throw new Error(`Error retrieving task with id: ${taskId}`);
        }
    }

    async deleteTaskById(taskId, tokenUserId) {
        // Logic to find and delete a task by id
        try {
            const deletedTask = await taskModel.findOneAndDelete({ _id: taskId, userId: tokenUserId });
            return deletedTask;
        } catch (error) {
            throw new Error(`Error deleting task with id: ${taskId}`);
        }
    }

    async updateTaskById(taskId, data, tokenUserId) {
        // Logic to find and update a task by id
        try {
            const previousTask = await taskModel.findOneAndUpdate({ _id: taskId, userId: tokenUserId }, data);
            return previousTask;
        } catch (error) {
            throw new Error(`Error updating task with id: ${taskId}`);
        }
    }
}

// Export
module.exports = TaskService;
