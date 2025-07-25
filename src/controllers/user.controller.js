'use strict';

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

            res.status(200).json(loginResponse);
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: error.message });
        }
    }
}

module.exports.UserController = UserController;