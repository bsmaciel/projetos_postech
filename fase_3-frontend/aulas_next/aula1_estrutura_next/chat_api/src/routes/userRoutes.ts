import express from 'express';
import UserController from '../controllers/UserController';

const router = express.Router();

// Rota de criação de usuário
router.post('/register', UserController.register);

// Rota de autenticação de usuário
router.post('/login', UserController.login);

router.get('/', UserController.listAll);

router.get('/id', UserController.getById)

export default router;