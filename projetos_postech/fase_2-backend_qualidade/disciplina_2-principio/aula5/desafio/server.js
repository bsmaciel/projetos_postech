const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Configurar EJS como template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Configurar pasta pública para CSS e assets estáticos
app.use(express.static('public'));

// Middleware para interpretar dados do body
app.use(bodyParser.urlencoded({ extended: true }));

// Importar rotas
const userRoutes = require('./routes/userRoutes');
const timeRoutes = require('./routes/timeRoutes');

// Usar as rotas
app.use('/users', userRoutes);
app.use('/times', timeRoutes);

// Porta do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
