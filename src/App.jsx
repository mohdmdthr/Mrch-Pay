import React from "react";
import Container from "./components/container/Container";
import Login from "./containers/login/Login";
import Signup from "./containers/signup/Signup";

import "./app.css";

const App = () => {
  return (
    <Container>
      {/* <Login /> */}
      <Signup />
    </Container>
  );
};

export default App;
