import React from "react";

const Input = ({ label, type, inputName }) => {
  return (
    <>
      <span>{label}</span>
      <input type={type} name={inputName} />
    </>
  );
};

export default Input;
