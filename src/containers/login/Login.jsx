import React from "react";
import { Link } from "react-router-dom";

import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

import logo from "../../assets/img/Logo.svg";
import show from "../../assets/icons/eyeon.svg";
import visibility from "../../assets/icons/eye-off.svg";

import "./login.css";

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

const Login = () => {
  return (
    <div className="login">
      <img src={logo} alt="Logo" className="login__logo" />
      <Form className="login__form">
        <div className="login__fields">
          <span className="msg">Welcome back!</span>
          <div className="login__phone">
            <Select className="login__code">
              {countryCodes.map((item) => (
                <option key={item.country}>{item.code}</option>
              ))}
            </Select>
            <Input className="login__number" placeholder="91XXXXXXX" />
          </div>
          <div className="login__password">
            <Input inputType="password" placeholder="Password" />
            <img
              className="login__toggle-password"
              src={visibility}
              alt="Show password"
            />
          </div>
          <Link to="/forget-password" className="login__forget">
            Forgot password?
          </Link>
        </div>
        <div className="login__btn">
          <span className="login__signup">
            New to MrchPay?{" "}
            <Link to="/signup" className="login__signup-link">
              Sign up
            </Link>
          </span>
          <Link to="/">
            <Button buttonText="Sign in" />
          </Link>
        </div>
      </Form>
    </div>
  );
};

export default Login;
