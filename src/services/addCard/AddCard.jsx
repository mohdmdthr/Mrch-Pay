import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./addCard.css";

const AddCard = () => {
  return (
    <main className="add-card">
      <h3 className="add-card__text">Add new card</h3>
      <Form className="add-card__form">
        <Input placeholder="Card name" />
        <Input placeholder="Card number" />
        <Input placeholder="Expiry date" inputType="date" />
        <div className="add-card__checkbox">
          <Input inputType="checkbox" className="add-card__checkbox__box" />
          <span className="add-card__checkbox__text">Set as default</span>
        </div>
        <Button buttonText="Confirm" buttonType="submit" />
      </Form>
    </main>
  );
};

export default AddCard;
