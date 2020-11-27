import React, { Component } from "react";
import "../dev2.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import "./navstyles.css";

export class usernavbar extends Component {
  Active = (event) => {};
  render() {
    const links = [
      { background: "#F7F7F7" },
      { background: "#F7F7F7" },
      { background: "#F7F7F7" },
    ];
    return (
      <div>
        <div
          className="configuration-nav"
          style={{ display: "grid", gridTemplateColumns: "25% 70%" }}
        >
          <div className="top">
            <span>TE Modular Builder</span>
            <p>TE CONNECTIVITY (TE)</p>
          </div>
          <div className="container">
            <ul
              className="nav nav-tabs"
              id="myTab"
              role="tablist"
              style={{ marginTop: "5rem" }}
            >
              <li className="nav-item" onClick={this.Active} style={links[0]}>
                {this.props.setactive === "overview" ? (
                  <Link to={"/overview"} className="nav-link active">
                    Overview
                  </Link>
                ) : (
                  <Link to={"/overview"} className="nav-link">
                    Overview
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active} style={links[1]}>
                {this.props.setactive === "myprojects" ? (
                  <Link to={"/myprojects"} className="nav-link active">
                    my connectors
                  </Link>
                ) : (
                  <Link to={"/myprojects"} className="nav-link">
                    my connectors
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active} style={links[2]}>
                {this.props.setactive === "myprofile" ? (
                  <Link to={"/myprofile"} className="nav-link active">
                    profile
                  </Link>
                ) : (
                  <Link to={"/myprofile"} className="nav-link">
                    profile
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

export default usernavbar;
