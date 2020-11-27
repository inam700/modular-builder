import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Mydetails from "./profiledetailscard";

class myprofile extends Component {
  state = {};
  render() {
    return (
      <div className="myfontfamily mycontainer">
        <div className="row mt-4">
          <div className="col-11">
            <div className="overviewheadings">
              <p className="textuppercase">
                {" "}
                profile - {localStorage.getItem("profileType")}
              </p>
            </div>
          </div>
        </div>

        <div className="row mt-4">{<Mydetails></Mydetails>}</div>
      </div>
    );
  }
}

myprofile.propTypes = {};
export default myprofile;
