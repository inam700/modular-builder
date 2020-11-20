import React, { Component } from "react";
import RangeSlider from "../../../utils/rangeSlider";

class WireSize extends Component {
  state = {
    rangeWire: 0,
  };
  handleWireValue = (e) => {
    this.setState({ rangeWire: e.target.value });
  };
  handleNegativeRange = () => {
    const minValue = 0;

    if (this.state.rangeWire === minValue) {
      return null;
    } else {
      let decrement = parseInt(this.state.rangeWire) - 5;
      this.setState({ rangeWire: decrement });
    }
  };
  handlePositiveRange = () => {
    const maxValue = 35;

    if (this.state.rangeWire === maxValue) {
      return null;
    } else {
      let increment = parseInt(this.state.rangeWire) + 5;
      this.setState({ rangeWire: increment });
    }
  };
  render() {
    return (
      <div className="basic-data">
        <div className="text">
          <h2>Max. Wire Size</h2>
          <p>
            Wire cross-section in mm² connected to the power contacts. Please
            select the wire size of your biggest cross-section.
          </p>
        </div>
        <RangeSlider
         
          className="range-input"
          type="range"
          unit="mm²"
          name="rangeWire"
          min="13"
          max="35"
          range={this.state.rangeWire}
          value={this.state.rangeWire}
          onChange={this.handleWireValue}
          onClickNegative={this.handleNegativeRange}
          onClickPositve={this.handlePositiveRange}
        />
     
      </div>
    );
  }
}

export default WireSize;
