import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";
import { baseUrl } from "../../redux/BaseUrl";
import { LoginUrl } from "../../Services/ApiUrls";

export class login extends Component {
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
    if (this.state.email === "" || this.state.password === "") {
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

      fetch(baseUrl + LoginUrl, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectid: 4,
          email: this.state.email,
          password: this.state.password,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status === "Success") {
            console.log(res);
            console.log(res.data.fullName);
            console.log(res.data.email);
            console.log(res.data.token);
            console.log(res.data.id);

            localStorage.setItem("username", res.data.fullName);
            localStorage.setItem("email", res.data.email);
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("id", res.data.id);
            localStorage.setItem("RefreshToken", res.data.refreshToken);
            this.setState(
              {
                email: "",
                password: "",
                loginMsg: "Login Sucessfully !",
                color: "green",
                enabledisable: false,
              },
              () => {
                // After Login sucessfully
                window.location = "/";
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
        <div class="login">
          <div class="container">
            <p>Sign in with your myTE Account</p>

            <div class="row justify-content-center mt-5">
              <div class="col-lg-4 col-md-12 col-sm-12">
                <div action="">
                  <input
                    class="mb-4"
                    type="text"
                    placeholder="Email Address"
                    onChange={(e) => this.setState({ email: e.target.value })}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    onChange={(e) =>
                      this.setState({ password: e.target.value })
                    }
                  />
                  <p style={loginMsgColor} className="mb-0">
                    {this.state.loginMsg}
                  </p>
                  <div class="checkbox-wrapper">
                    <div class="pretty p-default">
                      <input type="checkbox" />
                      <div class="state">
                        <label>Remember me</label>
                      </div>
                    </div>
                  </div>

                  {this.state.enabledisable === false ? (
                    <button onClick={this.OnLogin}>Sign in</button>
                  ) : (
                    <button style={{ opacity: "0.7" }} disabled>
                      Sign in
                    </button>
                  )}
                  <Link to={"/forgotpassword"} href="#">
                    Forget password?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default login;
