import React from "react";
import "./button.css";

const Button = ({ buttonType = "button", buttonText, className }) => {
  return (
    <button type={buttonType} className={`btn ${className ? className : ""}`}>
      {buttonText}
    </button>
  );
};

export default Button;
