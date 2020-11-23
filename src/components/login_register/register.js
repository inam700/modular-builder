import React, { Component } from "react";
import { baseUrl } from "../../redux/BaseUrl";
import {RegisterUrl} from '../../Services/ApiUrls'
import "./register.css";

import Loader from "react-loader-spinner";

export class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 20,
      active: false,
      activecolor: "#E88302",
      selectedvalur: 0,
      profiletypes: ["S", "M", "L", "XL"],
      profiletype: "",

      email: "",
      fullname: "",
      company: "",
      phone: "",
      position: "",
      country: "",
      Password: "",

      M_msg: "",
      L_msg: "",
      XL_msg: "",
      color: "#2a659c",

      buttonDisabled_M: false,
      buttonDisabled_L: false,
      buttonDisabled_XL: false,
      ShowDisclaimer: false,
    };
  }

  CheckProfileType = (index, msg, Color) => {
    if (this.state.profiletypes[index] === "M") {
      this.setState({
        M_msg: msg,
        L_msg: "",
        XL_msg: "",
        color: Color,
      });
    } else if (this.state.profiletypes[index] === "L") {
      this.setState({
        M_msg: "",
        L_msg: msg,
        XL_msg: "",
        color: Color,
      });
    } else if (this.state.profiletypes[index] === "XL") {
      this.setState({
        M_msg: "",
        L_msg: "",
        XL_msg: msg,
        color: Color,
      });
    }
  };
  PostCall = (index) => {
    fetch(baseUrl + RegisterUrl, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        profileType: this.state.profiletypes[index],
        email: this.state.email,
        password: this.state.Password,
        fullname: this.state.fullname,
        mobile: this.state.phone,
        company: this.state.company,
        position: this.state.position,
        address: null,
        profilePic: null,
      }),
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === "Success") {
          console.log("Register Data",res);
          this.CheckProfileType(index, res.message, "green");

          this.setState({
            buttonDisabled_M: false,
            buttonDisabled_L: false,
            buttonDisabled_XL: false,
          });

          console.log(res.data.fullName);
          console.log(res.data.email);
          console.log(res.data.token);
          console.log(res.data.profileType);

          localStorage.setItem("username", res.data.fullName);
          localStorage.setItem("email", res.data.email);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("ProfileType", res.data.profileType);
          // alert(localStorage.getItem("previousPath"))
          setTimeout((window.location = "/login"), 2000);

          //  setTimeout( window.location = "./temperature",2000)
          //window.location = "./temperature";
        } else {
          this.CheckProfileType(index, res.message, "red");
        }
      })
      .catch((error) => {
        console.log("Error :" + error);
      });
  };
  SetActivelist = (index) => {
    if (this.state.profiletypes[index] === "M") {
      if (
        this.state.email === "" ||
        this.state.fullname === "" ||
        this.state.Password === "" ||
        this.state.company === ""
      ) {
        this.CheckProfileType(index, "Fields should not be empty !", "red");
      } else {
        this.CheckProfileType(index, "Please wait !", "#2a659c");
        this.PostCall(index);
        this.setState({
          buttonDisabled_M: true,
          buttonDisabled_L: false,
          buttonDisabled_XL: false,
        });
      }
    } else if (this.state.profiletypes[index] === "L") {
      if (
        this.state.email === "" ||
        this.state.fullname === "" ||
        this.state.Password === "" ||
        this.state.company === "" ||
        this.state.phone === "" ||
        this.state.position === ""
      ) {
        this.CheckProfileType(index, "Fields should not be empty !", "red");
      } else {
        this.CheckProfileType(index, "Please wait !", "#2a659c");
        this.PostCall(index);
        this.setState({
          buttonDisabled_M: false,
          buttonDisabled_L: true,
          buttonDisabled_XL: false,
        });
      }
    } else if (this.state.profiletypes[index] === "XL") {
      if (
        this.state.email === "" ||
        this.state.fullname === "" ||
        this.state.Password === "" ||
        this.state.company === "" ||
        this.state.phone === "" ||
        this.state.position === "" ||
        this.state.country === ""
      ) {
        this.CheckProfileType(index, "Fields should not be empty !", "red");
      } else {
        this.CheckProfileType(index, "Please wait !", "#2a659c");
        this.PostCall(index);
        this.setState({
          buttonDisabled_M: false,
          buttonDisabled_L: false,
          buttonDisabled_XL: true,
        });
      }
    }
    if (this.state.active) {
      this.setState({
        active: false,
      });
    } else {
      this.setState({
        active: true,
      });
    }
  };

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  valuetext = (value) => {
    return `${value}°C`;
  };
  FlightToLogIn = () => {
    window.location = "/login";
  };
  openDisclaimer = () => {
    this.setState({
      ShowDisclaimer: true,
    });
  };
  CloseDiscliamer = () => {
    this.setState({
      ShowDisclaimer: false,
    });
  };

  render() {
    const active = {
      color: "#E88302",
    };
    const deactive = {
      color: "#0266A1",
    };
    const btnactive = {
      backgroundColor: "#E88302",
    };
    const btndeactive = {
      backgroundColor: "#0266A1",
    };

    const msgColor = {
      color: this.state.color,
      textDecoration: "none",
      fontSize: "14px",
      marginRight: "8px",
    };
    const obj = {
      text: "(http://www.te.com/aboutus/tandc.asp).",
      link: "http://www.te.com/aboutus/tandc.asp",
    };

    return (
      <div className="simulation">
        <div className="container">
          <p>
            We want to serve you!<br></br>
            For the best service possible, we need your credentials: You decide.
          </p>
          <div className="main-section">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="limitstools mt-3">
                  <div id="accordion">
                    <div className="card custom-card2">
                      <div
                        className="card-header custom-bg-card-header border-none"
                        id="headingOne"
                      >
                        <div>
                          <h1
                            style={
                              this.state.selectedvalur === "1"
                                ? active
                                : deactive
                            }
                          >
                            S
                          </h1>
                        </div>
                        <hr></hr>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <input
                              className="mb-3"
                              placeholder="E-Mail"
                            ></input>
                            <input placeholder="Password"></input>
                            <hr className="mt-4" style={{ width: "90%" }}></hr>
                            <h6>See Configured Results</h6>
                          </div>
                        </div>
                        <h5 className="mb-0">
                          <button
                            disabled
                            onClick={() => this.SetActivelist("1")}
                            style={
                              this.state.selectedvalur === "1"
                                ? btnactive
                                : btndeactive
                            }
                            className="button-class-second"
                            data-toggle=""
                            data-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            CHOOSE
                          </button>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="limitstools mt-3">
                  <div id="accordion">
                    <div className="card custom-card">
                      <div
                        disabled
                        className="card-header custom-bg-card-header border-none"
                        id="headingOne"
                      >
                        <div>
                          <h1
                            style={
                              this.state.selectedvalur === 1 ? active : deactive
                            }
                          >
                            M
                          </h1>
                        </div>
                        <hr></hr>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <input
                              className="mb-2"
                              placeholder="E-Mail"
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            ></input>
                            <h6 style={{ color: "#0266A1", fontSize: "22px" }}>
                              +
                            </h6>
                            <input
                              className="mb-3"
                              placeholder="Full Name"
                              onChange={(e) =>
                                this.setState({ fullname: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Company"
                              onChange={(e) =>
                                this.setState({ company: e.target.value })
                              }
                            ></input>

                            <input
                              placeholder="Password"
                              type="Password"
                              onChange={(e) =>
                                this.setState({ Password: e.target.value })
                              }
                            ></input>
                            <hr className="mt-4" style={{ width: "90%" }}></hr>
                            <h6>
                              See Configured Results <br></br>+<br></br>
                              Personal Engineer
                            </h6>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <p style={msgColor}>{this.state.M_msg}</p>
                            {this.state.buttonDisabled_M ? (
                              <Loader
                                type="Circles"
                                color="#2a659c"
                                height={20}
                                width={20}
                              />
                            ) : null}
                          </div>
                        </div>
                        <h5 className="mb-0">
                          <button
                            onClick={() => this.SetActivelist(1)}
                            style={
                              this.state.selectedvalur === 1
                                ? btnactive
                                : btndeactive
                            }
                            className="button-class-second"
                            data-toggle=""
                            data-target="#"
                            aria-expanded="true"
                            aria-controls=""
                          >
                            CHOOSE
                          </button>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="limitstools mt-3">
                  <div id="accordion">
                    <div className="card custom-card">
                      <div
                        className="card-header custom-bg-card-header border-none"
                        id="headingOne"
                      >
                        <div>
                          <h1
                            style={
                              this.state.selectedvalur === 2 ? active : deactive
                            }
                          >
                            L
                          </h1>
                        </div>
                        <hr></hr>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <input
                              className="mb-3"
                              placeholder="E-Mail"
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Full Name"
                              onChange={(e) =>
                                this.setState({ fullname: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-2"
                              placeholder="Company"
                              onChange={(e) =>
                                this.setState({ company: e.target.value })
                              }
                            ></input>
                            <h6 style={{ color: "#0266A1", fontSize: "22px" }}>
                              +
                            </h6>
                            <input
                              className="mb-3"
                              placeholder="Phone"
                              onChange={(e) =>
                                this.setState({ phone: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Position"
                              onChange={(e) =>
                                this.setState({ position: e.target.value })
                              }
                            ></input>

                            <input
                              placeholder="Password"
                              type="Password"
                              onChange={(e) =>
                                this.setState({ Password: e.target.value })
                              }
                            ></input>
                            <hr className="mt-4" style={{ width: "90%" }}></hr>
                            <h6>
                              See Configured Results
                              <br />
                              Personal Engineer <br />+<br></br>
                              3D Print
                            </h6>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <p style={msgColor}>{this.state.L_msg}</p>
                            {this.state.buttonDisabled_L ? (
                              <Loader
                                type="Circles"
                                color="#2a659c"
                                height={20}
                                width={20}
                              />
                            ) : null}
                          </div>
                        </div>
                        <h5 className="mb-0">
                          <button
                            onClick={() => this.SetActivelist(2)}
                            style={
                              this.state.selectedvalur === 2
                                ? btnactive
                                : btndeactive
                            }
                            className="button-class-second"
                            data-toggle=""
                            data-target="#"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            CHOOSE
                          </button>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-4 col-sm-12">
                <div className="limitstools mt-3">
                  <div id="accordion">
                    <div className="card custom-card">
                      <div
                        className="card-header custom-bg-card-header border-none"
                        id="headingOne"
                      >
                        <div>
                          <h1
                            style={
                              this.state.selectedvalur === 3 ? active : deactive
                            }
                          >
                            XL
                          </h1>
                        </div>
                        <hr></hr>
                        <div
                          id="collapseOne"
                          className="collapse show"
                          aria-labelledby="headingOne"
                          data-parent="#accordion"
                        >
                          <div className="card-body">
                            <input
                              className="mb-3"
                              placeholder="E-Mail"
                              onChange={(e) =>
                                this.setState({ email: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Full Name"
                              onChange={(e) =>
                                this.setState({ fullname: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Company"
                              onChange={(e) =>
                                this.setState({ company: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-3"
                              placeholder="Phone"
                              onChange={(e) =>
                                this.setState({ phone: e.target.value })
                              }
                            ></input>
                            <input
                              className="mb-2"
                              placeholder="Position"
                              onChange={(e) =>
                                this.setState({ position: e.target.value })
                              }
                            ></input>
                            <h6 style={{ color: "#0266A1", fontSize: "22px" }}>
                              +
                            </h6>
                            <input
                              className="mb-3"
                              placeholder="Country"
                              onChange={(e) =>
                                this.setState({ country: e.target.value })
                              }
                            ></input>

                            <input
                              placeholder="Password"
                              type="Password"
                              onChange={(e) =>
                                this.setState({ Password: e.target.value })
                              }
                            ></input>
                            <hr className="mt-4" style={{ width: "90%" }}></hr>
                            <h6>
                              See Configured Results <br />
                              Personal Engineer
                              <br></br>+<br></br>
                              Concept Development
                            </h6>
                          </div>
                          <div className="d-flex justify-content-center align-items-center">
                            <p style={msgColor}>{this.state.XL_msg}</p>
                            {this.state.buttonDisabled_XL ? (
                              <Loader
                                type="Circles"
                                color="#2a659c"
                                height={20}
                                width={20}
                              />
                            ) : null}
                          </div>
                        </div>
                        <h5 className="mb-0">
                          <button
                            onClick={() => this.SetActivelist(3)}
                            style={
                              this.state.selectedvalur === 3
                                ? btnactive
                                : btndeactive
                            }
                            className="button-class-second"
                            data-toggle=""
                            data-target="#"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            CHOOSE
                          </button>
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="pt-3">
          You already have a yourTE Account?
          <span
            className="ml-1"
            onClick={this.FlightToLogIn}
            style={{
              color: "blue",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Log me in.
          </span>
        </p>
      </div>
    );
  }
}

export default Register;
