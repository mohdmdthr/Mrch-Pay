import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

import show from "../../assets/icons/eyeon.svg";
import visibility from "../../assets/icons/eye-off.svg";

import "./signup.css";

import logo from "../../assets/img/Logo.svg";

const countryCodes = [
  {
    country: "sd",
    code: 249,
  },
  {
    country: "sa",
    code: 966,
  },
];

const Signup = () => {
  return (
    <div className="signup">
      <img src={logo} alt="Logo" className="signup__logo" />
      <Form className="signup-form">
        <div className="signup__fields">
          <span className="msg">Create new account</span>
          <Input placeholder="Full name" />
          <div className="signup__phone">
            <Select className="signup__code">
              {countryCodes.map((item) => (
                <option key={item.country}>{item.code}</option>
              ))}
            </Select>
            <Input className="signup__number" placeholder="91XXXXXXX" />
          </div>
          <Input inputType="email" placeholder="Email address" />
          <Input inputType="date" placeholder="Birth date" />
          <Select className="signup-gender" placeholder="Gender">
            <option disabled>Gender</option>
            <option>Male</option>
            <option>Female</option>
          </Select>
          <div className="signup__password">
            <Input inputType="password" placeholder="Password" />
            <img
              className="signup__toggle-password"
              src={visibility}
              alt="Show password"
            />
          </div>
          <div className="signup__password">
            <Input inputType="password" placeholder="Confirm password" />
            <img
              className="signup__toggle-password"
              src={visibility}
              alt="Show password"
            />
          </div>
        </div>
        <div className="signup__btn">
          <span className="signup__login">
            Already have an account?{" "}
            <a href="#" className="signup__login-link">
              Sign in
            </a>
          </span>
          <Button buttonText="Next" className="btn" />
        </div>
      </Form>
    </div>
  );
};

export default Signup;
