import React, { Component } from "react";
import logo from "../../assets/img/1200px-TE_Connectivity_logo.jpg";
import { Link } from "react-router-dom";
import {} from "../../Services/ApiUrls";
import "./header.css";
import { withRouter } from "react-router-dom";

class Header extends Component {
  handleLogout = () => {
    localStorage.clear("token");
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="container container-header">
        <div className="header flex">
          <img
            src={logo}
            alt="logo"
            onClick={() => {
              window.location = "/";
            }}
          />
          <div>
            {localStorage.getItem("isLogin") === "true" ? (
              <div className="sign-in">
                <i className="fas fa-user" />
                <Link style={{ marginRight: "15px" }} to="/myprofile">
                  {localStorage.getItem("email")}
                </Link>
                <Link className="sign-in-link" onClick={this.handleLogout}>
                  Logout
                </Link>
              </div>
            ) : (
              <div className="sign-in">
                <i className="fas fa-user" />
                <Link className="sign-in-link" to="/login">
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Header);
