import React from "react";
import "./form.css";

const Form = ({ children, className }) => {
  return <form className={`form ${className}`}>{children}</form>;
};

export default Form;
