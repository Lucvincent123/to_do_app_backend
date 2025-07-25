'use strict';

const userModel = require('../models/user.model');


class UserService {
    async getAllUsers() {
        // Logic to retrieve all users from the database
        try {
            const users = await userModel.find(); // Exclude password from results
            return users;
        } catch (error) {
            throw new Error(`Error retrieving users: ${error.message}`);
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

    async login(username, password) {
        // Logic to handle user login
        try {
            const user = await userModel.findOne({ username }).select('+password'); // Include password for comparison
            if (!user) {
                throw new Error('User not found');
            }   
            // Here you would typically compare the password with a hashed version
            if (user.password !== password) { // Replace with proper hashing comparison in production
                throw new Error('Invalid password');
            }
            return { message: 'Login successful', username: user.username };
        } catch (error) {
            throw new Error(error.message);
        }
    }        
}

module.exports.UserService = UserService;