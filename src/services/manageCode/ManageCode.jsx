import React from "react";
import PageTitle from "../../components/pageTitle/PageTitle";
import Form from "../../components/form/Form";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

import lockIcon from "../../assets/img/lock.png";

import "./manageCode.css";

const ManageCode = () => {
  return (
    <div className="manage-code">
      <PageTitle title="Manage Code" desc="Wallet ID Number" icon={lockIcon} />
      <Form className="code-form">
        <Button buttonText="Create Code" className="btn--big" />
        {/* <Input placeholder="Enter Code" />
        <Input placeholder="Confirm Code" /> */}
        <Button buttonText="Change Code" className="btn--big" />
        <Input placeholder="Current Code" />
        <Input placeholder="Enter Code" />
        <Input placeholder="Confirm Code" />
        <Button buttonText="Continue" className="manage-code__submit" />
      </Form>
    </div>
  );
};

export default ManageCode;
