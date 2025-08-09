// This file provides all services of user model
'use strict';

// Import user model
const userModel = require('../models/user.model');

// Construct user service
class UserService {
    async getAllUsers() {
        // Logic to retrieve all users from the database
        try {
            const users = await userModel.find(); // Exclude password from results by default
            return users;
        } catch (error) {
            throw new Error(`Error retrieving users: ${error.message}`);
        }
    }

    async getUserById(userId) {
        // Logic to retrieve a user by ID
        try {
            const user = await userModel.findById(userId); // Exclude password from results by default
            return user;
        } catch (error) {
            throw new Error(`Error retrieving user ${userId}: ${error.message}`);
        }
    }

    async getUserByEmail(email) {
        // Logic to retrieve a user by email
        try {
            const user = await userModel.findOne({ email }).select('+password'); // Include password for comparison
            return user;
        } catch (error) {
            throw new Error(`Error retrieving user by email ${email}: ${error.message}`);
        }
    }

    async createUser(userData) {
        // Logic to create a new user in the database
        try {
            const newUser = new userModel(userData);
            await newUser.save();
            return newUser;
        } catch (error) {
            throw new Error(`Error creating user: ${error.message}`);
        }
    }

    async updateUserById(userId, data) {
        try {
            const previousUser = await userModel.findByIdAndUpdate(userId, data);
            return previousUser;
        } catch (error) {
            throw new Error(`Error updating user with id: ${userId}`);
        }
    }
}

// Export
module.exports = UserService;
