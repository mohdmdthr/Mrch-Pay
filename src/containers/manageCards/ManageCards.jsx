import React from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import IconButton from "../../components/iconButton/IconButton";
import Card from "../../components/card/Card";

import cardsIcon from "../../assets/img/debit-cards.png";
import addCardIcon from "../../assets/img/Add card.png";
import createCardIcon from "../../assets/img/create card.png";
import lockIcon from "../../assets/img/lock.png";
import deleteIcon from "../../assets/img/delete.png";
import writeIcon from "../../assets/img/write.png";

import "./manageCards.css";

const ManageCards = () => {
  return (
    <div className="manage-cards">
      <PageTitle title="Manage Cards" icon={cardsIcon} />
      <div className="manage-cards__buttons">
        <IconButton icon={addCardIcon} altText="Add card" iconText="Add card" />
        <IconButton
          icon={createCardIcon}
          altText="Add card"
          iconText="Add card"
        />
        <IconButton icon={writeIcon} altText="Add card" iconText="Add card" />
        <IconButton icon={deleteIcon} altText="Add card" iconText="Add card" />
        <IconButton icon={lockIcon} altText="Add card" iconText="Add card" />
      </div>
      <Card
        cardType="Credit Card"
        bankName="Bank Name"
        monthIssued="0123"
        dateExpiry="MM/YY"
        cardHolder="Holder's name"
      />
      <Card
        cardType="Credit Card"
        bankName="Bank Name"
        monthIssued="0123"
        dateExpiry="MM/YY"
        cardHolder="Holder's name"
      />
    </div>
  );
};

export default ManageCards;
