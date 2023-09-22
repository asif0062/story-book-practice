import React from "react";

const Button = ({ label, backgroundColor = "red", color = "black", size = "md", handleClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.5;
  if (size === "lg") scale = 2;

  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1}rem`,
    border: "2px solid black",
    borderRadius: "25px",
    color,
  };
  return (
    <button onClick={handleClick} style={style}>
      {label}
    </button>
  );
};

export default Button;
