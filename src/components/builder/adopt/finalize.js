import React, { Component } from "react";
import calendarImg from "../../../assets/img/calendar-confirm.png";
import "./adopt.css";
class Finalize extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div className="container">
        <div className="adopt">
          <h2>Thank you for your trust in TE Connectivity.</h2>
          <p>
            We will contact you as soon as possible with an appointment
            confirmation.
            <br />
            You can find your configuration in your account.
          </p>
          <img
            className="calendar-final"
            src={calendarImg}
            alt="Calendar-Confirm"
          />
          <button className="button" onClick={this.continue}>Start New Configuration</button>
        </div>
      </div>
    );
  }
}
export default Finalize;
