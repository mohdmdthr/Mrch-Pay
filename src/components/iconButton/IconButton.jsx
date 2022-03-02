import React from "react";
import "./iconButton.css";

const IconButton = ({ icon, link, altText, iconText }) => {
  return (
    <div className="iconContainer">
      <img src={icon} alt={altText} className="iconBtn" />
      <span className="iconText">{iconText}</span>
    </div>
  );
};

export default IconButton;
