import React, { useContext, useState, useCallback } from "react";
const CardViewSelector = React.createContext();

export function useCardViewSelector() {
  return useContext(CardViewSelector);
}

export const side = {
  front: "front",
  back: "back"
};

export function useSetCardView() {
  const [cardSide, setCardSide] = useState(side.back);
  const handleCardSide = useCallback(function(view) {
    switch (view) {
      case side.front:
        setCardSide(side.front);
        break;
      case side.back:
        setCardSide(side.back);
        break;
      default:
        setCardSide(side.front);
        break;
    }
  });
  return [cardSide, handleCardSide];
}

export function ProviderCardViewselctor({ children }) {
  return (
    <CardViewSelector.Provider value={useSetCardView()}>
      {children}
    </CardViewSelector.Provider>
  );
}
