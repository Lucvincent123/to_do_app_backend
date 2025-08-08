// This file is the main server
'use strict';

//////////////////////////////////////////////////////////////////////////////////////////////
// Import external modules
const express = require('express');
const cors = require('cors');
require('dotenv').config();

//////////////////////////////////////////////////////////////////////////////////////////////
// Import internal modules
const connectDB = require('./config/db');
const routes = require('./routes');

//////////////////////////////////////////////////////////////////////////////////////////////
// Start server
const app = express(); // Create an express server

// Middleware setup
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', routes);

// Main entry point for the application
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase';
if (require.main === module) {
    app.listen(PORT, async () => {
        await connectDB(MONGO_URI);
        console.log(`Server is running on port ${PORT}`);
    });
}
