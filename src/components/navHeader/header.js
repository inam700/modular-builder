import React, { Component } from "react";
import logo from "../../assets/img/1200px-TE_Connectivity_logo.jpg";
import { Link } from "react-router-dom";
import "./header.css";

class Header extends Component {
  render() {
    return (
      <div className="container container-header">
        <div className="header flex">
          <img src={logo} alt="logo" />
          <div className="sign-in">
            <i className="fas fa-user" />
            <Link className="sign-in-link" to="/login">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
