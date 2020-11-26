import { Component, isValidElement } from "react";
// import Stairs from "../../assets/images/stairs.svg";
// import questionMark from "../../assets/images/question-mark.png";
import "./sliderTemp.css";
import React from "react";

class StairGeometry extends Component {
  state = {
    twist: 50,
    slider: "non-active",
  };

  valid(item, type) {
    if (type === "range") {
      this.setState({
        twist: item.target.value,
      });
    }
  }
  handleNegativeRange = () => {
    const minValue = 0;

    if (this.state.twist === minValue) {
      return null;
    } else {
      let decrement = parseInt(this.state.twist) - 5;
      this.setState({ twist: decrement });
    }
  };
  handlePositiveRange = () => {
    const maxValue = 35;

    if (this.state.twist === maxValue) {
      return null;
    } else {
      let increment = parseInt(this.state.twist) + 5;
      this.setState({ twist: increment });
    }
  };

  render() {
    return (
      <div>
        <div className="slider">
          <button className="range-move-btn" onClick={this.handleNegativeRange}>
            <span>-</span> <br /> mm2
          </button>
          <div>
            <div className="showValue">
              <span
                className={this.state.slider}
                style={{ left: 100 + "%" }}
                id="currentValue"
              >
                {this.state.twist}
              </span>
            </div>
            <input
              type="range"
              className="custom-range form-control-range"
              step="1"
              id="slider"
              min="3"
              max="215"
              value={this.state.twist}
              onChange={(item) => this.valid(item, "range")}
            />
          </div>
          <button
            className="range-move-btn"
            onClick={this.handlePositiveRange}
          >
            <span>+</span> <br /> mm2
          </button>
        </div>
      </div>
    );
  }
}

export default StairGeometry;
