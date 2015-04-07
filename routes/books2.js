var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/books');



//Show all Books
router.get('/', function(req, res){
	Book.find(function(err, books){
		res.send(books);
	});
});

// Find book by id.
router.get('/:id', function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    res.send({ book: book });
  });
});

//Create a Book
router.post('/', function(req, res) {
  var book = new Book(req.body);
  book.save(function(err) {
    res.send({ book: book });
  });

});

// Update book by id.
router.put('/:id', function(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
    res.send({ book: req.body });
  });
});

// Delete book by id.
router.delete('/:id', function(req, res) {
  Book.findById(req.params.id).remove(function(err) {
    res.sendStatus(200);
  });
});



module.exports = router;