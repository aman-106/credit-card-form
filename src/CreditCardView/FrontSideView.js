import React from "react";
import { useCardInfo } from "../CreditCardEditor/CardInfoContext";
import { animated } from "react-spring";
import CardNumber from "./CardNumber";

const noneMM = "--";
const noneYY = "--";
const emptyName = "customer name";

export default function FrontSideView({ styleProps }) {
  const [cardInfo] = useCardInfo();
  console.log("cardInfo", cardInfo);
  const { number, name, expiryMM, expiryYY } = cardInfo;
  return (
    <animated.div className="holder" style={styleProps}>
      <div className="front-side">
        <div className="logo"></div>
        <div className="card-num">
          <CardNumber number={number} />
        </div>
        <div className="vaild-info">
          <div>Valid Thr</div>
          <div>{`${expiryMM ? expiryMM : noneMM}/${
            expiryYY ? expiryYY : noneYY
          }`}</div>
        </div>
        <div className="name">{name ? name : emptyName}</div>
      </div>
    </animated.div>
  );
}
