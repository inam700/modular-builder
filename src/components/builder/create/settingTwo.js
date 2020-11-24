import React, { Component } from "react";
import RangeSlider from "../../../utils/rangeSlider";

class SettingTwo extends Component {
  state = {
    rangePositions: 0,
    rowsValue: "1",
    offSetValue: "1",
  };
  handleRows = (e) => {
    this.setState({ rowsValue: e.target.value });
  };
  handleOffSet = (e) => {
    this.setState({ offSetValue: e.target.value });
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
  handleSubmit = () => {
    const { rangePositions, rowsValue, offSetValue } = this.state;
    this.props.handleModal();
    localStorage.setItem("Position", rangePositions);
    localStorage.setItem("Rows", rowsValue);
    localStorage.setItem("Offset", offSetValue);

    console.log(localStorage.getItem("Name"));
    console.log(localStorage.getItem("Position"));
    console.log(localStorage.getItem("Rows"));
    console.log(localStorage.getItem("Offset"));
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
                value="1"
                checked={this.state.rowsValue === "1"}
                onChange={this.handleRows}
                className="checkbox"
              />
              <span className="checkbox-custom" />
              <label>1</label>
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                value="2"
                checked={this.state.rowsValue === "2"}
                onChange={this.handleRows}
                className="checkbox"
              />
              <span className="checkbox-custom" />
              <label>2</label>
            </label>
          </div>
        </div>
        <div>
          <p style={{ margin: "20px" }}>Offset Chambers</p>
          <div className="create-checkbox">
            <label className="checkbox">
              <input
                type="checkbox"
                value="1"
                checked={this.state.offSetValue === "1"}
                onChange={this.handleOffSet}
                className="checkbox"
              />
              <span className="checkbox-custom" />
              <label>Yes</label>
            </label>
            <label className="checkbox">
              <input
                type="checkbox"
                value="0"
                checked={this.state.offSetValue === "0"}
                onChange={this.handleOffSet}
                className="checkbox"
              />
              <span className="checkbox-custom" />
              <label>No</label>
            </label>
          </div>
        </div>

        <button
          className="button"
          style={{ float: "right", margin: "0px 20px 20px 0px" }}
          onClick={this.handleSubmit}
        >
          Apply
        </button>
      </div>
    );
  }
}
export default SettingTwo;
