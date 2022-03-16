import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/pageTitle/PageTitle";
import IconButton from "../../components/iconButton/IconButton";

import depositIcon from "../../assets/img/safety-box.png";
import moneyIcon from "../../assets/img/money.png";
import cardsIcon from "../../assets/img/debit-cards.png";

import "./deposit.css";

const Deposit = () => {
  return (
    <main className="deposit">
      <PageTitle icon={depositIcon} title="Deposit" desc="Wallet ID Number" />
      <div className="deposit__buttons">
        <Link to="/my-wallet/deposit/traditional" className="my-code__link">
          <IconButton
            icon={moneyIcon}
            iconText="Traditional deposit"
            className="btn-service"
          />
        </Link>
        <Link to="/my-wallet/deposit/card" className="my-code__link">
          <IconButton
            icon={cardsIcon}
            iconText="Card deposit"
            className="btn-service"
          />
        </Link>
      </div>
    </main>
  );
};

export default Deposit;
