import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";

import depositIcon from "../../assets/img/safety-box.png";

import "./traditionalDeposit.css";

const Traditional = () => {
  return (
    <main className="traditional">
      <PageTitle icon={depositIcon} title="Deposit" desc="Wallet ID Number" />

      <div className="traditional__banks">
        <div className="traditional__bank">
          <div className="traditional__bank--logo"></div>
          <span className="traditional__bank--name">Bank name</span>
          <span className="traditional__bank--account">Account No.</span>
        </div>
        <div className="traditional__bank">
          <div className="traditional__bank--logo"></div>
          <span className="traditional__bank--name">Bank name</span>
          <span className="traditional__bank--account">Account No.</span>
        </div>
        <div className="traditional__bank">
          <div className="traditional__bank--logo"></div>
          <span className="traditional__bank--name">Bank name</span>
          <span className="traditional__bank--account">Account No.</span>
        </div>
        <div className="traditional__bank">
          <div className="traditional__bank--logo"></div>
          <span className="traditional__bank--name">Bank name</span>
          <span className="traditional__bank--account">Account No.</span>
        </div>
      </div>

      <form className="traditional__form">
        <Select>
          <option>Choose Bank</option>
          <option>Bank 1</option>
          <option>Bank 2</option>
          <option>Bank 3</option>
          <option>Bank 4</option>
        </Select>
        <Input placeholder="Amount" />
        <Input placeholder="Attach Receipt" inputType="file" />
        <Button buttonText="Continue" className="traditional__button" />
      </form>
    </main>
  );
};

export default Traditional;
