import React, { useContext, useState } from "react";

const CardInfoContext = React.createContext();

export function useCardInfo() {
  return useContext(CardInfoContext);
}

export const defaultState = {
  number: "",
  name: "",
  expiryMM: "",
  expiryYY: "",
  cvv: ""
};

export function defaultGetter(event) {
  return event.target.value;
}

// function useCreditForm(defaultState) {
//   const [cardinfo, setCardInfo] = useState(defaultState);
//   return [cardinfo, setCardInfo];
// }

export function useCreditForm(state = defaultState) {
  const [formState, setFormState] = useState(state);
  function handleChange(fieldName, getter = defaultGetter) {
    return function(value) {
      value = getter(value);
      setFormState({ ...formState, [fieldName]: value });
    };
  }
  return [formState, handleChange];
}

export function ProviderCardInfo({ children }) {
  const saveCardInfo = useCreditForm();
  return (
    <CardInfoContext.Provider value={saveCardInfo}>
      {children}
    </CardInfoContext.Provider>
  );
}
