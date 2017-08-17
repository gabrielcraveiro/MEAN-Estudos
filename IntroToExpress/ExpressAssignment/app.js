var express = require('express');
var app = express();


// Rotas

app.get('/', function(req, res) {
  res.send('Bem vindo!');
})

app.get('/speak/vaca', function(req, res) {
  res.send('A vaca faz mu!');
})
app.get('/speak/cachorro', function(req, res) {
  res.send('O cachorro faz au!');
})
app.get('/speak/porco', function(req, res) {
  res.send('O porco faz oink!');
})


// Rotas com Parametros

app.get('/repeat/:oi/:n', function(req, res) {
  var aux = '';
  var n = req.params.n;
  while (n > 0) {
    n--;
    aux += req.params.oi + ' ';
  }
  res.send(aux);
})



// Rotas 404

app.get('*', function(req, res) {
  res.send('Pagina não encontrada')
})


// Inicializar

app.listen(process.env.PORT, process.env.IP, function(){
  console.log("O server está inicializado");
})
