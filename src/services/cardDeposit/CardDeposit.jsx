import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

import depositIcon from "../../assets/img/safety-box.png";

import "./cardDeposit.css";

const CardDeposit = () => {
  return (
    <main className="card-deposit">
      <PageTitle icon={depositIcon} title="Deposit" desc="Wallet ID Number" />
      <h1 className="card-deposit__total">$20.000.000</h1>
      <span className="card-deposit__desc">Total Balance</span>
      <form className="card-deposit__form">
        <Select>
          <option>Choose Card</option>
          <option>Card 1</option>
          <option>Card 2</option>
          <option>Card 3</option>
          <option>Card 4</option>
        </Select>
        <Input placeholder="Amount" />
        <Input placeholder="Wallet Code" inputType="file" />
        <Button
          buttonText="Continue"
          buttonType="submit"
          className="card-deposit__btn"
        />
      </form>
    </main>
  );
};

export default CardDeposit;
