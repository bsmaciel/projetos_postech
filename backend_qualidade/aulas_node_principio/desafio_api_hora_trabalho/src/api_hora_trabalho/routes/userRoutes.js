const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rota para exibir todos os usuários
router.get('/', userController.listUsers);

// Rota para exibir o formulário de criação
router.get('/create', userController.showCreateForm);

// Rota para criar um novo usuário
router.post('/create', userController.createUser);

// Rota para exibir o formulário de atualização
router.get('/update/:id', userController.showUpdateForm);

// Rota para atualizar um usuário
router.post('/update/:id', userController.updateUser);

// Rota para deletar um usuário
router.post('/delete/:id', userController.deleteUser);

module.exports = router;

