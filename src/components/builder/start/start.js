import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./start.css";
class Start extends Component {
  state = {
    name: "",
    btnActive: true,
    dropDownValue: "",
  };

  valid(item, type) {
    let datavalue = item.target.value;
    console.log(datavalue);
    if (this.state.name) {
      this.setState({
        btnActive: false,
      });
    } else {
      this.setState({ btnActive: true });
    }
    if (type === "name") {
      this.setState({
        name: datavalue,
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="start">
          <h2>Welcome to the all new Modular Builder</h2>
          <p>
            The TE Modular Builder gives you the opportunity to create and view
            entirely new hybrid connectors.
            <br /> Discover the full potential of Modular Builder and create
            your connector now.
          </p>
          <h5>
            At first, please select the functional area from the drop down list
            below.
          </h5>
          <div
            className="input-group mb-3"
            style={{ width: "300px", marginLeft: "-40px" }}
          >
            <select
              value={this.state.dropDownValue}
              onChange={(e) => {
                this.setState({ dropDownValue: e.target.value });
              }}
              className="custom-select"
              style={{ height: "45px" }}
              id="inputGroupSelect01"
            >
              <option defaultValue>Functional Area</option>
              <option value="1">New Era of Games</option>
              <option value="2">Production Build</option>
            </select>
          </div>
          <h4>Name Your Component:</h4>
          {/* <input
            type="text"
            value={this.state.name}
            onChange={(e) => {
              this.handleChange(e)
            }}
            placeholder="Component Name"
          /> */}
          <input
            type="text"
            onChange={(item) => this.valid(item, "name")}
            placeholder="Enter Component Name"
          />

          <button
            disabled={this.state.btnActive}
            className={
              this.state.btnActive ? "button button-disabled" : "button"
            }
          >
            Continue
          </button>
        </div>
      </div>
    );
  }
}

export default Start;
