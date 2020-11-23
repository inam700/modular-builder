import React, { Component } from "react";
import "./login.css";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    loginMsg: "",
    color: "green",
    email: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const loginMsgColor = {
      color: this.state.color,
    };
    return (
      <div>
        <div className="login">
          <div className="container">
            <p>Sign in with your myTE Account</p>
            <div className="row justify-content-center mt-5">
              <div className="col-lg-4 col-md-12 col-sm-12">
                <form>
                  <input
                    className="mb-4"
                    type="text"
                    name="email"
                    placeholder="Email Address"
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                  <p style={loginMsgColor} className="mb-0">
                    {this.state.loginMsg}
                  </p>

                  <button>Sign in</button>
                  <Link to="/">Forget password?</Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
