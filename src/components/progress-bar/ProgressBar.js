import React from "react";
import "./progress-bar.css"

const ProgressBar = props => {
  return (
    <div style ={{display:props.display}}>
      <h2 className="progressTitle">{props.progress}%</h2>
      <div className="barContainer">
        <span style={{width:props.width + "%"}}className="progressMeter"></span>
      </div>
      <br />
    </div>
  );
};
export default ProgressBar;
