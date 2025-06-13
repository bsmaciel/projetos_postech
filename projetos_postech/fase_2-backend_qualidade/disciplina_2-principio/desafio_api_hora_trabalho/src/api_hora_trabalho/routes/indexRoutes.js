var express = require('express');
var router = express.Router();

// Rota para a página inicial
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Sistema de Gestão de Horas' });
});

module.exports = router;
