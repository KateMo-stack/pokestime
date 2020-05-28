import React, { Component } from "react";

class AddPost extends Component {
  state = {
    content: "",
  };
  handleBodyChange = (e) => {
    this.setState({
      body: e.target.value,
    });
  };

  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };
  // wyzerowanie inputów po wpisaniu
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(this.state);
    this.props.nowanazwa(this.state);
    this.setState({
      title: "",
      body: "",
    });
  };
  render() {
    return (
      <div>
        <form className="center container" onSubmit={this.handleSubmit}>
          <p className="center adding">Adding new post:</p>
          <label for="input-title">Title: </label>
          <input
            type="text"
            onChange={this.handleTitleChange}
            value={this.state.title}
            id="input-title"
          ></input>
          <label for="input-body">Body: </label>
          <input
            type="text"
            onChange={this.handleBodyChange}
            value={this.state.body}
            id="input-body"
          ></input>
          <button type="submit" value="Submit" id="submit">
            Submit new post
          </button>
        </form>
      </div>
    );
  }
}

export default AddPost;
// gdzie powinnam wkleić <AddPost nowanazwa={this.addPost} ??? żeby było widoczne
