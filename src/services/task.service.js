const taskModel = require('../models/task.model');

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
            const tasks = await taskModel.find({ userId}); // Assuming taskModel has a userId field
            return tasks;
        } catch (error) {
            throw new Error(`Error retrieving tasks for user ${userId}: ${error.message}`);
        }
    }
}

module.exports.TaskService = TaskService;