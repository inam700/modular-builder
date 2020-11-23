import React, { Component } from "react";
import Create from "./create";
import NavLinks from '../../navHeader/navLinks'

class CreatePage extends Component {
  render() {
    return (
      <div>
        <NavLinks page="Create" />
        <Create />
      </div>
    );
  }
}
export default CreatePage;
