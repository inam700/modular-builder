import React, { Component } from "react";
import NavLinks from "../../navHeader/navLinks";
import Start from "./start";

class StartPage extends Component {
  render() {
    return (
      <div>
        <NavLinks page="Start" />
        <Start />
      </div>
    );
  }
}
export default StartPage;
