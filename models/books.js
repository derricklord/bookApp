var mongoose = require('mongoose');

//mongoose.connect('localhost/bookSchema');

var bookSchema = new mongoose.Schema({
  isbn:  String,
  title: String,
  author: String,
  genre: String,
  img: String,
  year: Number
});

module.exports = mongoose.model('Book', bookSchema);

