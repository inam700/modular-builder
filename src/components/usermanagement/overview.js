import React, { Component } from "react";
import Usercard from "./profile/profilecard";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import simulation from "../../img/simulation.png";
import { ButtonGroup } from "react-bootstrap";
import { callWithMethodAndNoData } from "../../Services/ApiServices";

class overview extends Component {
  state = {
    myConnectors: [],
  };

  componentDidMount() {
    let method = "GET";
    let type = "ModularBuilder/getlist";
    callWithMethodAndNoData(type, method).then((result) => {
      this.setState({
        myConnectors: result.data,
      });
      console.log(result.data);
      console.log("From State", this.state.myConnectors);
      if (result.status === "Success") {
      }
    });
  }
  showDetail(detail) {
    // alert("ello")
    console.log("hello", detail);
    localStorage.setItem("detail", JSON.stringify(detail));
    window.location = "/detail";
  }

  render() {
    return (
      <div className="myfontfamily mycontainer">
        <div className="row mt-4 ml-1">
          <div className="col-sm-3">
            <div className="row">
              <div
                className="overviewheadings dev2card"
                style={{ marginLeft: "6rem" }}
              >
                <p className="textuppercase">
                  profile - {localStorage.getItem("profileType")}
                </p>
              </div>
              <div className="mt-4">
                <Usercard></Usercard>
              </div>{" "}
              <br></br>
            </div>
            <div className="row">
              <ButtonGroup vertical style={{ width: "90%" }}>
                <Button
                  className="profilebtns textuppercase mb-5"
                  style={{ width: "140px" }}
                  href="/myprofile"
                >
                  Account
                </Button>
                <Button
                  className="profilebtns textuppercase mt-5"
                  style={{ width: "175px" }}
                  href="/"
                >
                  Create a new Connector
                </Button>
              </ButtonGroup>
            </div>
          </div>

          <div className="col-sm-8 ml-n4">
            <div className="overviewheadings ml-n3">
              <p className="textuppercase"> my Connectors</p>
            </div>

            <div className="mt-4">
              <div className="row mr-5 mb-1">
                {console.log("In the Body", this.state.myConnectors)}
                {this.state.myConnectors.slice(0, 2).map((item) => (
                  <Card
                    onClick={() => this.showDetail(item)}
                    style={{ width: "260px", height: "200px" }}
                    className="simulation carddesign mr-3"
                  >
                    <div className="simulationcard ">
                      <div className="text-center">
                        <img src={simulation} alt="" />
                      </div>
                      <div className="simulationCardBottom">
                        <div className="row mr-1">
                          <div className="col-8">
                            <h6
                              className="p-0 m-0 mt-4"
                              style={{ color: "darkblue", height: "20px" }}
                            >
                              {item.componentName}
                            </h6>
                            <p
                              className="p-0 m-0 pl-1"
                              style={{ fontSize: "12px", color: "darkblue" }}
                            >
                              {item.updatedAt}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
                {/* {this.state.connectors.map((Detail, i) => {
                  return (
                   
                  );
                })} */}
              </div>
              <Button
                className="profilebtns textuppercase ml-n3"
                href="myprojects"
              >
                show all
              </Button>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

overview.propTypes = {};
export default overview;
