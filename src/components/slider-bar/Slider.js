import React from "react";

import { withStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import OptionCard from "../options/OptionCard";

import "./slider.css";

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 10
  },
  thumb: {
    height: 27,
    width: 27,
    backgroundColor: "#3f51b5",
    border: "2px solid #3f51b5",
    marginTop: -8,
    marginLeft: -12,
    "&:focus,&:hover,&$active": {
      boxShadow: "0px 0px 0px 9px rgba(63, 81, 181, 0.16)"
    }
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)"
  },
  track: {
    height: 10,

    backgroundImage:
      "linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)"
  },
  rail: {
    height: 10,

    backgroundImage:
      "linear-gradient(to right, #3ab5b0 0%, #3d99be 31%, #56317a 100%)"
  }
})(Slider);
const valueSlider = props => {
  return (
    <div className="sliderOuter">
      <h2 className="sliderTitle">{props.title}</h2>
      <div className="slider-container">
        <PrettoSlider
          aria-label="pretto slider"
          defaultValue={2}
          max={props.max}
          value={props.value}
          min={0}
          onChange={props.onChange}
          step={props.step}
        />

        <div className="nextCard" onClick={props.onClick}>
          <img className="nextIcon" src={props.src} alt={props.alt} />
          <p>{props.optionTitle}</p>
        </div>
      </div>
      <div />
    </div>
  );
};
export default valueSlider;
