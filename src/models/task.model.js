// This file sets up task model
'use strict';

// Import external modules
const mongoose = require('mongoose');

// Construct task schema
const TaskSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            minlength: 1,
            maxlength: 100,
        },
        description: {
            type: String,
            trim: true,
            maxlength: 500,
        },
        status: {
            type: String,
            enum: ['pending', 'in-progress', 'completed'],
            default: 'pending',
        },
        dueDate: {
            type: Date,
            default: null,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
    },
    { timestamps: true },
);
// Export
module.exports = mongoose.model('Task', TaskSchema, 'tasks'); // 'tasks' is the collection name
