var React = require('react');
var BookActions = require('../actions/BookActions');

var NewBookForm = React.createClass({
  getInitialState: function() {
    return {
              title: "",
              author: ""
           }
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  addBook: function(e) {
    e.preventDefault();
    console.log("ADD BOOK CALLED");
    BookActions.addBook(this.state);
  },
  render: function() {
    return (
      <form className="form-group" onSubmit={this.addBook}>
        <label>New Book Form</label>
        <input className="form-control" value={this.title} onChange={this.handleTitleChange} placeholder="Title" required />
        <br />
        <input className="form-control" value={this.author} onChange={this.handleAuthorChange} placeholder="Author" required />
        <br />
        <button className="btn btn-primary fullwidth" type="submit">Add Book</button>
        <br />
        <br />
      </form>
    )
  }
});

module.exports = NewBookForm;