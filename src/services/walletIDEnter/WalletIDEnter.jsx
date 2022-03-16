import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/pageTitle/PageTitle";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import exchangeIcon from "../../assets/img/exchange (1).png";

import "./walletIDEnter.css";

const WalletID = () => {
  return (
    <main className="wallet-id-enter">
      <PageTitle icon={exchangeIcon} title="Exchange" desc="Wallet ID Number" />
      <h1 className="wallet-id-enter__total">$20.000.000</h1>
      <span className="wallet-id-enter__desc">Total Balance</span>
      <Form>
        <Input
          placeholder="Enter Wallet ID Number"
          className="wallet-id-enter__input"
        />
        <Link to="/my-wallet/exchange/exchange-confirm">
          <Button buttonText="Continue" buttonType="submit" />
        </Link>
      </Form>
    </main>
  );
};

export default WalletID;
