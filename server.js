var http = require('http');
var generalUtils = require('./utils/generalUtils');


http.createServer((req, res) => {

    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("<h1>Aula inicial Node.js</h1>")
    res.write("<p>" +generalUtils.getDataHora()+"</p>")

    res.end()

}).listen(8080);


