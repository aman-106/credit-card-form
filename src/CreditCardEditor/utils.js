import React from "react";
import { MenuItem } from "@material-ui/core";

export const commonProps = {
  variant: "outlined",
  InputLabelProps: {
    classes: { outlined: "label" }
  },
  classes: {
    root: "formcontrol"
  }
};

export const Spacer = function() {
  return <div />;
};

export const months = [
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
export const MonthsOptions = () => (
  <>
    {months.map(m => (
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    ))}
  </>
);
export const currentdate = new Date();

export const YearsList = () => {
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
