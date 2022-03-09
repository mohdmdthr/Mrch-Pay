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
import ServicesContainer from "./components/servicesContainer/ServicesContainer";

import "./app.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="main-wrapper">
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
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
