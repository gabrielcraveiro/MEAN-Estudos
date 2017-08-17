var express = require('express');
var app = express();

// Routes

app.get('/dog/:name', function (req, res) {
  var dogParam = req.params.name;
  res.render("home.ejs", {dogName: dogParam});
  // res.send('<h1>Bem vindo ao H1</h1>');
})

app.listen(process.env.PORT, process.env.IP, function () {
  console.log("Servidor funcionando");
})