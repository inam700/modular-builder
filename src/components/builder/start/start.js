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
    this.setState({
      btnActive: false,
    });
    if (type === "name") {
      this.setState({
        name: datavalue,
      });
    }
  }
  handleSubmit=()=>{
    const {dropDownValue,name}=this.state;
    localStorage.setItem("FunctionalArea",dropDownValue);
    localStorage.setItem("ComponentName",name);
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
              <option defaultValue value="1">
                Functional Area
              </option>
              <option value="2">New Era of Games</option>
              <option value="3">Production Build</option>
            </select>
            {console.log(this.state.dropDownValue)}
          </div>
          <h4>Name Your Component:</h4>
          <input
            type="text"
            onChange={(item) => this.valid(item, "name")}
            placeholder="Enter Component Name"
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
