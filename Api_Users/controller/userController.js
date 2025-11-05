const UserService = require("../services/userServices");

class UserController {
    async createUser(req, res) {
        const user = await UserService.createUser(req.body);
        res.json(user);
    }

    async getAllUsers(req, res) {
        const users = await UserService.getAllUsers();
        res.json(users);
    }

    async getUserByUsername(req, res) {
        const user = await UserService.getUserByUsername(req.params.username);
        res.json(user);
    }

    async getUserById(req, res) {
        const user = await UserService.getUserById(req.params.id);
        res.json(user);
    }

    async updateUser(req, res) {
        const updatedUser = await UserService.updateUser(req.params.id, req.body);
        res.json(updatedUser);
    }

    async deleteUser(req, res) {
        await UserService.deleteUser(req.params.id);
        res.json({ message: 'Usuario eliminado' });
    }
}

module.exports = new UserController();