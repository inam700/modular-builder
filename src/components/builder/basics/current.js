import React, { Component } from "react";
import RangeSlider from "../../../utils/rangeSlider";

class Current extends Component {
  state = {
    btnActive: false,
    rangeCurrentFirst: 0,
    rangeCurrentSecond: 0,
  };
  handleCurrentValue = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.rangeCurrentFirst) {
      this.setState({ btnActive: true });
    } else {
      this.setState({ btnActive: false });
    }
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
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
    localStorage.setItem("rangeCurrentFirst", this.state.rangeCurrentFirst);
    localStorage.setItem("rangeCurrentSecond", this.state.rangeCurrentSecond);
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
          <ProgressLine done={this.state.rangeCurrentFirst ? "60" : "30"} />
          <div className="content">
            <div className="vertical-nav-links">
              <button
                className={
                  this.props.step !== 2 ? "link-btn" : "link-btn-success"
                }
                onClick={() => {
                  this.props.prevStep();
                }}
              >
                Voltage
              </button>
              <button
                className={
                  this.props.step === 2 ? "link-btn" : "link-btn-light"
                }
              >
                Current
              </button>
              <button
                className={
                  this.props.step !== 2 ? "link-btn" : "link-btn-light"
                }
              >
                Wire-Size
              </button>
            </div>
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
export default Current;
