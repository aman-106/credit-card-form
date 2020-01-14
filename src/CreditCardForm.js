import React from "react";
import CreditCardView from "./CreditCardView";
import CreditCardEditor from "./CreditCardEditor";
import { ProviderCardInfo } from "./CreditCardEditor/CardInfoContext";
import { ProviderCardViewselctor } from "./CreditCardEditor/CardViewSelector";
import "./CreditCardForm.scss";

export default function CreditCardForm(props) {
  return (
    <div className="credit-card-form">
      <ProviderCardInfo>
        <ProviderCardViewselctor>
          <CreditCardView />
          <CreditCardEditor />
        </ProviderCardViewselctor>
      </ProviderCardInfo>
    </div>
  );
}
