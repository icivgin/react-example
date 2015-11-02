var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
  title: String,
  author: String,
});

var Book = mongoose.model('Book', BookSchema);

app.set('port', 3000);

mongoose.connect('mongodb://localhost/book-react-test');

app.use('/', express.static(path.join(__dirname, 'dist')));
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.get('/books', function (req, res) {
  Book.find({}, function (err, foundBooks) {
    res.json(foundBooks);
  });
});

app.post('/books', function (req, res) {
  var newBook = new Book;
  newBook.title = req.body.title;
  newBook.author = req.body.author;

  newBook.save(function (err, savedBook) {
    res.json(savedBook);
  });
});

app.put('/books/:id', function (req, res) {
  var targetId = req.params.id;
  var updatedBook = req.body;

  Book.findOneAndUpdate({_id: targetId}, updatedBook, function (err, updatedBook) {
    if(!err) {
      res.send(updatedBook);
    }
  });
});

app.delete('/books/:id', function (req, res) {
  var targetId = req.params.id;

  Book.findOneAndRemove({_id: targetId}, function (err, removedBook) {
    if (!err) {
      res.send(removedBook);
    }
  });
});

app.listen(app.get('port'), function() {
  console.log("Server running on port 3000 ...")
});