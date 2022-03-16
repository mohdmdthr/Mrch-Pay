import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Container from "./components/container/Container";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";
import Home from "./containers/home/Home";
import ManageCards from "./containers/manageCards/ManageCards";
import ManageCode from "./services/manageCode/ManageCode";
import AddCard from "./services/addCard/AddCard";
import CreateCard from "./services/createCard/CreateCard";
import MyWallet from "./services/myWallet/MyWallet";
import MyCode from "./services/myCode/MyCode";
import Exchange from "./services/exchange/Exchange";
import WalletIDEnter from "./services/walletIDEnter/WalletIDEnter";
import ExchangeConfirm from "./services/exchangeConfirm/ExchangeConfirm";
import Deposit from "./services/deposit/Deposit";
import TraditionalDeposit from "./services/traditional/TraditionalDeposit";
import CardDeposit from "./services/cardDeposit/CardDeposit";
import Withdraw from "./services/withdraw/Withdraw";
import RequestInvoice from "./services/requestInvoice/RequestInvoice";
import RequestInvoiceConfirm from "./services/requestInvoiceConfirm/RequestInvoiceConfirm";
import ServicesContainer from "./components/servicesContainer/ServicesContainer";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="my-wallet">
              <Route index element={<MyWallet />} />
              <Route path="my-code" element={<MyCode />} />
              <Route path="exchange">
                <Route index element={<Exchange />} />
                <Route path="wallet-id-enter" element={<WalletIDEnter />} />
                <Route path="exchange-confirm" element={<ExchangeConfirm />} />
              </Route>
              <Route path="deposit">
                <Route index element={<Deposit />} />
                <Route path="traditional" element={<TraditionalDeposit />} />
                <Route path="card" element={<CardDeposit />} />
              </Route>
              <Route path="withdraw" element={<Withdraw />} />
              <Route path="request-invoice">
                <Route index element={<RequestInvoice />} />
                <Route path="confirm" element={<RequestInvoiceConfirm />} />
              </Route>
            </Route>
          </Route>
          <Route path="manage-cards">
            <Route index element={<ManageCards />} />
            <Route path="add-card" element={<AddCard />} />
            <Route path="create-card" element={<CreateCard />} />
            <Route path="edit-card" element={<h1>Edit card</h1>} />
            <Route path="delete-card" element={<h1>Delete card</h1>} />
            <Route path="manage-code" element={<ManageCode />} />
          </Route>
          <Route path="services">
            <Route path="government" element={<h1>Government</h1>} />
            <Route path="transfers" element={<h1>Transfers</h1>} />
            <Route path="bills" element={<h1>Bills</h1>} />
            <Route path="fuel" element={<h1>Fuel</h1>} />
            <Route path="smart-apps" element={<h1>Smart-apps</h1>} />
            <Route path="tickets" element={<h1>Tickets</h1>} />
            <Route path="education" element={<h1>Education</h1>} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
