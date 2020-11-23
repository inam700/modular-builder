import React, { Component } from "react";
import { Link } from "react-router-dom";
import RangeSlider from "../../../utils/rangeSlider";

class WireSize extends Component {
  state = {
    btnActive: false,
    rangeWire: 0,
  };
  handleWireValue = (e) => {
    this.setState({ rangeWire: e.target.value });
    if (this.state.rangeWire) {
      this.setState({ btnActive: true });
    } else {
      this.setState({ btnActive: false });
    }
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
  handleChange=()=>{
    localStorage.setItem("WireSize", this.state.rangeWire);

  }
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
          <ProgressLine done={this.state.rangeWire ? "100" : "60"} />
          <div className="content">
            <div className="vertical-nav-links">
              <button
                className={
                  this.props.step !== 3 ? "link-btn" : "link-btn-success"
                }
              >
                Voltage
              </button>
              <button
                className={
                  this.props.step !== 3 ? "link-btn" : "link-btn-success"
                }
                onClick={() => {
                  this.props.prevStep();
                }}
              >
                Current
              </button>
              <button
                className={
                  this.props.step === 3 ? "link-btn" : "link-btn-light"
                }
              >
                Wire-Size
              </button>
            </div>
            <div className="basic-data">
              <div className="text">
                <h2>Max. Wire Size</h2>
                <p>
                  Wire cross-section in mm² connected to the power contacts.
                  Please select the wire size of your biggest cross-section.
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
          </div>
          {this.state.btnActive ? (
            <Link
              className="button"
              style={{ textAlign: "center" }}
              to="/create"
              onClick={this.handleChange}
            >
              Continue
            </Link>
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

export default WireSize;
