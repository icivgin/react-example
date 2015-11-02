var React = require('react'),
    BookItem = require('./BookItem.jsx');

var BookList = React.createClass({
  render: function() {
    return (
      <div>
        <h3>Book List</h3>
        <br />
        { this.props.books.map(function(book, index){
          return (
            <BookItem key={index} book={book} />
          );
        })}
      </div>
    )
  }
});

module.exports = BookList;