import React, { useState, useEffect } from "react";
// importuję react-modal
import Modal from "react-modal";
import axios from "axios";

// funkcjonalny komponent, bo nie używamy stanów

Modal.setAppElement("#root");

// W klasowym komponencie to działało, trzeba zamienić na funkcyjny, ze względu na hooki
// componentDidMount() {
//   axios
//     .get("https://type.fit/api/quotes") //pobrać get
//     .then((res) => {
//       console.log(res);
//       this.setState({
//         quotes: res.data.Math.random(),
//       });
//     });
// }

// const Contact= ()=> czy function Contact(){}  powinno być?
const Contact = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [quote, setQuote] = useState(["aaa"]);
  const [quoteAuthor, setQuoteAuthor] = useState(["xxxx"]);
  // const quoteArray = [];

  // async function modalAxios() {
  //   axios.get("https://type.fit/api/quotes").then((res) => {
  //     console.log(res.data);
  //     setModalIsOpen(res.data.Math.random());
  //     console.log(modalIsOpen);
  //   });
  // }

  // useEffect wykorzytujemy w Hooks

  async function fetchData() {
    const res = await fetch("https://type.fit/api/quotes");
    console.log(res);

    // const todoList = todos.length
    res.json().then((res) => {
      const randomNumber = Math.floor(Math.random() * res.length);
      console.log(res[randomNumber].text);
      console.log(res[randomNumber].author);

      console.log(randomNumber);
      setQuote(res[randomNumber].text);
      setQuoteAuthor(res[randomNumber].author);
      console.log(quoteAuthor);
      console.log(res[randomNumber].author);
      // setModalIsOpen(res);
    });
    console.log(typeof res);
  }

  // function randomize(myArray) {
  //   const myArray = [1 - 50];
  //   randint = Math.floor(Math.random() * myArray.length);
  //   return randint;
  //   console.log(myArray);
  // }
  // na początek
  useEffect(() => {
    fetchData();
  }, []);

  //   useEffect(async () => {
  //   const result = await axios("https://type.fit/api/quotes");
  //   setData(result.data);
  // });

  // {
  //   modalIsOpen.map((data) => console.log(data.result)); //check the console and you will get data.
  // }

  // tu się gubię
  // useEffect(async () => {
  //   const result = await axios("https://type.fit/api/quotes");
  //   setData(result.data);
  // });

  return (
    <div className="container center">
      <h4 className="center">Contact</h4>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.{" "}
      </p>
      {/* dodaję Modal */}
      <button id="quoteButtonOpen" onClick={() => setModalIsOpen(true)}>
        Check quote
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={{
          overlay: {
            backgroundColor: "grey",
          },
          content: {
            color: "orange",
          },
        }}
      >
        <h1>Quote of the day:</h1>
        {/* <p>{JSON.stringify(modalIsOpen)}helloł</p> */}
        <p>{quote} </p>
        <p>{quoteAuthor}</p>
        {/* <p>fetchData()</p> */}
        <div>
          <button id="quoteButtonClose" onClick={() => setModalIsOpen(false)}>
            Close
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Contact;
