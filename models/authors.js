var mongoose = require('mongoose');

//mongoose.connect('localhost/bookSchema');

var authorSchema = new mongoose.Schema({
  firstname:  String,
  lastname: String,
  publisher: String,
  age: Number
});

module.exports = mongoose.model('Author', authorSchema);