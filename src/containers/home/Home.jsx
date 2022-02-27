import React from "react";
import IconButton from "../../components/iconButton/IconButton";

import add from "../../assets/img/Add card.png";
import debitCards from "../../assets/img/debit-cards.png";
import clock from "../../assets/img/counterclockwise.png";
import notification from "../../assets/img/notification.png";
import card from "../../assets/img/create card.png";

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
    </>
  );
};

export default Home;
