// poczytaj: https://stackoverflow.com/questions/54096027/passing-props-to-modal-in-reactjs
// poczytaj: https://react-bootstrap.github.io/components/modal/
// poczytaj: https://dev.to/achowba/building-a-modal-in-react-15hg
// poczytaj: https://www.freecodecamp.org/news/how-to-render-modals-in-react-bbe9685e947e/
// fajne, poczytaj: https://stackoverflow.com/questions/43941504/creating-modal-component-with-separate-modal-trigger-button
// poczytaj, loader: https://react.semantic-ui.com/elements/loader/#types-loader
// Loader, poczytaj, fajne: https://reactjsexample.com/loading-spinners-for-react-built-with-styled-components/
// loader, poczytaj: https://reactjsexample.com/loading-spinners-for-react-built-with-styled-components/
import React, { useState, useEffect } from "react";
// importuję react-modal
import Modal from "react-modal";
// import Loader from "./Loader";

const MyModal = ({
  modalModalIsOpen,
  modelSetModalIsOpen,
  modalQuote,
  modalQuoteAuthor,
  modalChangeQuote,
  modalCount,
  modalSetCount,
  modalResetCounter,
}) => {
  return (
    <div className="ui active centered inline loader">
      <Modal
        isOpen={modalModalIsOpen}
        onRequestClose={() => {
          modelSetModalIsOpen(false);
        }}
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
        <p>{modalQuote}</p>
        <p>{modalQuoteAuthor}</p>
        {/* <p>fetchData()</p> */}
        <div>
          <button
            id="quoteButtonClose"
            onClick={() => modelSetModalIsOpen(false)}
          >
            Close with changing the quote
          </button>
          <button id="buttonChangeQuote" onClick={() => modalChangeQuote()}>
            Change quote
          </button>
          <p>Kliknięto {modalCount} razy</p>
          <button
            id="buttonClickedNumber"
            onClick={() => {
              modalSetCount(modalCount + 1);
            }}
          >
            Click me
          </button>
          <button
            id="buttonClickedNumberReset"
            onClick={() => {
              modalResetCounter();
            }}
          >
            Reset the counter
          </button>
        </div>
      </Modal>
    </div>
  );
};
export default MyModal;
