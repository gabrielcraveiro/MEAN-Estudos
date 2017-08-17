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
app.get('/dogo', function(req, res) {
  res.send('Woof')
});

// Usando parâmetros
app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!"); 
});

app.get("/r/:subredditName/comments/:id/:title/", function(req, res){
    console.log(req.params);
    res.send("WELCOME TO THE COMMENTS PAGE!"); 
});

// '*' -> '404!'
app.get('*', function(req, res) {
  res.send('404 not found')
});

// Dizer pro express para ele ouvir diferentes requests (começar o server)
app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Server está inicializado!");
})

