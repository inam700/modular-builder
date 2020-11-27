import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { callWithMethodAndData } from "../../../Services/ApiServices";
import { ModularBuilder } from "../../../Services/ApiUrls";
import RangeSlider from "react-bootstrap-range-slider";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import "../../../utils/sliderTemp.css";
class WireSize extends Component {
  state = {
    btnActive: false,
    rangeWire: 14,
    ModularConnector: {
      FunctionalArea: localStorage.getItem("selectValue"),
      ComponentName: localStorage.getItem("ComponentName"),
      Voltage: +localStorage.getItem("Voltage"),
      Current1: +localStorage.getItem("Current1"),
      Current2: +localStorage.getItem("Current2"),
      WireSize: +localStorage.getItem("WireSize"),
      UserId: +localStorage.getItem("id"),
    },
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
  handleRedirect = () => {
    callWithMethodAndData(
      ModularBuilder,
      "POST",
      this.state.ModularConnector
    ).then((result) => {
      let resJson = result;
      if (resJson.status === "Success") {
        console.log("Success", resJson);
        localStorage.setItem("ModularConnectorId", resJson.data.id);
        console.log(resJson.data.id);
      } else {
        console.log("Error while adding basics data");
      }
    });
  };
  handleChange = () => {
    localStorage.setItem("WireSize", this.state.rangeWire);
    console.log(this.state.ModularConnector);
    this.handleRedirect();
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
                  this.state.rangeWire ? "link-btn-success" : "link-btn"
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
              <div className="range-slider">
                <button
                  className="range-move-btn"
                  onClick={this.handleNegativeRange}
                >
                  <span>-</span> <br /> 0,13mm²
                </button>
                <RangeSlider
                  className="range-input"
                  value={this.state.rangeWire}
                  onChange={this.handleWireValue}
                  tooltipPlacement="top"
                  tooltip="on"
                  min={13}
                  max={35}
                />
                <button
                  className="range-move-btn ml-custom"
                  onClick={this.handlePositiveRange}
                >
                  <span>+</span> <br /> 35mm²
                </button>
              </div>
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

export default withRouter(WireSize);
