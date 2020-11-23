import React, { Component } from "react";

class Voltage extends Component {
  state = {
    currentValue: "",
    btnActive: false,
    renderComponent: "Voltage",
  };
  handleVoltageValue = (e) => {
    this.setState({ currentValue: e.target.value });
    if (this.state.currentValue === "12" || "48") {
      this.setState({ btnActive: true });
    } else {
      this.setState({ btnActive: false });
    }
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
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
          <ProgressLine done={this.state.currentValue ? "30" : "0"} />
          <div className="content">
            <div className="vertical-nav-links">
              <button
                className={
                  this.props.step === 1 ? "link-btn" : "link-btn-light"
                }
              >
                Voltage
              </button>
              <button
                className={
                  this.props.step !== 1 ? "link-btn" : "link-btn-light"
                }
              >
                Current
              </button>
              <button
                className={
                  this.props.step !== 1 ? "link-btn" : "link-btn-light"
                }
              >
                Wire-Size
              </button>
            </div>
            <div className="basic-data">
              <div className="text">
                <h2>Voltage</h2>
                <p>
                  The voltage level at which the product is designed to function
                  at a consistent rate.
                </p>
              </div>
              <form>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    value="48"
                    checked={this.state.currentValue === "48"}
                    onChange={this.handleVoltageValue}
                    className="checkbox"
                  />
                  <span className="checkbox-custom" />
                  <label>12V</label>
                </label>
                <label className="checkbox">
                  <input
                    type="checkbox"
                    value="12"
                    checked={this.state.currentValue === "12"}
                    onChange={this.handleVoltageValue}
                    className="checkbox"
                  />
                  <span className="checkbox-custom" />
                  <label>48V</label>
                </label>
              </form>
            </div>
          </div>
          {this.state.btnActive ? (
            <button
              className="button"
              style={{ textAlign: "center" }}
              onClick={this.continue}
            >
              Continue
            </button>
          ) : (
            <button disabled={true} className=" button button-disabled">
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}
export default Voltage;
