import React from "react";
import Header from "./components/header/Header";
import Container from "./components/container/Container";
import Home from "./containers/home/Home";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";

import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <Container>
        {/* <Login />
        <Signup /> */}
        <Home />
      </Container>
    </>
  );
};

export default App;
