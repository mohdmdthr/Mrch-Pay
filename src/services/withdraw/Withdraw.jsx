import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

import withdrawIcon from "../../assets/img/withdraw.png";

import "./withdraw.css";

const Withdraw = () => {
  return (
    <main className="withdraw">
      <PageTitle icon={withdrawIcon} title="Withdraw" desc="Wallet ID Number" />
      <h1 className="withdraw__total">$20.000.000</h1>
      <span className="withdraw__desc">Total Balance</span>
      <form className="withdraw__form">
        <Select>
          <option>Choose Card</option>
          <option>Card 1</option>
          <option>Card 2</option>
          <option>Card 3</option>
          <option>Card 4</option>
        </Select>
        <Input placeholder="Amount" />
        <Input placeholder="Wallet Code" />
        <Button
          buttonText="Continue"
          buttonType="submit"
          className="withdraw__btn"
        />
      </form>
    </main>
  );
};

export default Withdraw;
