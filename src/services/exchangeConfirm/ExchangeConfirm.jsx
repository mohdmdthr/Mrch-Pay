import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import exchangeIcon from "../../assets/img/exchange (1).png";

import "./exchangeConfirm.css";

const ExchangeConfirm = () => {
  return (
    <main className="exchange-confim">
      <div className="exchange-confim__details">
        <PageTitle icon={exchangeIcon} title="My Code" />
        <h1 className="exchange-confim__total">$20.000.000</h1>
        <span className="exchange-confim__balance">Total Balance</span>
        <div className="exchange-confim__user">Receiver Name</div>
        <div className="exchange-confim__phone">Phone Number</div>
        <div className="exchange-confim__id">Wallet ID Number</div>
        <form className="exhange-confirm__form">
          <Input placeholder="Amount" />
          <Input placeholder="Purpose" className="exhange-confirm__input" />
          <Button buttonType="submit" buttonText="Confirm" />
        </form>
      </div>
    </main>
  );
};

export default ExchangeConfirm;
