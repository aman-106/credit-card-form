import React from "react";
import { useCardInfo } from "../CreditCardEditor/CardInfoContext";
import { animated } from "react-spring";

const noneCVC = "- - -";

export default function BackSideView({ styleProps }) {
  const [cardInfo] = useCardInfo();
  const { cvv } = cardInfo;
  return (
    <animated.div className="holder" style={styleProps}>
      <div className="back-side">
        <div className="spacer"></div>
        <div className="strip"></div>
        <div className="cvc-form">
          <div className="cvc">
            <CvvNums cvv={cvv} />
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    </animated.div>
  );
}

const CVV_NUM = Array(3).fill(0);
const defaultNum = "-";
function CvvNums({ cvv = "" }) {
  const cvvArray = cvv.split("");
  return (
    <div className="cvv-nums">
      {CVV_NUM.map(function(num, i) {
        return <div className="num">{cvvArray[i] || defaultNum}</div>;
      })}
    </div>
  );
}
