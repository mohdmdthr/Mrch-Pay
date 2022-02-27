import React from "react";
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
          <img src={add} alt="Add card" className="home__add" />
        </div>

        <div className="card__buttons">
          <IconButton icon={debitCards} />
          <IconButton icon={card} />
          <IconButton icon={clock} />
          <IconButton icon={notification} />
        </div>
      </main>
      <ServicesContainer>
        <h3 className="servicesText">Services</h3>
        <div className="services">
          <IconButton icon={bank} />
          <IconButton icon={exchange} />
          <IconButton icon={invoice} />
          <IconButton icon={petrol} />
          <IconButton icon={phone} />
          <IconButton icon={ticket} />
          <IconButton icon={graduationHat} />
        </div>
      </ServicesContainer>
    </>
  );
};

export default Home;
