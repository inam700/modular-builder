import React, { Component } from "react";
import "./navLinks.css";
import { Link } from "react-router-dom";

class NavLinks extends Component {
  state = {
    isActive: true,
    renderComponent: this.props.page,
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
            <Link
              to="/"
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
            </Link>

            <Link
              to="/basics"
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
            </Link>

            <Link
              to="/create"
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
            </Link>

            <Link
              to="/adopt"
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
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NavLinks;
