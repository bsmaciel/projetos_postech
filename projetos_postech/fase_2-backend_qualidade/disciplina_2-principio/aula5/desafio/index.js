// Importa o framework Express
const express = require('express');
const app = express();

// Define a porta onde o servidor vai rodar
const PORT = 3000;

// Middleware para interpretar JSON
app.use(express.json());

// Rota inicial
app.get('/', (req, res) => {
  res.send('Bem-vindo à API para registro e gestão de horas de trabalho');
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
