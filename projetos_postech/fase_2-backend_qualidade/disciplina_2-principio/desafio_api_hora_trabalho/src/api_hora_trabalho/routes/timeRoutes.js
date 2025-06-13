const express = require('express');
const router = express.Router();
const timeController = require('../controllers/timeController');

// Rota para listar registros de um usuário
router.get('/:userId', timeController.listTimes);

// Rota para exibir o formulário de registro
router.get('/register/:userId', timeController.showRegisterForm);

// Rota para registrar horas trabalhadas
router.post('/register/:userId', timeController.registerTime);

module.exports = router;
