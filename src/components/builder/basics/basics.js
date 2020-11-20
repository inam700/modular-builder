import React, { Component } from "react";
import "./basics.css";
import Current from "./current";
import Voltage from "./voltage";
import WireSize from "./wireSize";

class Basics extends Component {
  state = {
    btnActive: true,
    renderComponent: "Voltage",
    success: false,
  };

  render() {
    const renderExactComponent = () => {
      if (this.state.renderComponent === "Voltage") {
        return <Voltage />;
      } else if (this.state.renderComponent === "Current") {
        return <Current />;
      } else if (this.state.renderComponent === "WireSize") {
        return <WireSize />;
      }
    };
    const ProgressLine = ({ done }) => (
      <div className="progress-line">
        <div
          className="progress-done"
          style={{ opacity: "1", width: `${done}%` }}
        ></div>
      </div>
    );
    return (
      <div className="container">
        <div className="basic">
          <h2>Prepare your modular connector</h2>
          <p>
            To make your product fit perfectly for your desired application,
            please select the following attributes down below.
          </p>
          <ProgressLine done="30" />
          <div className="content">
            <div className="vertical-nav-links">
              <button
                className={
                  this.state.renderComponent === "Voltage"
                    ? "link-btn"
                    : "link-btn-light"
                }
                onClick={() => {
                  this.setState({
                    renderComponent: "Voltage",
                  });
                }}
              >
                Voltage
              </button>
              <button
                className={
                  this.state.renderComponent === "Current"
                    ? "link-btn"
                    : "link-btn-light"
                }
                onClick={() => {
                  this.setState({
                    renderComponent: "Current",
                  });
                }}
              >
                Current
              </button>
              <button
                className={
                  this.state.renderComponent === "WireSize"
                    ? "link-btn"
                    : "link-btn-light"
                }
                onClick={() => {
                  this.setState({
                    renderComponent: "WireSize",
                  });
                }}
              >
                Wire-Size
              </button>
            </div>
            {renderExactComponent()}
          </div>
          {this.state.btnActive ? (
            <button className="button">Continue</button>
          ) : (
            <button disabled={true} className="button-disabled">
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Basics;
