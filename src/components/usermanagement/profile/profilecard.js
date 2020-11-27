import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import DispalyPic from "../../../img/dp.jpg";
import Dummy from "../../../img/dummyprofile.png";

export class profilecard extends Component {
  state = {
    Name: "",
    Email: "",
  };

  render() {
    return (
      <div className="text-center">
        <Card
          style={{ width: "260px", height: "200px" }}
          className="dev2card carddesign"
        >
          <div className="userCard">
            {localStorage.getItem("picture") ? (
              <img
                className="avater m-0 font-weight-bold"
                src={DispalyPic}
                alt="Image"
              />
            ) : (
              <img
                className="avater m-0 font-weight-bold"
                src={Dummy}
                alt="Image"
              />
            )}
            <div className="userCardBottom mt-4">
              <h6 style={{ color: "darkblue" }}>
                {localStorage.getItem("fullName")}
              </h6>
              <h6 style={{ color: "darkblue" }}>
                {localStorage.getItem("email")}
              </h6>
            </div>
          </div>
        </Card>
      </div>
    );
  }
}

export default profilecard;
