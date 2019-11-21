import React from "react";
import ReactDOM from "react-dom";
import CreditCardForm from "./CreditCardForm";

import "./styles.css";

export function App() {
  return (
    <div className="App">
      <h1>Credit Card Form</h1>
      <CreditCardForm />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
