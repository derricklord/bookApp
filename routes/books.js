var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Book = require('../models/books');
var Author = require('../models/authors');



//Show all Books
router.all('*', requireAuthentication)
.get('/', function(req, res){
  var allBooks = [];
  var allAuthors = [];
	Book.find(function(err, books){
		allBooks = books;
    //console.log(allBooks);
    Author.find(function(err, authors){
      allAuthors = authors;
      //console.log(allAuthors);
      res.send({books: allBooks, authors: allAuthors})
    });
	});
  //res.send({books: allBooks});
}).get('/:id', function(req, res) {
  Book.findById(req.params.id, function(err, book) {
    res.send({ book: book });
  });
}).post('/', function(req, res) {
  var book = new Book(req.body);
  book.save(function(err) {
    res.send({ book: book });
  });

}).put('/:id', function(req, res) {
  Book.findByIdAndUpdate(req.params.id, req.body, function(err, book) {
    res.send({ book: req.body });
  });
}).delete('/:id', function(req, res) {
  Book.findById(req.params.id).remove(function(err) {
    res.sendStatus(200);
  });
});



module.exports = router;

function requireAuthentication(req, res, next){
  if(req.headers.token === 'Secret'){
    //console.log(req.headers.token);
    next();
  }else{
    next();
    /*
    if(!req.headers.token){
      res.send({'Message': 'Must specify a token'});
    }else{
      res.send({'Message': 'Wrong Token: Must be Authenticated'});
    } 
    */
  }
}