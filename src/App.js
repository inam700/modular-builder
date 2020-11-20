import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navHeader/header";
import NavLinks from "./components/navHeader/navLinks";
import { Route } from "react-router-dom";
import Test from "./components/test";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";
import Builder from "./components/builder";

function App() {
  return (
    <div className="App">
      <Header />
      <NavLinks />
      {/* <Route exact path="/" component={Builder} /> */}
      <Route exact path="/test" component={Test} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
