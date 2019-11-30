import React from "react";
import { MenuItem } from "@material-ui/core";
import { defaultGetter } from "./hooks";
import * as R from "ramda";

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

export const currentdate = new Date();

export const getYearsList = () => {
  const currentYear = currentdate.getFullYear();
  const list = [];
  for (let m = currentYear - 5; m <= currentYear + 5; m++) {
    list.push(
      <MenuItem key={m} value={m}>
        {m}
      </MenuItem>
    );
  }
  return list;
};

export function isNumber(input = "") {
  const num = RegExp(/^\d+$/);
  if (input) {
    return num.test(input);
  }
  return false;
}

export function isAlpha(input = "") {
  const num = RegExp(/^[a-zA-Z]+$/);
  if (input) {
    return num.test(input);
  }
  return false;
}

const strLenInRange = R.curryN(3, function strLenInRange(
  min = 0,
  max,
  str = ""
) {
  return str.length <= max && str.length >= min;
});

const checker = R.curry(function checker(max, validor, value) {
  return R.both(strLenInRange(0, max), R.either(validor, R.isEmpty))(value);
});

export const inputChecker = R.curry(function inputChecker(
  max,
  validator,
  handler,
  event
) {
  return (event = R.when(
    R.compose(
      checker(max, validator),
      defaultGetter
    ),
    handler
  )(event));
});

// export function allowOnlyNumber(handler) {
//   return function(event) {
//     const value = defaultGetter(event);
//     console.log(isNumber(value));
//     if (isNumber(value) || value === "") {
//       handler(event);
//     }
//   };
// }
