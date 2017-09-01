var mongoose = require('mongoose');

// conectar a db
mongoose.connect('mongodb://localhost/cat_app');

var catSchema = new mongoose.Schema({
  name: String,
  age: Number,
  temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

//add gato para a db

// var george = new Cat({
//   name: "Abelino",
//   age: 8,
//   temperament: 'Vilão'
// });
/*
george.save(function(err, cat){
  if (err) {
    console.log("Erroerro");
  } else {
    console.log("Gato add com sucesso")
    console.log(cat);
  }
})
*/
//pegar gatos da db

Cat.find({}, function(err, cats) {
  if (err) {
    console.log(err);
  } else {
    console.log(cats);
  }
})