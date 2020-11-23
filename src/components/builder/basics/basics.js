import React, { Component } from "react";
import "./basics.css";
import Current from "./current";
import Voltage from "./voltage";
import WireSize from "./wireSize";

class Basics extends Component {
  state = {
    step: 1,
    voltage: "",
    currentAt23: "",
    currentAt80: "",
    wireSize: "",
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({ step: step + 1 });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({ step: step - 1 });
  };

  render() {
    const renderExactComponent = () => {
      const { step } = this.state;
      switch (step) {
        case 1:
          return <Voltage nextStep={this.nextStep} step={this.state.step} />;
        case 2:
          return (
            <Current
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              step={this.state.step}
            />
          );
        case 3:
          return (
            <WireSize
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              step={this.state.step}
            />
          );

        default:
          break;
      }
    };

    return <div>{renderExactComponent()}</div>;
  }
}

export default Basics;
