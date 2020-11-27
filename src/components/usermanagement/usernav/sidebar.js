import React, { Component } from "react";
import "./navstyles.css";
import Chatlogo from "../../../img/chat.png";
import Calllogo from "../../../img/call.png";
import { Button } from "react-bootstrap";

export class sidebar extends Component {
  render() {
    return (
      <div className="sidenav">
        <input
          className="sidebarbtn"
          type="image"
          src={Chatlogo}
          alt="write us"
        />
        <input
          className="sidebarbtn"
          type="image"
          src={Calllogo}
          alt="contact us"
        />
      </div>
    );
  }
}

export default sidebar;
