import React, { useEffect } from "react";
import { TextField, Paper, MenuItem } from "@material-ui/core";
import {
  commonProps,
  months,
  getYearsList,
  Spacer,
  inputChecker,
  isNumber,
  isAlpha
} from "./utils";
import "./styles.scss";
import { useCardInfo } from "./CardInfoContext";
import { useCardViewSelector, side } from "./CardViewSelector";

export default function CreditCardForm(props) {
  const [formState, handleChange] = useCardInfo();
  const [cardSide, handleCardSide] = useCardViewSelector();
  console.log(cardSide);
  return (
    <Paper classes={{ root: "card" }} className="credit-card-editor">
      <div className="section1">
        <TextField
          label={"card number"}
          {...commonProps}
          onChange={inputChecker(16, isNumber, handleChange("number"))}
          value={formState.number}
          onFocus={() => handleCardSide(side.font)}
        />
        <TextField
          label={"card name"}
          {...commonProps}
          onChange={inputChecker(40, isAlpha, handleChange("name"))}
          value={formState.name}
          onFocus={() => handleCardSide(side.font)}
        />
      </div>
      <div className="section2">
        <TextField
          select
          label={"month"}
          {...commonProps}
          onChange={handleChange("expiryMM")}
          value={formState.expiryMM}
          InputProps={{ onFocus: () => handleCardSide(side.font) }}
        >
          {months.map(m => (
            <MenuItem key={m} value={m}>
              {m}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          label={"year"}
          {...commonProps}
          onChange={handleChange("expiryYY")}
          value={formState.expiryYY}
          InputProps={{ onFocus: () => handleCardSide(side.font) }}
        >
          {getYearsList()}
        </TextField>
        <Spacer />
        <TextField
          label={"cvv/cvc"}
          {...commonProps}
          onChange={inputChecker(3, isNumber, handleChange("cvv"))}
          value={formState.cvv}
          onFocus={() => handleCardSide(side.back)}
        />
      </div>
    </Paper>
  );
}
