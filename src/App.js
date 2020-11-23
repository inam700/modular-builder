import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navHeader/header";
import { Route } from "react-router-dom";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";
import StartPage from "./components/builder/start";
import BasicsPage from "./components/builder/basics";
import CreatePage from "./components/builder/create";
import AdoptPage from "./components/builder/adopt";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={StartPage} />
      <Route exact path="/basics" component={BasicsPage} />
      <Route exact path="/create" component={CreatePage} />
      <Route exact path="/adopt" component={AdoptPage} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  );
}

export default App;
