import React, { Component } from "react";
import "./adopt.css";
import img from "../../../assets/img/Image.png";

class AdoptContact extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  render() {
    return (
      <div className="container">
        <div className="adopt">
          <h2>See you finished product</h2>
          <p>
            Here you can now see your finished hybrid connector.
            <br /> Contact TE to turn your configured connector into a real
            product.
          </p>
          <img src={img} alt="adopt" />
          <div className="buttons">
            <button className="button" onClick={this.continue}>
              Contact TE
            </button>
            <button className="button" style={{ backgroundColor: "#707070" }}>
              Start New Build
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default AdoptContact;
