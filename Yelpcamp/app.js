var express = require("express");
var app = express();
var bodyParser = require('body-parser');

  var acampamentos = [
    {name: 'Vila do Salmão', image: 'https://farm6.staticflickr.com/5181/5641024448_04fefbb64d.jpg'},
    {name: 'Acampa Mentos', image: 'https://farm5.staticflickr.com/4137/4812576807_8ba9255f38.jpg'},
    {name: 'Vacas & Patinhos', image: 'https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg'}
  ];
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('landing');
})

app.get('/acampamentos', function(req, res) {
  
  res.render('acampamentos', {acampamentos: acampamentos});
})

app.post('/acampamentos', function(req, res){
  var name = req.body.name;
  var image = req.body.image;
  var novoAcamp = {name: name, image: image};
  acampamentos.push(novoAcamp);
  // get data from form and add to campgrounds array
  // redirect back to campgrounds page
  res.redirect('acampamentos');
});

app.get('/acampamentos/new', function(req, res){
  res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Aplicativo iniciado");
}) 