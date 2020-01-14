import React from "react";
import { useSpring, animated } from "react-spring";

const numberArray = Array(16).fill(0);
const emptyvalue = "*";
export default function CardNumber({ number = "" }) {
  const numberValue = number.split("");
  return (
    <div className="show-nums">
      {numberArray.map(function (n, index) {
        return (
          <>
            <div className="num" key={index}>
              {typeof numberValue[index] !== "undefined" ? (
                <DisplayNum num={numberValue[index]} />
              ) : (
                  emptyvalue
                )}
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

function DisplayNum({ num = 0 }) {
  const props = useSpring({
    value: num ? num : 0, config: {
      duration: 250,
    }
  });
  return (
    <div>
      <animated.div>{props.value.interpolate(x => Number(x).toFixed())}</animated.div>
    </div>
  );
}
