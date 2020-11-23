import React, { Component } from "react";
import "./login.css";
import { baseUrl } from "../../redux/BaseUrl";
import {forgotPassword} from '../../Services/ApiUrls'

class ForgotPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      enabledisable: false,
      loginMsg: "",
      color: "green",
    };
  }

  OnLogin = () => {
    if (this.state.email === "") {
      this.setState({
        enabledisable: false,
        loginMsg: "Fields must be filled !",
        color: "red",
      });
    } else {
      this.setState({
        enabledisable: true,
        loginMsg: "Please wait !",
        color: "green",
      });

      fetch(baseUrl + forgotPassword + this.state.email, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          projectId: 7,
        },
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status === "Success") {
            console.log(res);

            this.setState(
              {
                email: "",
                password: "",
                loginMsg: "Please check your email !",
                color: "green",
                enabledisable: false,
              },
              () => {
                // After Login sucessfully
                //window.location = "./temperature";
              }
            );
          } else {
            console.log("Else response :");
            console.log(res);
            this.setState({
              enabledisable: false,
              loginMsg: res.error.message,
              color: "red",
            });
          }
        })
        .catch((error) => {
          console.log("Error :" + error);
          this.setState({
            enabledisable: false,
            loginMsg: "incorrect email or password " + error,
            color: "red",
          });
        });
    }
  };
  render() {
    const loginMsgColor = {
      color: this.state.color,
    };

    return (
      <div>
        <div className="login">
          <div className="container">
            <p>Please Enter your Registered email address.</p>

            <div className="row justify-content-center mt-5">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div action="">
                  <input
                    className="mb-4"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  {/* <input type="password" placeholder="Password" onChange={(e) => this.setState({ password: e.target.value })} /> */}
                  <p style={loginMsgColor} className="mb-0">
                    {this.state.loginMsg}
                  </p>
                  {/* <div class="checkbox-wrapper">
                                        <div class="pretty p-default">
                                            <input type="checkbox" />
                                            <div class="state">
                                                <label>Remember me</label>
                                            </div>
                                        </div>
                                    </div> */}

                  {this.state.enabledisable === false ? (
                    <button onClick={this.OnLogin}>Send</button>
                  ) : (
                    <button style={{ opacity: "0.7" }} disabled>
                      Send
                    </button>
                  )}
                  {/* <Link to={"/forgotpassword"} href="#">Forget password?</Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ForgotPassword;
