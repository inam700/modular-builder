import React, { Component } from "react";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "../../../utils/sliderTemp.css";
class Current extends Component {
  state = {
    btnActive: false,
    rangeCurrentFirst: 0,
    rangeCurrentSecond: 0,
  };
  handleCurrent1 = (e) => {
    this.setState({
      rangeCurrentFirst: e.target.value,
    });
    // if (this.state.rangeCurrentFirst || this.state.rangeCurrentSecond) {
    //   this.setState({ btnActive: true });
    // } else {
    //   this.setState({ btnActive: false });
    // }
  };
  handleCurrent2 = (e) => {
    this.setState({
      rangeCurrentSecond: e.target.value,
    });
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
    localStorage.setItem("Current1", this.state.rangeCurrentFirst);
    localStorage.setItem("Current2", this.state.rangeCurrentSecond);
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
                  this.state.rangeCurrentFirst || this.state.rangeCurrentSecond
                    ? "link-btn-success"
                    : "link-btn"
                }
              >
                Current
              </button>
              <button
                className={
                  this.props.step !== 2 ? "link-btn" : "link-btn-light"
                }
                onClick={this.continue}
              >
                Wire-Size
              </button>
            </div>
            <div className="basic-data">
              <div className="text">
                <h2>Current</h2>
                <p>Max. Current (A) at 23°C / 80°C free in air</p>
              </div>
              <h3 style={{ marginBottom: "20px" }}>23°C</h3>
              <div className="range-slider">
                <button
                  className="range-move-btn"
                  onClick={this.handleNegativeRangeFirst}
                >
                  <span>-</span> <br /> 3A
                </button>
                <RangeSlider
                  className="range-input"
                  value={this.state.rangeCurrentFirst}
                  onChange={this.handleCurrent1}
                  tooltipPlacement="top"
                  tooltip="on"
                  min={3}
                  max={215}
                />
                <button
                  className="range-move-btn ml-custom"
                  onClick={this.handlePositiveRangeFirst}
                >
                  <span>+</span> <br /> 215A
                </button>
              </div>
              <h3 style={{ marginTop: "60px",marginBottom:"25px" }}>80°C</h3>
              <div className="range-slider">
                <button
                  className="range-move-btn"
                  onClick={this.handleNegativeRangeSecond}
                >
                  <span>-</span> <br /> 3A
                </button>
                <RangeSlider
                  className="range-input"
                  value={this.state.rangeCurrentSecond}
                  onChange={this.handleCurrent2}
                  tooltipPlacement="top"
                  tooltip="on"
                  min={3}
                  max={180}
                />
                <button
                  className="range-move-btn ml-custom"
                  onClick={this.handlePositiveRangeSecond}
                >
                  <span>+</span> <br /> 180A
                </button>
              </div>
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
