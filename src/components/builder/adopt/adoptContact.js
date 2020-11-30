import React, { Component } from "react";
import "./adopt.css";
import img from "../../../assets/img/Image.png";
import { Link } from "react-router-dom";

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
            <button
              className="button"
              onClick={this.continue}
              style={{ fontSize: "14px" }}
            >
              Contact TE
            </button>
            <Link
              className="button"
              to="/"
              style={{ backgroundColor: "#707070", fontSize: "14px" }}
            >
              Start New Build
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
export default AdoptContact;
