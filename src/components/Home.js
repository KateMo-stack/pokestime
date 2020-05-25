import React, { Component } from "react";
// Axios jest biblioteką stworzoną na potrzeby komunikacji z API
import axios from "axios";
import { Link } from "react-router-dom";
import pokeball from "../pokeball.png";
import AddPost from "./AddPost.js";

// funkcjonalny komponent, bo nie używamy stanów

class Home extends Component {
  state = {
    posts: [],
  };
  //tu używamy Axios, żeby "złapać" dane, zapytania
  //componentDidMount() to metoda w której możemy wywołać setState() metod, metoda z cyklu życia komponentu!!! Poczytaj gdy komponent się zamontuje, wyświetla
  componentDidMount() {
    //axios działa asynchronicznie, wysyła 'promise', że dana czynność zostanie wykonanana niebawem w przyszłości.zapytanie GET
    axios
      .get("https://jsonplaceholder.typicode.com/posts") //pobrać get
      //poniższy kod wykona się dopiero wtedy, gdy kod z axios będzie już wykonany. Wykorzystuje resonse obiekt jako parametr
      .then((res) => {
        console.log(res);
        this.setState({
          posts: res.data.slice(0, 10),
        });
      });
    // obsługa błędu zrób to axios error a\hadling example konsola
  }
  // metody dodawaj
  removePost(id) {
    //tworze zmienną title,  pobieram z tablicy posta z id, na koniec set state od mesage ustaw na tytuł
    const filteredPost = this.state.posts.filter((kalafior) => {
      return kalafior.id === id;
    });

    const title = filteredPost[0].title;

    // filtrujemy "stare" stany, szczypiorek = line newBuyItems
    const szczypiorek = this.state.posts.filter((marchewka) => {
      //porównujemy item, który został pofiltrowany z itemem, który chcemy usunąć
      return marchewka.id !== id;
    });

    // console.log('remove' + id)
    // console.log(filteredPost[0].title)
    // console.log(typeof(filteredPost));

    this.setState({
      // robimy kopię starej tablicy posts
      posts: [...szczypiorek],
    });
    this.setState({
      message: `You have just remove the post`,
      messageTitle: `${title}`,
    });
    //after removing all items, all posts:
    if (szczypiorek.length === 0) {
      this.setState({
        message: "You have removed all the posts. No posts on your list",
      });
    }
  }

  //addpost to moja dowlna nazwa?
  addPost = (addpost) => {
    addpost.id = Math.floor(Math.random() * 100);
    let bigos = [...this.state.posts, addpost];
    this.setState({
      posts: bigos,
      // docelowo było message:''
      message: "You have added a new post. Gratulation!",
    });
  };

  //render używamy, żeby zupdatować dane, deskruktuzyzacja
  render() {
    // grabbing the posts property from the state
    const { posts } = this.state; // chce wyciągnąc posts ze stanów
    const postList = posts.length ? (
      posts.map((mydelko) => {
        return (
          //dla każdego elementu w tablicy posts zwróć to co poniżej, 1n element nadrzędny
          // konsola patrz dlaczego mydelko.id Components i state znajdz
          <div className="post card" key={mydelko.id}>
            <img src={pokeball} alt="A pokeball" />
            <div className="card-content">
              <div className="right">
                <button
                  onClick={(e) => this.removePost(mydelko.id)}
                  id="checkmark"
                >
                  <span className="left-line"></span>
                  <span className="right-line"></span>
                </button>
              </div>
              <Link to={"/" + mydelko.id}>
                <span className="card-title">{mydelko.title}</span>
              </Link>
              <p>{mydelko.body}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center">No posts yet</div>
      // np /23 strona 404
    );

    return (
      <div className="container home">
        <h4 className="center">Home</h4>
        <table>
          <tr>
            <th className="info center ">Information about posts:</th>
          </tr>
          <tr>
            <td>
              <p className="message left">Message: {this.state.message}</p>
              <p className="message-title left">{this.state.messageTitle}</p>
            </td>
          </tr>
        </table>
        <AddPost nowanazwa={this.addPost} />
        {postList}
      </div>
    );
  }
}

export default Home;
