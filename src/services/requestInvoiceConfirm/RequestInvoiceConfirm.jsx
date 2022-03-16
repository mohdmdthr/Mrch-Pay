import React from "react";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import invoiceIcon from "../../assets/img/invoice (1).png";

import "./requestInvoiceConfirm.css";

const RequestInvoiceConfirm = () => {
  return (
    <main className="request-invoice-confirm">
      <div className="request-invoice-confirm__details">
        <PageTitle
          icon={invoiceIcon}
          title="Request Invoice"
          desc="Wallet ID Number"
        />
        <div className="request-invoice-confirm__user">Username</div>
        <div className="request-invoice-confirm__phone">Phone Number</div>
        <div className="request-invoice-confirm__id">Wallet ID Number</div>
      </div>
      <form className="request-invoice-confirm__form">
        <Input placeholder="Amount" />
        <Input placeholder="Purpose" />
        <Input placeholder="Invoice Number" />
        <Button
          className="request-invoice-confirm__btn"
          buttonText="Confirm"
          buttonType="submit"
        />
      </form>
    </main>
  );
};

export default RequestInvoiceConfirm;
