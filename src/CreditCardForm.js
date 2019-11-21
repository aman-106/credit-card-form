import React from "react";
import CreditCardView from "./CreditCardView";
import CreditCardEditor from "./CreditCardEditor";

export default function CreditCardForm(props) {
  return (
    <div>
      <CreditCardView />
      <CreditCardEditor />
    </div>
  );
}
