import React from "react";

import "./iconButton.css";

const IconButton = ({ icon, link, altText, iconText, className }) => {
  return (
    <div className={`iconContainer ${className ? className : ""}`}>
      <img src={icon} alt={altText} className="iconBtn" />
      <span className="iconText">{iconText}</span>
    </div>
  );
};

export default IconButton;
