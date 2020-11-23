import React, { Component } from "react";
import NavLinks from "../../navHeader/navLinks";
import Basics from "./basics";

class BasicsPage extends Component {
  render() {
    return (
      <div>
        <NavLinks page="Basics" />
        <Basics />
      </div>
    );
  }
}
export default BasicsPage;
