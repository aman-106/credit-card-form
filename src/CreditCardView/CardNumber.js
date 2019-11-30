import React from "react";

const numberArray = Array(16).fill(0);
const emptyvalue = "*";
export default function CardNumber({ number = "" }) {
  const numberValue = number.split("");
  return (
    <div className="show-nums">
      {numberArray.map(function(n, index) {
        return (
          <>
            <div className="num" key={index}>
              {numberValue[index] ? numberValue[index] : emptyvalue}
            </div>
            {(index + 1) % 4 === 0 ? (
              <div className="num" key={`spacer-${index}`}></div>
            ) : (
              false
            )}
          </>
        );
      })}
    </div>
  );
}
