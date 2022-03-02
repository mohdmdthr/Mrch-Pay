import React from "react";

import chipIcon from "../../assets/img/card-chip.png";

import "./card.css";

const Card = ({
  cardType,
  bankName,
  cardNumber,
  monthIssued,
  dateExpiry,
  cardHolder,
}) => {
  return (
    <div className="card">
      <div className="card__header">
        <span className="card__type">{cardType}</span>
        <span className="cardBank">{bankName}</span>
      </div>
      <img src={chipIcon} alt="card chip icon" className="card__chip" />
      {cardNumber ? (
        <span className="card__number">{cardNumber}</span>
      ) : (
        <span className="card__placeholder">---- ---- ---- ----</span>
      )}
      <div className="card__date-container">
        <span className="date-issued">{monthIssued}</span>
        <span className="date-validity">
          valid <br />
          thru
        </span>
        <span className="date-expiry">{dateExpiry}</span>
      </div>
      <div className="card__holder">{cardHolder}</div>
    </div>
  );
};

export default Card;
