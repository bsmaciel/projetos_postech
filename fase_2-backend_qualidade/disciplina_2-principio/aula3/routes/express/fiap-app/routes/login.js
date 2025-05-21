const express = require('express');
const router = express.Router();

router.use((req,res,next) => {
    console.log('Middleware no Router');
    next();
});

router.get('/login', (req,res) => {
    res.send('Página de login');
});

router.get('/logout', (req,res) => {
    res.send('Desconectado com sucesso');
});

router.get('/forgot-password', (req,res) => {
    res.send('Página de recuperação');
});

module.exports = router;