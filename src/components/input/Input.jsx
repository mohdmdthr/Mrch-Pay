import React from "react";
import "./input.css";

const Input = ({ children, inputType = "text", className, placeholder }) => {
  return (
    <input type={inputType} className={className} placeholder={placeholder}>
      {children}
    </input>
  );
};

export default Input;
