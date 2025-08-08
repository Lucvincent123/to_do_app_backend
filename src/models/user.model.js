// This file sets up user model
'use strict';

// Import external modules
const mongoose = require('mongoose');

// Construct user schema
const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        match: /.+\@.+\..+/,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        select: false, // Exclude password from queries by default
    },
});

// Export
module.exports = mongoose.model('User', UserSchema, 'users'); // 'users' is the collection name
