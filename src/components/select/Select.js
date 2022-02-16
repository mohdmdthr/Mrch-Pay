import React from "react";
import "./select.css";

const Select = ({ children, className }) => {
  return <select className={className}>{children}</select>;
};

export default Select;
