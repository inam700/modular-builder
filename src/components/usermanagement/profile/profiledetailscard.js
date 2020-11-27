import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./style.css";
import "../dev2.css";
import DisplayPic from "../../../img/dp.jpg";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import { Row, Col } from "react-bootstrap";
import {
  callWithMethodAndNoData,
  callWithMethodAndData,
} from "../../../Services/ApiServices";
import { faObjectUngroup } from "@fortawesome/free-solid-svg-icons";

export class profiledetailcard extends Component {
  constructor(props) {
    super(props);
    this.makeeditable = this.makeeditable.bind(this);
    this.state = {
      ShowME: true,
      Selectedfile: null,
      iseditable: false,
      SelectedCheck: true,
      usercolorcode: "#XXXXXX",
      NoEdit: true,
      Name: "",
      Email: "",
      CompanyName: "",
      phoneNum: "",
      position: "",
      password: "",
      file: "",
      Selectedfile: require("../../../img/dummyprofile.png"),
      fileName: "",
      fileuploaded: false,
      profilePic: "",
      id: "",
    };
  }

  componentDidMount() {
    let method = "GET";
    let type = "ModularBuilder/profile";
    console.log(type);
    callWithMethodAndNoData(type, method).then((result) => {
      let responsejson = result;
      let obj = responsejson.data.user;
      console.log(responsejson);
      if (responsejson.status === "Success") {
        this.setState({
          Name: obj.fullName,
          Email: obj.email,
          CompanyName: obj.company,
          phoneNum: obj.mobile,
          password: obj.password,
          id: obj.id,
          position: obj.position,
          profilePic: obj.profilePic,
          profileType: obj.profileType,
        });
        localStorage.setItem("profileType", obj.profileType);
        localStorage.setItem("fullName", obj.fullName);
      }
    });
  }
  operation() {
    this.setState({
      ShowME: null,
    });
  }
  makeeditable() {
    this.setState({
      NoEdit: false,
    });
    alert("Changings saved successfully");
  }
  upload = (e) => {
    let selectedFile = e.target.files;
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        base64: reader.result,
      });
    };
  };
  valid(item, type) {
    let datavalue = item.target.value;

    //console.log("straight date",dateSl)
    if (type === "name") {
      this.setState({
        Name: datavalue,
      });
    }
    if (type === "company") {
      this.setState({
        CompanyName: datavalue,
      });
    }
    if (type === "phone") {
      this.setState({
        phoneNum: datavalue,
      });
    }
    if (type === "position") {
      this.setState({
        position: datavalue,
      });
    }
    if (type === "password") {
      this.setState({
        password: datavalue,
      });
    }
  }
  submit = () => {
    let obj = {};
    obj.id = this.state.id;
    obj.profileType = localStorage.getItem("profileType");
    obj.password = this.state.password;
    obj.email = this.state.Email;
    obj.fullName = this.state.Name;
    obj.mobile = this.state.phoneNum;
    obj.company = this.state.CompanyName;
    obj.position = this.state.position;
    obj.adress = null;
    obj.profilePic = this.state.profilePic;
    let method = "PUT";
    let type = "ModularBuilder/updateProfile";
    callWithMethodAndData(type, method, obj).then((result) => {
      let responsejson = result;
      console.log(responsejson);
      if (responsejson.status === "Success") {
        window.location.reload();
      }
    });
  };

  onChangeProfileImg = (e) => {
    console.log(e.target.files[0].name);
    e.preventDefault();
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      this.setState({
        file: file,
        base64: reader.result,
        profilePic: "",
      });

      this.setState({
        Selectedfile: URL.createObjectURL(file),
        fileName: file.name,
        fileuploaded: true,
      });

      console.log(this.state.base64.split("base64,")[1]);
    };
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-2">
            <p className="myprofilecarddesign">Full Name</p>
            <p className="myprofilecarddesign">E-Mail Address</p>
            <p className="myprofilecarddesign">Company Name</p>
            <p className="myprofilecarddesign">Phone Number</p>
            <p className="myprofilecarddesign">Position</p>
            <div className="row">
              <Button
                className="profilebtns textuppercase ml-3 "
                onClick={() => {
                  this.submit();
                }}
              >
                edit
              </Button>
            </div>
          </div>

          <div className="col-2 pb-5">
            <p className="myprofilecarddesign">
              {" "}
              <input
                onChange={(item) => this.valid(item, "name")}
                value={this.state.Name}
                style={{ border: "none", outline: "none" }}
              ></input>
            </p>
            <p className="myprofilecarddesign">
              {" "}
              <input
                value={this.state.Email}
                style={{ border: "none", outline: "none" }}
              ></input>
            </p>
            <p className="myprofilecarddesign">
              {" "}
              <input
                onChange={(item) => this.valid(item, "company")}
                value={this.state.CompanyName}
                style={{ border: "none", outline: "none" }}
              ></input>
            </p>
            <p className="myprofilecarddesign">
              {" "}
              <input
                onChange={(item) => this.valid(item, "phone")}
                value={this.state.phoneNum}
                style={{ border: "none", outline: "none" }}
              ></input>
            </p>
            <p className="myprofilecarddesign">
              {" "}
              <input
                onChange={(item) => this.valid(item, "position")}
                style={{ border: "none", outline: "none" }}
                value={this.state.position}
              ></input>
            </p>
          </div>
          {/* <div className="col-sm-3 pl-5 d-flex">
          </div> */}
          <div className="col-2">
            <p className="myprofilecarddesign">Password</p>
          </div>
          <div className="col-2">
            <p className="myprofilecarddesign">
              {" "}
              <input
                onChange={(item) => this.valid(item, "password")}
                className="passwordinputfield"
                style={{ textAlign: "left", border: "none" }}
                type="password"
                value={this.state.password}
                placeholder="XXXXXXXXXX"
              ></input>
            </p>
          </div>
          <div className="col-sm-3 pl-5 d-flex">
            <Card className="myporfilecard">
              <div className="userCard pl-2">
                {this.state.profilePic ? (
                  <img
                    className=" ml-5 avater m-0 font-weight-bold"
                    src={DisplayPic}
                    alt="Image"
                  />
                ) : (
                  <img
                    className=" ml-5 avater m-0 font-weight-bold"
                    src={DisplayPic}
                    alt="Image"
                  />
                )}
                <div className="row">
                  <input
                    id="files"
                    onClick={() => {
                      this.operation();
                    }}
                    onChange={(e) => this.onChangeProfileImg(e)}
                    style={{ display: "none" }}
                    ref={(fileinput) => (this.fileinput = fileinput)}
                    type="file"
                  />
                  <label
                    className="fileuploadbtn"
                    onClick={() => this.fileinput.click()}
                  >
                    Change Profile Picture{" "}
                  </label>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default profiledetailcard;
