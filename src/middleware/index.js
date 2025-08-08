// This file sets up all middlewares
'use strict';

// Import external module
const jwt = require('jsonwebtoken');

// Example middleware: logs request method and URL
function logger(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next();
}

// Example middleware: handles CORS
function cors(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

function authorization(req, res, next) {
    const token = req.headers['authorization'].split(' ')[1]; // Assuming token is sent as "Bearer <token>"
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    // Verify token logic here (e.g., using JWT)
    // For now, just passing the request to the next middleware
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) {
            return res.status(401).json({ success: false, message: `Failed to authenticate token: ${err}` });
        }
        req.userId = decoded.userId; // Attach user ID to request object
    });
    next();
}

// Export
module.exports = {
    logger,
    cors,
    authorization,
};
