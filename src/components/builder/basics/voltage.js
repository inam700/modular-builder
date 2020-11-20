import React, { Component } from "react";

class Voltage extends Component {
  state = {
    currentValue: "12",
  };
  handleVoltageValue = (e) => {
    this.setState({ currentValue: e.target.value });
  };
  render() {
    return (
      <div className="basic-data">
        <div className="text">
          <h2>Voltage</h2>
          <p>
            The voltage level at which the product is designed to function at a
            consistent rate.
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
    );
  }
}
export default Voltage;
