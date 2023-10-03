import React from "react";

const ColorName = ({ colorValue, hexValue, isDarkText }) => {
  return (
    <section
      className="square"
      style={{
        backgroundColor: colorValue,
        color: isDarkText ? "black" : "white",
      }}
    >
      <p>{colorValue ? colorValue : "Empty Value"}</p>
      <p>{hexValue ? hexValue : null}</p>
    </section>
  );
};

ColorName.defaultProps = {
  colorValue: "Empty Color Value",
};

export default ColorName;
