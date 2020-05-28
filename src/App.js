import React, { Component } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";
import AddPost from "./components/AddPost";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            {/* Switch zapobiega precedensom, na raz można wykorzystać tylko jeden adres url */}
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            {/* Update later: dodanie nowego Route'a */}
            <Route exact path="/:post_id" component={Post} />
          </Switch>
        </div>
        {/* <AddPost nowanazwa={this.addPost}/> */}
      </BrowserRouter>
    );
  }
}

export default App;
