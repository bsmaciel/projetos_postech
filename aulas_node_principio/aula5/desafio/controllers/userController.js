const User = require('../models/user');

const userController = {
    // Exibir todos os usuários
    listUsers: (req, res) => {
        User.findAll((err, users) => {
            if (err) return res.status(500).send('Erro ao buscar usuários.');
            res.render('users/list', { users });
        });
    },

    // Exibir formulário de criação
    showCreateForm: (req, res) => {
        res.render('users/create');
    },

    // Criar um novo usuário
    createUser: (req, res) => {
        const { name, email } = req.body;
        User.create(name, email, (err) => {
            if (err) return res.status(500).send('Erro ao criar usuário.');
            res.redirect('/users');
        });
    },

    // Exibir formulário de atualização
    showUpdateForm: (req, res) => {
        const id = req.params.id;
        User.findAll((err, users) => {
            const user = users.find(u => u.id == id);
            res.render('users/update', { user });
        });
    },

    // Atualizar um usuário
    updateUser: (req, res) => {
        const { id } = req.params;
        const { name, email } = req.body;
        User.update(id, name, email, (err) => {
            if (err) return res.status(500).send('Erro ao atualizar usuário.');
            res.redirect('/users');
        });
    },

    // Deletar um usuário
    deleteUser: (req, res) => {
        const { id } = req.params;
        User.delete(id, (err) => {
            if (err) return res.status(500).send('Erro ao deletar usuário.');
            res.redirect('/users');
        });
    }
};

module.exports = userController;
