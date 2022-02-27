import React from "react";
import "./button.css";

const Button = ({ buttonType = "button", buttonText }) => {
  return (
    <button type={buttonType} className="btn">
      {buttonText}
    </button>
  );
};

export default Button;
