import React, { Component } from "react";
import Basics from "./basics/basics";
import Start from "./start/start";

class Builder extends Component {
  state = {
    step: 1,
    nextState: "Start",
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
      step: step - 1,
    });
  };
  handleNextState = () => {
    this.setState({ nextState: "Basics" });
    console.log(this.state.nextState);
  };
  render() {
    const { step } = this.state;
    switch (step) {
      case 1:
        return (
          <>
            <Start nextStep={this.nextStep} />
            {this.handleNextState}
          </>
        );
      case 2:
        return <Basics nextStep={this.nextStep} />;
      default:
        break;
    }
  }
}
export default Builder;
