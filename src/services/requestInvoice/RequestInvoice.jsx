import React from "react";
import { Link } from "react-router-dom";

import PageTitle from "../../components/pageTitle/PageTitle";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import invoiceIcon from "../../assets/img/invoice (1).png";

import "./requestInvoice.css";

const RequestInvoice = () => {
  return (
    <main className="request-invoice">
      <PageTitle
        icon={invoiceIcon}
        title="Request Invoice"
        desc="Wallet ID Number"
      />
      <form className="request-invoice__form">
        <Input placeholder="Wallet ID Number" />
        <Link to="/my-wallet/request-invoice/confirm" className="my-code__link">
          <Button buttonType="submit" buttonText="Confirm" />
        </Link>
      </form>
    </main>
  );
};

export default RequestInvoice;
