'use strict';

const jwt = require('jsonwebtoken');

const { UserService } = require('../services');


class UserController {
    async getUser(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    async createUser(req, res) {
        try {
            const userData = req.body;
            if (UserService.getUserByEmail(userData.email)) {
                return res.status(400).json({ message: 'Email already used before' });
            }
            const newUser = await UserService.createUser(userData);
            res.status(201).json(newUser);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            // Implement login logic here (e.g., check credentials)
            // For now, just returning a success message
            
            const loginResponse = await UserService.login(username, password);
            if (loginResponse instanceof Error) {
                return res.status(401).json({ message: loginResponse.message });
            }
            // Generate JWT token
            const token = jwt.sign({ userId: loginResponse.userId }, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
            res.status(200).json({ message: 'Login successful', token, userId: loginResponse.userId });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    }


    async getUserById(req, res) {
        try {
            const userId = req.params.id;
            const user = await UserService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}



module.exports.UserController = UserController;