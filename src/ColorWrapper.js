import React from "react";
import ColorItem from "./ColorItem";

function ColorWrapper({ colors, textColor }) {
  return (
    <div className="color-wrapper">
      {colors.map((color) => (
        <ColorItem color={color} key={color} textColor={textColor}/>
      ))}
    </div>
  );
}

export default ColorWrapper;
