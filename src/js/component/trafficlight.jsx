

import React, { useState } from "react";
import ReactDOM from "react-dom";
export const Trafficlight = () => {
  const [selectedColor, setSelectedColor] = useState("none");
  const handleLightClick = (color) => {
    setSelectedColor(color);
  };
  return (
    <div>
      <div className="trafficTop"></div>
      <div className="container card">
        <div
          onClick={() => handleLightClick("red")}
          className={"light red" + (selectedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => handleLightClick("yellow")}
          className={
            "light yellow" + (selectedColor === "yellow" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => handleLightClick("green")}
          className={
            "light green" + (selectedColor === "green" ? " glow" : "")
          }
        ></div>
      </div>
    </div>
  );
};
export default Trafficlight;