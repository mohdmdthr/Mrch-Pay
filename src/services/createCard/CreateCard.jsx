import React from "react";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import "./createCard.css";

const CreateCard = () => {
  return (
    <main className="create-card">
      <h3 className="create-card__text">Create new card</h3>
      <Form className="create-card__form">
        <Input placeholder="Card name" />
        <Input placeholder="Phone number" />
        <Input placeholder="Code" />
        <Input placeholder="Confirm code" />
        <Button buttonText="Confirm" buttonType="submit" />
      </Form>
    </main>
  );
};

export default CreateCard;
