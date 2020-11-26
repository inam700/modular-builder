import React, { Component } from "react";
import DayPicker from "react-day-picker";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";
import "./adopt.css";
import { callWithMethodAndData } from "../../../Services/ApiServices";
import { AddDates } from "../../../Services/ApiUrls";
class AdoptDate extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      selectedDays: [],
      AddDate: {
        StartedDates: localStorage.getItem("StartedDates"),
        ModularConnecterId: +localStorage.getItem("componentId"),
      },
    };
  }
  handleRedirect = (e) => {
    e.preventDefault();
    this.props.nextStep();
    localStorage.setItem("StartedDates", this.state.selectedDays);
    callWithMethodAndData(AddDates, "POST", this.state.AddDate).then(
      (result) => {
        let resJson = result;
        if (resJson.status === "Success") {
          console.log("Success", resJson);
        } else {
          console.log("Error while adding Dates");
        }
      }
    );
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  handleDayClick(day, { selected }) {
    const { selectedDays } = this.state;
    if (selected) {
      const selectedIndex = selectedDays.findIndex((selectedDay) =>
        DateUtils.isSameDay(selectedDay, day.toLocaleDateString())
      );
      selectedDays.splice(selectedIndex, 1);
    } else if (selectedDays.length < 3) {
      selectedDays.push(day);
    } else if (selectedDays.length === 3) {
      selectedDays.shift();
      selectedDays.push(day);
    }

    this.setState({ selectedDays });
  }

  render() {
    const today = new Date();
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
          <DayPicker
            className={"class"}
            numberOfMonths={2}
            disabledDays={{ before: today }}
            selectedDays={this.state.selectedDays}
            onDayClick={this.handleDayClick}
          />

          <button
            className="button"
            style={{ marginLeft: "15.5rem" }}
            onClick={this.handleRedirect}
          >
            Send
          </button>
        </div>
      </div>
    );
  }
}
export default AdoptDate;
