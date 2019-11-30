import React from "react";
import CreditCardView from "./CreditCardView";
import CreditCardEditor from "./CreditCardEditor";
import { ProviderCardInfo } from "./CreditCardEditor/CardInfoContext";
import { ProviderCardViewselctor } from "./CreditCardEditor/CardViewSelector";
export default function CreditCardForm(props) {
  return (
    <div>
      <ProviderCardInfo>
        <ProviderCardViewselctor>
          <CreditCardView />
          <CreditCardEditor />
        </ProviderCardViewselctor>
      </ProviderCardInfo>
    </div>
  );
}
