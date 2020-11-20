import React, { Component } from "react";
import "./navLinks.css";
import Start from "../builder/start/start";
import Basics from "../builder/basics/basics";
import Adopt from "../builder/adopt/Adopt";
import Create from "../builder/create/create";

class NavLinks extends Component {
  state = {
    isActive: true,
    renderComponent: "Start",
  };
  renderExactComponent = () => {
    if (this.state.renderComponent === "Start") {
      return <Start />;
    } else if (this.state.renderComponent === "Basics") {
      return <Basics />;
    } else if (this.state.renderComponent === "Create") {
      return <Create />;
    } else if (this.state.renderComponent === "Adopt") {
      return <Adopt />;
    }
  };
  render() {
    return (
      <div>
        <div className="nav-container">
          <div className="text">
            <p className="company-name">TE Modular Builder</p>
            <span>TE Connectivity (TE)</span>
          </div>
          <div className="navbar-links">
            <div
              className={
                this.state.renderComponent === "Start"
                  ? "nav-link-active"
                  : "nav-link"
              }
              onClick={() => {
                this.setState({ renderComponent: "Start" });
              }}
            >
              1. Start
            </div>
            <div
              className={
                this.state.renderComponent === "Basics"
                  ? "nav-link-active"
                  : "nav-link"
              }
              onClick={() => {
                this.setState({ renderComponent: "Basics" });
              }}
            >
              2. Basics
            </div>
            <div
              className={
                this.state.renderComponent === "Create"
                  ? "nav-link-active"
                  : "nav-link"
              }
              onClick={() => {
                this.setState({ renderComponent: "Create" });
              }}
            >
              3. Create
            </div>

            <div
              className={
                this.state.renderComponent === "Adopt"
                  ? "nav-link-active"
                  : "nav-link"
              }
              onClick={() => {
                this.setState({ renderComponent: "Adopt" });
              }}
            >
              4. Adopt
            </div>
          </div>
        </div>
        {this.renderExactComponent()}
      </div>
    );
  }
}

export default NavLinks;
