let express = require("express");
let bodyParser = require("body-parser");
let app = express();

// Para dar parse de html usando o express
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');''

var friends = ["Tony", "Miranda", "John", "Lily"];

app.get('/', function(req,res) {
  res.render('home');
});

app.get('/friends', function(req,res) {
  res.render('friends', {friends: friends});
})/

// Post

app.post("/addfriend", function(req,res) {
  var novoAmigo = req.body.novoamigo;
  friends.push(novoAmigo);
  res.redirect("/friends");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Servidor iniciado");
});