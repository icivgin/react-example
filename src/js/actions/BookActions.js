var Flux = require('../flux/mcFly');

var BookActions = Flux.createActions({
  addBook: function(book) {
    return {
      actionType: "ADD_BOOK",
      book: book
    }
  },
  updateBook: function(book) {
    return {
      actionType: "UPDATE_BOOK",
      book: book
    }
  },
  deleteBook: function(id) {
    return {
      actionType: "DELETE_BOOK",
      id: id
    }
  }
});

module.exports = BookActions;