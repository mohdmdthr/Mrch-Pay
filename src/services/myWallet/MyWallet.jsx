import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/pageTitle/PageTitle";
import IconButton from "../../components/iconButton/IconButton";

import walletIcon from "../../assets/img/withdraw.png";
import qrIcon from "../../assets/img/qr-code.png";
import exchangeIcon from "../../assets/img/exchange (1).png";
import depositIcon from "../../assets/img/safety-box.png";
import withdrawIcon from "../../assets/img/withdraw.png";
import requestIcon from "../../assets/img/invoice (1).png";
import lockIcon from "../../assets/img/lock.png";

import "./myWallet.css";

const MyWallet = () => {
  return (
    <main className="my-wallet">
      <PageTitle title="My Wallet" desc="Wallet ID Number" icon={walletIcon} />
      <span className="my-wallet__total-text">Total Balance</span>
      <h2 className="my-wallet__total-balance">$20.000.000</h2>
      <div className="my-wallet__buttons">
        <Link to="/my-wallet/my-code" className="my-code__link">
          <IconButton
            iconText="View QR Code"
            icon={qrIcon}
            className="btn-service"
          />
        </Link>
        <Link to="/my-wallet/exchange" className="my-code__link">
          <IconButton
            iconText="Wallet Exchange"
            icon={exchangeIcon}
            className="btn-service"
          />
        </Link>
        <Link to="/my-wallet/deposit" className="my-code__link">
          <IconButton
            iconText="Deposit"
            icon={depositIcon}
            className="btn-service"
          />
        </Link>
        <Link to="/my-wallet/withdraw" className="my-code__link">
          <IconButton
            iconText="Withdraw"
            icon={withdrawIcon}
            className="btn-service"
          />
        </Link>
        <Link to="/my-wallet/request-invoice" className="my-code__link">
          <IconButton
            iconText="Request Invoice"
            icon={requestIcon}
            className="btn-service"
          />
        </Link>
        <Link to="/manage-cards/manage-code" className="my-code__link">
          <IconButton
            iconText="Manage Code"
            icon={lockIcon}
            className="btn-service"
          />
        </Link>
      </div>
    </main>
  );
};

export default MyWallet;
