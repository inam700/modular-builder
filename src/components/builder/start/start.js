import React, { Component } from "react";
import "./start.css";
class Start extends Component {
  state = {
    name: "",
    btnActive: false,
    dropDownValue: "",
  };
  handleChange = (e) => {
    const { btnActive } = this.state;
    this.setState({ [e.target.name]: e.target.value });
    if (this.state.name) {
      this.setState({ btnActive: true });
    }
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { name } = this.state;
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
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Component Name"
          />
          {console.log(name)}
          {this.state.btnActive ? (
            <button className="button" onClick={this.continue}>
              Continue
            </button>
          ) : (
            <button disabled={true} className="button button-disabled">
              Continue
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default Start;
