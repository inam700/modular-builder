import React, { Component } from "react";
import NavLinks from "../../navHeader/navLinks";
import Adopt from "./Adopt";

class AdoptPage extends Component {
  render() {
    return (
      <div>
        <NavLinks page="Adopt" />
        <Adopt />
      </div>
    );
  }
}
export default AdoptPage;
