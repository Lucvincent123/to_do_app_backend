"use strict";


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

module.exports = {
    logger,
    cors,
};