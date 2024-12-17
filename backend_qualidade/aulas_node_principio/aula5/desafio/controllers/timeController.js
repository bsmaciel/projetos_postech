const Time = require('../models/time');

const timeController = {
    // Listar registros de horas de um usuário
    listTimes: (req, res) => {
        const userId = req.params.userId;
        Time.findByUser(userId, (err, times) => {
            if (err) return res.status(500).send('Erro ao buscar registros.');
            res.render('times/list', { times, userId });
        });
    },

    // Exibir formulário de registro
    showRegisterForm: (req, res) => {
        const { userId } = req.params;
        res.render('times/register', { userId });
    },

    // Registrar horas trabalhadas
    registerTime: (req, res) => {
        const { userId } = req.params;
        const { date, start_time, end_time } = req.body;
        Time.create(userId, date, start_time, end_time, (err) => {
            if (err) return res.status(500).send('Erro ao registrar horas.');
            res.redirect(`/times/${userId}`);
        });
    }
};

module.exports = timeController;
