const db = require('./database');

// Criar a tabela de usuários (caso não exista)
db.run(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE
    )
`);

const User = {
    // Método para criar um usuário
    create: (name, email, callback) => {
        const sql = `INSERT INTO users (name, email) VALUES (?, ?)`;
        db.run(sql, [name, email], callback);
    },

    // Buscar todos os usuários
    findAll: (callback) => {
        const sql = `SELECT * FROM users`;
        db.all(sql, [], callback);
    },

    // Atualizar um usuário
    update: (id, name, email, callback) => {
        const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
        db.run(sql, [name, email, id], callback);
    },

    // Deletar um usuário
    delete: (id, callback) => {
        const sql = `DELETE FROM users WHERE id = ?`;
        db.run(sql, [id], callback);
    }
};

module.exports = User;
