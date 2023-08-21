const express = require('express');
const bodyParser = require('body-parser');
const usersDB = require('./public/data/users.json');
const DAO = require('../serpro-node-mysql/dao/DAO.js');

const app = express();
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
  console.log('req http get index.html');
});

app.get('/processar_dados', (req, res) => {
  res.send(`Bem vindo: ${req.query.nome}, sua idade é:  ${req.query.idade}.`);
});

app.post('/processar_dados', (req, res) => {
  response = {
    nome: req.body.nome,
    idade: req.body.idade,
  };
  res.end(JSON.stringify(response));

  console.log(req.body);
});

app.post('/login', (req, res) => {
  response = {
    username: req.body.username,
    password: req.body.password,
  };

  console.log(req.body);
  console.log(response);
  console.log(usersDB);

  let userFound = false;

  for (let i = 0; i < usersDB.users.length; i++) {
    if (usersDB.users[i].username == response.username && usersDB.users[i].password == response.password) {
      res.end(response.username + 'está logado!');
      isUser = true;
      break;
    }
  }
  if (!userFound) {
    console.log('Usuário ou senha inválido');
    res.end('Usuário ou senha inválido');
  }
});

app.listen(8080);
