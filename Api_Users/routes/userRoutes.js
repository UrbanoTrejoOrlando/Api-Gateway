const express = require("express");
const UserController = require("../controller/userController");

const router = express.Router();
// Creacion de URL para crear un usuario
router.post('/', UserController.createUser);
// Obtener todos los usuarios
router.get('/', UserController.getAllUsers);
// Obtener un usuario por su nombre de usuario
router.get('/username/:username', UserController.getUserByUsername);
// Obtener un usuario por su ID
router.get('/:id', UserController.getUserById);
// Acttulizar un usuario
router.put('/:id', UserController.updateUser);
// Eliminar un usuario
router.delete('/:id', UserController.deleteUser);

module.exports = router;