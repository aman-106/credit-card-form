import React, { useEffect } from "react";
import { TextField, Paper } from "@material-ui/core";
import { commonProps, MonthsOptions, YearsList, Spacer } from "./utils";
import "./styles.scss";
import { useCreditForm } from "./hooks";

export default function CreditCardForm(props) {
  let [formState, handleChange] = useCreditForm();

  return (
    <Paper classes={{ root: "card" }}>
      <div className="section1">
        <TextField
          label={"card number"}
          {...commonProps}
          onChange={handleChange("number")}
          value={formState.number}
        />
        <TextField
          label={"card name"}
          {...commonProps}
          onChange={handleChange("name")}
          value={formState.name}
        />
      </div>
      <div className="section2">
        <TextField
          select
          label={"month"}
          {...commonProps}
          onChange={handleChange("expiryMM")}
          value={formState.expiryMM}
        >
          <MonthsOptions />
        </TextField>
        <TextField
          select
          label={"year"}
          {...commonProps}
          onChange={handleChange("expiryYY")}
          value={formState.expiryYY}
        >
          <YearsList />
        </TextField>
        <Spacer />
        <TextField
          label={"cvv/cvc"}
          {...commonProps}
          onChange={handleChange("cvv")}
          value={formState.cvc}
        />
      </div>
    </Paper>
  );
}
