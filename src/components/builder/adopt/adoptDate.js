import React, { Component } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./adopt.css";
class AdoptDate extends Component {
  state = {
    startDate: "",
    endDate: "",
  };
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleStartDateChange = (date) => {
    this.setState({ startDate: date });
  };
  handleEndDateChange = (date) => {
    this.setState({ endDate: date });
  };
  render() {
    return (
      <div className="container">
        <div className="adopt">
          <p>
            Choose a desired date to start the project. You can choose up to
            three dates.
            <br />
            We will get back to you as soon as possible and validate your
            desired date.
          </p>
          <Calendar onChange={this.handleStartDateChange} selectRange={true} />
          <p>{this.state.startDate.toString()}</p>

          {/* <div className="pick-date">
            <Calendar onChange={this.handleEndDateChange} />
          </div>
          <p>{this.state.endDate.toString()}</p> */}
          <button
            className="button"
            style={{ float: "right" }}
            onClick={this.continue}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default AdoptDate;
