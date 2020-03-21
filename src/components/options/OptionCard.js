import React from "react";
import "./option-card.css";

const OptionCard = props => {
  /* 
optionCard is uses to generate a component for options.

It has title props (for option title), icon and onClick for the handler


*/
  return (
    <div className = "optionCard" onClick={props.onClick}>
      <img className = "optionIcon" src={props.src} alt={props.alt} />
      <p>{props.title}</p>
    </div>
  );
};

export default OptionCard;
