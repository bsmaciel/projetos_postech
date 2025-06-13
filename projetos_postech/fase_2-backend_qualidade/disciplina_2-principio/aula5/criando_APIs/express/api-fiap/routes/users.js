const express = require('express');
const router = express.Router();

let users = [
  { id: 1, name: 'Usuário 1'},
  { id: 2, name: 'Usuário 2'},
  { id: 3, name: 'Usuário 3'},
];

// GET listing: visualizar listagem de usulários
router.get('/', (req, res) => {
  res.json(users);
});

// GET by id: encontrar usuário por id
router.get('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usuário não encontrado');
  res.json(user);
});

// POST: inserir usuário
router.post('/', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name
  };
  users.push(user);
  res.status(201).json(user);
});

// PUT: atualizar usuário
router.put('/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send('Usulário não encontrado');

  user.name = req.body.name;
  res.json(user);
});

// DELET: excluir usuário
router.delete('/:id', (req, res) => {
  const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
  if (userIndex === -1) return res.status(404).send('Usulário não encontrado');

  users.splice(userIndex, 1);
  res.json(users);
});

module.exports = router;
