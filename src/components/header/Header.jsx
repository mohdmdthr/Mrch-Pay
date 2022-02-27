import React from "react";
import IconButton from "../iconButton/IconButton";
import menuIcon from "../../assets/img/adjustment.png";
import qr from "../../assets/img/qr-code-scan.png";
import logo from "../../assets/img/Logo.svg";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="menu">
        <IconButton icon={menuIcon} altText="Menu" />
      </div>
      <img src={logo} alt="Logo" className="header__logo" />
      <IconButton icon={qr} />
    </header>
  );
};

export default Header;
