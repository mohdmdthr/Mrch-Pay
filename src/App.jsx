import React from "react";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";
import Home from "./containers/home/Home";
import ManageCards from "./containers/manageCards/ManageCards";

import "./app.css";

const App = () => {
  return (
    <>
      {/* <Header /> */}
      <Container>
        {/* <Login />
        <Signup /> */}
        {/* <Home /> */}
        <ManageCards />
      </Container>
    </>
  );
};

export default App;
