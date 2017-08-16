// Incluir express
var express = require("express");
// Guardar o express em uma var
var app = express();

// '/' -> 'Oi!'
app.get('/', function (req, res) {
  res.send("oie!");
});

// '/adios' -> 'Até mais!'

app.get('/adios', function(req, res) {
  res.send(':(')
});
// '/dogo' -> 'Woof!'


// Dizer pro express para ele ouvir diferentes requests (começar o server)

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server está inicializado!");
})

