import React from "react";
import { Link } from "react-router-dom";

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
        <Link to="add-card">
          <IconButton
            icon={addCardIcon}
            altText="Add card"
            iconText="Add card"
          />
        </Link>
        <Link to="create-card">
          <IconButton
            icon={createCardIcon}
            altText="Create card"
            iconText="Create card"
          />
        </Link>
        <Link to="edit-card">
          <IconButton icon={writeIcon} altText="Edit" iconText="Edit" />
        </Link>
        <Link to="delete-card">
          <IconButton icon={deleteIcon} altText="Delete" iconText="Delete" />
        </Link>
        <Link to="manage-code">
          <IconButton
            icon={lockIcon}
            altText="Manage code"
            iconText="Manage code"
          />
        </Link>
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
