// This file sets up controllers for user routes
'use strict';

// Import external modules
const jwt = require('jsonwebtoken');

// Import services
const { UserService } = require('../services');

// Construct controller
class UserController {
    // GET /api/user
    async getAllUsers(req, res) {
        try {
            const users = await UserService.getAllUsers();
            res.status(200).json({ success: true, message: 'Users fetched', users });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // POST /api/user
    async createUser(req, res) {
        try {
            const userData = req.body;
            const emailAlreadyUsed = await UserService.getUserByEmail(userData.email);
            if (emailAlreadyUsed) {
                return res.status(400).json({ success: false, message: 'Email already used before' });
            }
            const newUser = await UserService.createUser(userData);
            res.status(201).json({ success: true, message: 'User created', data: newUser });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // POST /api/user/login
    async login(req, res) {
        try {
            const { email, password } = req.body;
            const user = await UserService.getUserByEmail(email);

            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }

            if (user.password !== password) {
                return res.status(401).json({ success: false, message: 'Wrong password' });
            }

            // Generate JWT token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
                expiresIn: '1h',
            });
            res.status(200).json({
                success: true,
                message: 'Login successful',
                data: {
                    token,
                    userId: user._id,
                    username: user.username,
                    email: user.email,
                },
            });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }

    // GET /api/user/:userId
    async getUserInfo(req, res) {
        const userId = req.userId;
        try {
            const user = await UserService.getUserById(userId);
            if (!user) {
                return res.status(404).json({ success: false, message: 'User not found' });
            }
            res.status(200).json({ success: true, message: 'User info obtained', data: user });
        } catch (error) {
            res.status(500).json({ success: false, message: error.message });
        }
    }
}

// Export
module.exports = UserController;
