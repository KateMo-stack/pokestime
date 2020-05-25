import React, { Component } from "react";
import axios from "axios";

class Post extends Component {
  state = {
    // id: null
    // property called post
    krowa: null,
  };
  componentDidMount() {
    console.log(this.props);
    //zmienna przechowuje info o numerze id, mamy extra route information o props object
    // zostaje przechwycone id z url
    let id = this.props.match.params.post_id;
    axios
      .get("https://jsonplaceholder.typicode.com/posts/" + id)
      .then((res) => {
        this.setState({
          krowa: res.data,
        });
        //  console.log(res)
      });
    // this.setState({
    //     id: id
    // })
  }
  render() {
    //if we have a post in a state
    const post = this.state.krowa ? (
      <div className="elo">
        <h4 className="center">{this.state.krowa.title}</h4>
        <p>Jestem po kliknięciu we wpis!</p>
        <p>{this.state.krowa.body}</p>
      </div>
    ) : (
      <div className="center">Loading post...</div>
    );
    return <div className="container">{post}</div>;
  }
}

export default Post;
