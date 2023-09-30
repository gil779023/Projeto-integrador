const express = require('express');
const app = express();

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { eAdmin } = require('./src/middlewares/auth');
const User = require('./src/models/User');

app.use(express.json());



app.get('/', eAdmin, async (req, res) => {
    await User.findAll({
        attributes: ['id', 'name', 'email'],
        order: [['id', "DESC"]]
    })
    .then((users) => {
        return res.json({
            erro: false,
            users,
            id_usuario_logado: req.userId
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Nenhum usuário encontrado!"
        });
    });    
});

app.post('/cadastrar', async (req, res) => {
    var dados = req.body;

    dados.password = await bcrypt.hash(dados.password, 8);

    await User.create(dados)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Usuário cadastrado com sucesso!"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: nenhum usuario cadastrado!"
        });
    });    
});

app.post('/login', async (req, res) => {

    const user = await User.findOne({
        attributes: ['id', 'name', 'email', 'password'],
        where: {
            email: req.body.email
        }
    });

    if(user === null){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta! Nenhum usuário com este e-mail"
        });
    }

    if(!(await bcrypt.compare(req.body.password, user.password))){
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Usuário ou a senha incorreta! Senha incorreta!"
        });
    }

    var token = jwt.sign({id: user.id}, "D62ST92Y7A6V7K5C6W9ZU6W8KS3", {
       
        expiresIn: '7d' // 7 dia
    });

    return res.json({
        erro: false,
        mensagem: "Login realizado com sucesso!",
        token
    });
});

app.listen(8000, () => {
    console.log("Servidor rodando na porta 8000: http://localhost:8000");
});