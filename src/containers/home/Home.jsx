import React from "react";
import { Link } from "react-router-dom";

import IconButton from "../../components/iconButton/IconButton";
import ServicesContainer from "../../components/servicesContainer/ServicesContainer";

import add from "../../assets/img/Add card.png";
import debitCards from "../../assets/img/debit-cards.png";
import clock from "../../assets/img/counterclockwise.png";
import notification from "../../assets/img/notification.png";
import card from "../../assets/img/create card.png";
import graduationHat from "../../assets/img/graduation-hat.png";
import invoice from "../../assets/img/invoice (2).png";
import petrol from "../../assets/img/petrol.png";
import exchange from "../../assets/img/exchange (1).png";
import phone from "../../assets/img/cell-phone.png";
import ticket from "../../assets/img/ticket.png";
import bank from "../../assets/img/bank (3).png";

import "./home.css";

const Home = () => {
  return (
    <>
      <main className="home">
        <h3 className="home__welcome">Hi, Username!</h3>
        <div className="home__card">
          <Link to="manage-cards/add-card">
            <img src={add} alt="Add card" className="home__add" />
          </Link>
        </div>

        <div className="card__buttons">
          <Link to="manage-cards">
            <IconButton icon={debitCards} altText="Manage cards" />
          </Link>
          <Link to="my-wallet">
            <IconButton icon={card} altText="My wallet" />
          </Link>
          <Link to="transaction">
            <IconButton icon={clock} altText="Transaction" />
          </Link>
          <Link to="notifications">
            <IconButton icon={notification} altText="Notifications" />
          </Link>
        </div>
      </main>
      <ServicesContainer>
        <h3 className="servicesText">Services</h3>
        <div className="services">
          <Link to="services/government">
            <IconButton icon={bank} altText="Government" />
          </Link>
          <Link to="services/transfers">
            <IconButton icon={exchange} altText="Transfers" />
          </Link>
          <Link to="services/bills">
            <IconButton icon={invoice} altText="Bills" />
          </Link>
          <Link to="services/fuel">
            <IconButton icon={petrol} altText="Fuel" />
          </Link>
          <Link to="services/smart-apps">
            <IconButton icon={phone} altText="Smart apps" />
          </Link>
          <Link to="services/tickets">
            <IconButton icon={ticket} altText="Tickets" />
          </Link>
          <Link to="services/education">
            <IconButton icon={graduationHat} altText="Education" />
          </Link>
        </div>
      </ServicesContainer>
    </>
  );
};

export default Home;
