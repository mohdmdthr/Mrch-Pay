import React from "react";

import "./pageTitle.css";

const PageTitle = ({ title, icon, desc }) => {
  return (
    <div className="page-title">
      <img src={icon} alt="cards icon" className="page-title__icon" />
      <div className="page-title__title-container">
        <h2 className="page-title__title">{title}</h2>
        {desc && <span className="page-title__desc">{desc}</span>}
      </div>
    </div>
  );
};

export default PageTitle;
