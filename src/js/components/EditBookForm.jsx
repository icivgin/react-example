var React = require('react');
var BookActions = require('../actions/BookActions');

var EditBookForm = React.createClass({
  getInitialState: function() {
    return {title: "", author: ""};
  },
  handleTitleChange: function(e) {
    this.setState({title: e.target.value});
  },
  handleAuthorChange: function(e) {
    this.setState({author: e.target.value});
  },
  submitUpdate: function(e) {
    e.preventDefault();
    console.log("Submitting edits!!!!!!!");
    BookActions.updateBook(this.state);
  },
  componentWillReceiveProps: function(nextProps) {
    console.log("recieving props!!!!!!!");
    console.log(nextProps.editingBook);
    this.setState(nextProps.editingBook);
  },
  render: function() {
    return (
      <form className="form-group" onSubmit={this.submitUpdate}>
        <label>Edit Book Form</label>
        <input className="form-control" value={ this.state.title } onChange={this.handleTitleChange} placeholder="Title" required/>
        <br />
        <input className="form-control" value={ this.state.author } onChange={this.handleAuthorChange} placeholder="Author" required />
        <br />
        <button className="btn btn-primary fullwidth" type="submit">Save Changes</button>
      </form>
    )
  }
});

module.exports = EditBookForm;