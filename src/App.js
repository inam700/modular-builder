import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/navHeader/header";
import { Route, Switch } from "react-router-dom";
import Login from "./components/login_register/login";
import Register from "./components/login_register/register";
import StartPage from "./components/builder/start";
import BasicsPage from "./components/builder/basics";
import CreatePage from "./components/builder/create";
import AdoptPage from "./components/builder/adopt";
import ForgotPassword from "./components/login_register/forgotPassword";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/basics" component={BasicsPage} />
        <Route path="/create" component={CreatePage} />
        <Route path="/adopt" component={AdoptPage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/forgotpassword" component={ForgotPassword} />
      </Switch>
    </div>
  );
}

export default App;
