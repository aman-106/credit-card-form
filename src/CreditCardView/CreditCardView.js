import React from "react";
import FrontSideView from "./FrontSideView";
import BackSideView from "./BackSideView";
import {
  useCardViewSelector,
  side
} from "../CreditCardEditor/CardViewSelector";
import { useTransition, animated, config } from "react-spring";
import "./styles.scss";

export default function CreditCardView(props) {
  return (
    <div className="credit-card-section">
      <ViewTransition />
    </div>
  );
}

const viewsList = {
  [side.front]: {
    id: side.front,
    component: FrontSideView
  },
  [side.back]: {
    id: side.back,
    component: BackSideView
  }
};

function ViewTransition() {
  const [cardSide] = useCardViewSelector();
  const transition = useTransition(viewsList[cardSide], item => item.id, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.molasses
  });

  // const frontside = cardSide === side.front;

  return (
    <div className="transtion">
      {transition.map(({ item, key, props }) => {
        return <item.component key={key} styleProps={props} />;
      })}
    </div>
  );
}

// return frontside ? (
//   <FrontSideView styleProps={props} />
// ) : (
//   <BackSideView styleProps={props} />
// );
// function Some({ frontside }) {
//   return frontside ? <FrontSideView /> : <BackSideView />;
// }
// return (
//   <animated.div style={props}>
//     <Some frontside={frontside} />
//   </animated.div>
// );
