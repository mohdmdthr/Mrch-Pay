import React from "react";
import "./iconButton.css";

const IconButton = ({ icon, link, altText }) => {
  return (
    <div className="iconContainer">
      <img src={icon} alt={altText} className="iconBtn" />
    </div>
  );
};

export default IconButton;
