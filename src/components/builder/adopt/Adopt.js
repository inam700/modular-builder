import React, { Component } from "react";
import AdoptContact from "./adoptContact";
import AdoptDate from "./adoptDate";
import Finalize from "./finalize";
class Adopt extends Component {
  state = {
    step: 1,
  };
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };
  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return <AdoptContact nextStep={this.nextStep} />;

      case 2:
        return <AdoptDate nextStep={this.nextStep} />;
      case 3:
        return <Finalize nextStep={this.nextStep} />;

      default:
        break;
    }
  }
}

export default Adopt;
