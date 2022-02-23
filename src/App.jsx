import React from "react";
import Container from "./components/container/Container";
import Login from "./containers/login/Login";
import "./app.css";

const App = () => {
  return (
    <Container>
      <Login />
    </Container>
  );
};

export default App;
