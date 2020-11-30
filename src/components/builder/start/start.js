import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./start.css";
class Start extends Component {
  state = {
    name: "",
    btnActive: true,
    dropDownValue: "",
    functionalareaList: [
      {
        label: "Antenna",
        options: [
          "GPS",
          "WiFi",
          "Bluetooth",
          "Cellular network",
          "Radio/TV",
          "Key",
          "Others",
        ],
      },
      {
        label: "Camera",
        options: [
          "Rear view",
          "ADAS",
          "Lane assistant",
          "Autonomous driving",
          "Driver monitoring",
          "Others",
        ],
      },
      {
        label: "Display",
        options: [
          "Dashboard driver information",
          "Dashboard general purpose",
          "Rear seat infotainment",
          "Side mirror replacement",
          "Central mirror replacement",
          "Others",
        ],
      },
      {
        label: "Lidar",
        options: [],
      },
      {
        label: "Radar",
        options: ["Long range", "Short range", "Others"],
      },
      {
        label: "Bus/Network backbone/peering",
        options: [],
      },
      {
        label: "Others",
        options: [],
      },
    ],
  };

  valid(item, type) {
    let datavalue = item.target.value;
    console.log(datavalue);

    if (this.state.name && this.state.dropDownValue) {
      this.setState({
        btnActive: false,
      });
    }
    if (type === "name") {
      this.setState({
        name: datavalue,
      });
    }
    if (type === "dropdown") {
      this.setState({
        dropDownValue: datavalue,
      });
    }
  }
  handleSubmit = () => {
    const { name } = this.state;
    const selectValue = this.state.dropDownValue;
    console.log(selectValue);
    localStorage.setItem("selectValue", selectValue);
    localStorage.setItem("ComponentName", name);
  };

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

          <div className="custom-dropdown">
            <select
              value={this.state.dropDownValue}
              onChange={(item) => this.valid(item, "dropdown")}
            >
              {this.state.functionalareaList.map((f) => {
                return (
                  <optgroup label={f.label}>
                    {f.options.map((opt) => {
                      return <option value={opt}> {opt} </option>;
                    })}
                  </optgroup>
                );
              })}
            </select>
            <span className="custom-dropdown-arrow"></span>
          </div>
          <h4>Name Your Component:</h4>
          <input
            type="text"
            onChange={(item) => this.valid(item, "name")}
            placeholder="Name..."
          />
          {this.state.btnActive === false ? (
            <Link className="button" to="/basics" onClick={this.handleSubmit}>
              Continue
            </Link>
          ) : (
            <button className="button button-disabled" disabled>
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Start;
