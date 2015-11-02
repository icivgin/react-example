var React = require('react');
var BookActions = require('../actions/BookActions');
var BookStore = require('../stores/BookStore');

var BookItem = React.createClass({
  enableEdit: function() {
    BookStore.enableEditBook(this.props.book);
  },
  deleteBook: function(e) {
    BookActions.deleteBook(e.target.value);
  },
  render: function() {
    return (
      <div className="row">
        <div className="col-md-6">
          <h4>Title: {this.props.book.title}</h4>
          <p>Author: {this.props.book.author}</p>
        </div>
        <div className="col-md-6">
          <button className="btn btn-warning fullwidth" value={this.props.book._id} onClick={this.enableEdit}>Edit this book</button>
          <br />
          <button className="btn btn-danger fullwidth" value={this.props.book._id} onClick={this.deleteBook}>Delete this book</button>
          <br />
          <br />
        </div>
      </div>
    )
  }
});

module.exports = BookItem;