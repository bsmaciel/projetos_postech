const db = require('./database');

// Criar a tabela de registros de horas (caso não exista)
db.run(`
    CREATE TABLE IF NOT EXISTS times (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        userId INTEGER NOT NULL,
        date TEXT NOT NULL,
        start_time TEXT NOT NULL,
        end_time TEXT NOT NULL,
        FOREIGN KEY(userId) REFERENCES users(id)
    )
`);

const Time = {
    // Criar um registro de horas
    create: (userId, date, startTime, endTime, callback) => {
        const sql = `INSERT INTO times (userId, date, start_time, end_time) VALUES (?, ?, ?, ?)`;
        db.run(sql, [userId, date, startTime, endTime], callback);
    },

    // Buscar registros por usuário
    findByUser: (userId, callback) => {
        const sql = `SELECT * FROM times WHERE userId = ?`;
        db.all(sql, [userId], callback);
    }
};

module.exports = Time;
