import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";

import qrCodeIcon from "../../assets/img/qr-code.png";
import qrCodeScanIcon from "../../assets/img/qr-code (1).png";

import "./myCode.css";

const MyCode = () => {
  return (
    <main className="my-code">
      <div className="my-code__details">
        <PageTitle icon={qrCodeIcon} title="My Code" />
        <div className="my-code__user">Username</div>
        <div className="my-code__phone">Phone Number</div>
        <div className="my-code__id">Wallet ID Number</div>
      </div>
      <div className="my-code__qr">
        <img src={qrCodeScanIcon} alt="QR Code" className="my-code__qr-scan" />
      </div>
    </main>
  );
};

export default MyCode;
