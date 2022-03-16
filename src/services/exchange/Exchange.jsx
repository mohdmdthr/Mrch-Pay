import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/pageTitle/PageTitle";
import IconButton from "../../components/iconButton/IconButton";

import exchangeIcon from "../../assets/img/exchange (1).png";
import qrCodeIcon from "../../assets/img/qr-code (1).png";
import qrScanIcon from "../../assets/img/qr-code-scan.png";
import walletIcon from "../../assets/img/withdraw.png";

import "./exchange.css";

const Exchange = () => {
  return (
    <main className="exchange">
      <PageTitle icon={exchangeIcon} title="Exchange" desc="Wallet ID Number" />
      <img src={qrCodeIcon} alt="QR Code" className="exchange__qr" />
      <IconButton
        icon={qrScanIcon}
        iconText="Scan QR Code"
        className="btn-service"
      />
      <Link to="/my-wallet/exchange/wallet-id-enter">
        <IconButton
          icon={walletIcon}
          iconText="Wallet ID Number"
          className="btn-service"
        />
      </Link>
    </main>
  );
};

export default Exchange;
