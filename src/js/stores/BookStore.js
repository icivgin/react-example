var Flux = require('../flux/mcFly.js');

var _state = {
  books: [],
  editingBook: {}
}

function reloadBooks() {
  $.get('/books', function (allBooks) {
    _state.books = allBooks;
    _state.editingBook = {title: "", author: ""};
    console.log("reloading state");
    console.log(_state);
    BookStore.emitChange();
  });
}

function enableEditBook(book) {
  _state.editingBook = book;
  console.log("ENABLE EDIT");
  console.log(_state);
  BookStore.emitChange();
}

function addBook(book) {
  //Add Book
  console.log("ADDING BOOK ...")
  console.log(book);
  $.post('/books', book, function(book) {
    reloadBooks();
  });
}

function updateBook(book) {
  //Update Book
  console.log("UPDATE SLLDFKJSLDKFJSLEIFJSLIEJF");
  console.log(book);
  $.ajax({
    url: "/books/" + book._id,
    method: "PUT",
    data: book,
    success: function(err, data) {
      reloadBooks();
    }
  });
}

function deleteBook(id) {
  //Delete Book
  console.log("Deleting book with id: " + id);
  $.ajax({
    url: "/books/" + id,
    method: "DELETE",
    data: id,
    success: function(err, data) {
      reloadBooks();
    }
  });
}

var BookStore = Flux.createStore({
  getState: function(){
    return _state;
  },
  reloadBooks: reloadBooks,
  enableEditBook: enableEditBook,
}, function(payload){
  switch(payload.actionType) {
    case "ADD_BOOK":
      addBook(payload.book);
    break;
    case "UPDATE_BOOK":
      updateBook(payload.book);
    break;
    case "DELETE_BOOK":
      deleteBook(payload.id);
    break;
    default:
      return true;
  }

  return true;
});

module.exports = BookStore;