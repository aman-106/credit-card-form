import React from "react";
import { TextField, Paper, MenuItem } from "@material-ui/core";
import "./styles.scss";

const commonProps = {
  variant: "outlined",
  InputLabelProps: {
    classes: { outlined: "label" }
  },
  classes: {
    root: "formcontrol"
  }
};

const Spacer = function() {
  return <div />;
};

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];
const MonthsOptions = () => (
  <>
    {months.map(m => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ))}
  </>
);
const currentdate = new Date();

const YearsList = () => {
  const currentYear = currentdate.getFullYear();
  const list = [];
  for (let m = currentYear - 5; m <= currentYear + 5; m++) {
    list.push(
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    );
  }
  return <>{list}</>;
};

export default function CreditCardForm(props) {
  return (
    <Paper classes={{ root: "card" }}>
      <div className="section1">
        <TextField label={"card number"} {...commonProps} />
        <TextField label={"card name"} {...commonProps} />
      </div>
      <div className="section2">
        <TextField select label={"month"} {...commonProps}>
          <MonthsOptions />
        </TextField>
        <TextField select label={"year"} {...commonProps}>
          <YearsList />
        </TextField>
        <Spacer />
        <TextField label={"cvv"} {...commonProps} />
      </div>
    </Paper>
  );
}
