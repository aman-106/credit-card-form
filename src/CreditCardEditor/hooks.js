import { useState } from "react";
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
