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
        <div className="configuration-nav">
          <div className="top">
            <span>TE Modular Builder</span>
            <p>TE CONNECTIVITY (TE)</p>
          </div>
          <div className="container">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" onClick={this.Active}>
                {this.props.page === "Start" ? (
                  <Link to={"/"} className="nav-link active">
                    1. Start
                  </Link>
                ) : (
                  <Link to={"/"} className="nav-link">
                    1. Start
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.page === "Basics" ? (
                  <Link to={"/basics"} className="nav-link active">
                    2. Basics
                  </Link>
                ) : (
                  <Link to={"/basics"} className="nav-link">
                    2. Basics
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.page === "Create" ? (
                  <Link to={"/create"} className="nav-link active">
                    3. Create
                  </Link>
                ) : (
                  <Link to={"/create"} className="nav-link">
                    3. Create
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.page === "Adopt" ? (
                  <Link to={"/adopt"} className="nav-link active">
                    4. Adopt
                  </Link>
                ) : (
                  <Link to={"/adopt"} className="nav-link">
                    4. Adopt
                  </Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default NavLinks;
