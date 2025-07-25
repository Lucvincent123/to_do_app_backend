"use strict";

const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectDB = require("./config/db");
const routes = require("./routes");
// This file sets up the Express server, applies middleware, and defines routes.
const app = express();

// Middleware setup
app.use(cors());
app.use(express.json());


// Routes

app.use("/api", routes);


// main entry point for the application
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/mydatabase"; // Default URI if not set
if (require.main === module) {
  app.listen(PORT, async () => {
    await connectDB(MONGO_URI)
    console.log(`Server is running on port ${PORT}`);
  });
}