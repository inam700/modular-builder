import React, { Component } from "react";
import "./test.css";
import { Link } from "react-router-dom";
class Test extends Component {
  state = {
    openModal: true,
    openModalFinalize: false,
  };
  openModal = () => {
    this.setState({
      openModal: true,
    });
  };

  openModalFinalize = () => {
    this.setState({
      openModalFinalize: true,
    });
    this.closeModal();
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };

  closeModalFinalize = () => {
    this.setState({
      openModalFinalize: false,
    });
  };
  render() {
    return (
      <div>
        <div className="configuration-nav">
          <div className="top">
            <span>TE Data Connectivity Simulator</span>
            <p>TE CONNECTIVITY (TE)</p>
          </div>
          <div className="container">
            <ul
              className="nav nav-tabs justify-content-center"
              id="myTab"
              role="tablist"
            >
              <li className="nav-item" onClick={this.Active}>
                {this.props.start === "start" ? (
                  <Link to={"/"} className="nav-link active">
                    1. Prologue
                  </Link>
                ) : (
                  <Link to={"/"} className="nav-link">
                    1. Prologue
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.setactive === "basics" ? (
                  <Link to={"/basics"} className="nav-link active">
                    2. basics
                  </Link>
                ) : (
                  <Link to={"/basics"} className="nav-link">
                    2. basics
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.setactive === "configuratelink" ? (
                  <Link to={"/configuratelink"} className="nav-link active">
                    3. Configurate link
                  </Link>
                ) : (
                  <Link to={"/configuratelink"} className="nav-link">
                    3. Configurate link
                  </Link>
                )}
              </li>
              <li className="nav-item" onClick={this.Active}>
                {this.props.setactive === "simulation" ? (
                  <Link to={"/simulation"} className="nav-link active">
                    4. Simulation
                  </Link>
                ) : (
                  <Link to={"/simulation"} className="nav-link">
                    4. Simulation
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

export default Test;
