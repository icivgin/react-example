var React = require('react');
var BookList = require('./BookList.jsx');
var NewBookForm = require('./NewBookForm.jsx');
var EditBookForm = require('./EditBookForm.jsx');
var BookStore = require('../stores/BookStore.js');

var LibraryApp = React.createClass({
  mixins: [BookStore.mixin],
  getInitialState: function() {
    console.log("Setting initial Library state");
    return BookStore.getState();
  },
  storeDidChange: function() {
    this.setState(BookStore.getState());
  },
  render: function() {
    console.log("Re rendering Library panel ...");
    console.log(this.state);
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-md-offset-1">
            <h3>Library Actions</h3>
            <br />
            <NewBookForm />
            <EditBookForm editingBook={this.state.editingBook} />
          </div>
          <div className="col-md-6">
            <BookList books={this.state.books} />
          </div>
        </div>
      </div>
    )
  },
  componentDidMount: function() {
    if (this.isMounted()) {
      BookStore.reloadBooks();
    }
  }
});

module.exports = LibraryApp;