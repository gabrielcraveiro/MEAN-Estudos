let express = require("express");
let app = express();

app.set('view engine', 'ejs');

app.get('/', function(req,res) {
  res.render('home');
});

app.get('/friends', function(req,res) {
  var friends = ["Tony", "Miranda", "John", "Lily"];
  res.render('friends', {friends: friends});
})/

// Post

app.post("/addfriend", function(req,res) {
  res.send("VOCE CHEGOU NA PAGINA DE POST");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Servidor iniciado");
});