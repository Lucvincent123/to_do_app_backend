// This file sets up the database connection using Mongoose.
'use strict';

// Import external modules
const mongoose = require('mongoose');

// Function connecting database with the given URI
const connectDB = async (MONGO_URI) => {
    try {
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`Database connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

// Export
module.exports = connectDB;
