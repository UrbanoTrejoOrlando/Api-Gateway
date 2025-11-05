const User = require("../model/userModel");

class UserService {
    // Metodos 
    async createUser(user) {
        return await User.create(user);
    }

    async getAllUsers() {
        return await User.find();
    }

    async getUserByUsername(username) {
        return await User.findOne({ username });
    }

    async getUserById(id) {
        return await User.findById(id);
    }

    async updateUser(id, userData) {
        return await User.findByIdAndUpdate(id, userData, { new: true });
    }

    async deleteUser(id) {
        return await User.findByIdAndDelete(id);
    }
}

module.exports = new UserService();
