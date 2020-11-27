import React, { Component } from "react";
import { Link } from "react-router-dom";
import calendarImg from "../../../assets/img/calendar-confirm.png";
import "./adopt.css";
class Finalize extends Component {
  
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
          <Link className="button" to="/">
            Start New Configuration
          </Link>
        </div>
      </div>
    );
  }
}
export default Finalize;
