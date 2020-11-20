import React, { Component } from "react";
import RangeSlider from "../../../utils/rangeSlider";

class Current extends Component {
  state = {
    rangeCurrentFirst: 0,
    rangeCurrentSecond: 0,
  };
  handleCurrentValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleNegativeRangeFirst = () => {
    const minValue = 3;

    if (this.state.rangeCurrentFirst === minValue) {
      return null;
    } else {
      let decrement = parseInt(this.state.rangeCurrentFirst) - 5;
      this.setState({ rangeCurrentFirst: decrement });
    }
  };
  handleNegativeRangeSecond = () => {
    const minValue = 3;

    if (this.state.rangeCurrentSecond === minValue) {
      return null;
    } else {
      let decrement = parseInt(this.state.rangeCurrentSecond) - 5;
      this.setState({ rangeCurrentSecond: decrement });
    }
  };
  handlePositiveRangeFirst = () => {
    const maxValue = 215;

    if (this.state.rangeCurrentFirst === maxValue) {
      return null;
    } else {
      let incrementFirst = parseInt(this.state.rangeCurrentFirst) + 5;
      this.setState({ rangeCurrentFirst: incrementFirst });
    }
  };
  handlePositiveRangeSecond = () => {
    const maxValue = 180;

    if (this.state.rangeCurrentSecond === maxValue) {
      return null;
    } else {
      let increment = parseInt(this.state.rangeCurrentSecond) + 5;
      this.setState({ rangeCurrentSecond: increment });
    }
  };
  render() {
    return (
      <div className="basic-data">
        <div className="text">
          <h2>Current</h2>
          <p>Max. Current (A) at 23°C / 80°C free in air</p>
        </div>
        <h3>23°C</h3>
        <RangeSlider
          className="range-input"
          type="range"
          name="rangeCurrentFirst"
          unit="A"
          min="3"
          max="215"
          range={this.state.rangeCurrentFirst}
          value={this.state.rangeCurrentFirst}
          onChange={this.handleCurrentValue}
          onClickNegative={this.handleNegativeRangeFirst}
          onClickPositve={this.handlePositiveRangeFirst}
        />
        <h3 style={{ marginTop: "60px" }}>80°C</h3>
        <RangeSlider
          className="range-input"
          type="range"
          name="rangeCurrentSecond"
          unit="A"
          min="3"
          max="180"
          range={this.state.rangeCurrentSecond}
          value={this.state.rangeCurrentSecond}
          onChange={this.handleCurrentValue}
          onClickNegative={this.handleNegativeRangeSecond}
          onClickPositve={this.handlePositiveRangeSecond}
        />
      </div>
    );
  }
}
export default Current;
