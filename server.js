const express = require('express')
const bodyParser = require('body-parser')

const app = express();
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended:false}));


app.get("/", (req, res) => {

    res.sendFile(__dirname + "/public/index.html");
    console.log("req http get index.html");

});

app.get("/processar_dados", (req, res) => {
    res.send(`Bem vindo: ${req.query.nome}, sua idade é:  ${req.query.idade}.`);
});

app.post("/processar_dados", (req, res) => {
    response = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    res.end(JSON.stringify(response))

    console.log(req.body)
});

app.post("/login", (req, res) => {
    response = {
        nome: req.body.nome,
        idade: req.body.idade
    }
    res.end(JSON.stringify(response))

    console.log(req.body)
});



app.listen(8080);

