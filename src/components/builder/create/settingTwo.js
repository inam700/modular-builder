import React, { Component } from "react";
import RangeSlider from "../../../utils/rangeSlider";

class SettingTwo extends Component {
  state = {
    rangePositions: 0,
    currentValue: "12",
  };
  handleVoltageValue = (e) => {
    this.setState({ currentValue: e.target.value });
  };
  handleRangePositions = (e) => {
    this.setState({ rangePositions: e.target.value });
  };
  handleNegativeRange = () => {
    const minValue = 1;

    if (this.state.rangePositions === minValue) {
      return null;
    } else {
      let decrement = parseInt(this.state.rangePositions) - 5;
      this.setState({ rangePositions: decrement });
    }
  };
  handlePositiveRange = () => {
    const maxValue = 20;

    if (this.state.rangePositions === maxValue) {
      return null;
    } else {
      let increment = parseInt(this.state.rangePositions) + 5;
      this.setState({ rangePositions: increment });
    }
  };
  render() {
    return (
      <div className="settings-second">
        <div>
          <p style={{ margin: "20px" }}>Positions</p>
          <RangeSlider
            type="range"
            min="1"
            max="20"
            value={this.state.rangePositions}
            onChange={this.handleRangePositions}
            range={this.state.rangePositions}
            name="rangePositions"
            onClickNegative={this.handleNegativeRange}
            onClickPositve={this.handlePositiveRange}
          />
        </div>
        <div>
          <p style={{ margin: "20px" }}>Rows</p>
          <div className="create-checkbox">
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
          </div>
        </div>
        <div>
          <p style={{ margin: "20px" }}>Offset Chambers</p>
          <div className="create-checkbox">
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
          </div>
        </div>
        <button
          className="button"
          style={{ float: "right", margin: "0px 20px 20px 0px" }}
          onClick={this.props.handleModal}
        >
          Apply
        </button>
      </div>
    );
  }
}
export default SettingTwo;
