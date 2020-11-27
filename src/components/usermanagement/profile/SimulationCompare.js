import React, { Component } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretLeft,
  faCircle,
  faCross,
  faEdit,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import Line from "../../../img/Line 3.png";
import {
  dataPost,
  dataHeaderGeneral,
  dataHeaderInputGen,
} from "../../../assets/ApiServices";
import "../../simulatorconfiguration/simulation/simulation.css";
import { Button } from "react-bootstrap";
import updown from "../../../img/updown.png";
import saveicon from "../../../img/save-icon.png";
import pdficon from "../../../img/pdf-icon.png";
import plus from "../../../img/plus.png";
import ErrorImg from "../../../img/g4811.png";
import ErrorLine from "../../../img/Line 218.png";
import jsPDF from "jspdf";
import domtoimage from "dom-to-image";
/**
 * @author
 * @class SimulationCompare
 **/

class SimulationCompare extends Component {
  state = {
    simulationData1: [],
    simulationData2: [],
    data: JSON.parse(localStorage.getItem("GroupcompIDs")),
    simName1: "",
    simName2: "",
    showHeader1: false,
    showHeader2: false,
    MergeGraphData: [],
    graphdata1: [],
    graphdata2: [],
    xAxisValue: [0, 9],
    yAxisValue: [-50, 50],
    graphType: "linear",
  };

  componentDidMount() {
    console.log("componentDidMount");
    var data = this.state.data;
    console.log("data", data[0]);
    console.log("data", data[1]);
    let method = "GET";
    if (data.length != 0) {
      if (data.length != 0) {
        let type = "simulations/getSimulation?id=" + data[0];
        dataHeaderGeneral(type, method).then((result) => {
          let responsejson = result;
          console.log(
            "first call",
            JSON.parse(responsejson.data.simulation.series)
          );
          if (responsejson.status === "Success") {
            console.log("first response", responsejson);
            this.setState({
              simulationData1: JSON.parse(responsejson.data.simulation.buttons),
              simName1: responsejson.data.simulation.simulationName,
              showHeader1: true,
            });
            var G1 = JSON.parse(responsejson.data.simulation.series);
            console.log("G1", G1);
            var Graph1 = G1.flat(1);
            Graph1.map((Detail) => {
              if (Detail.name === "IL Range") {
                return (Detail.visible = false), (Detail.type = "line");
              } else {
                return (Detail.type = "line");
              }
            });
            console.log("update data", Graph1);
            if (data.length != 2) {
              alert("work");
              window.simulationGraph(
                Graph1,
                this.state.xAxisValue,
                this.state.yAxisValue,
                this.state.graphType
              );
              this.setState({
                MergeGraphData: [...Graph1],
              });
            }

            console.log("update data merge", this.state.MergeGraphData);
          }
          if (data.length == 2) {
            this.setState({
              MergeGraphData: [],
            });
            let type = "simulations/getSimulation?id=" + data[1];
            dataHeaderGeneral(type, method).then((result) => {
              let responsejson = result;
              console.log(
                "second call",
                JSON.parse(responsejson.data.simulation.series)
              );
              if (responsejson.status === "Success") {
                console.log("Second response", responsejson);
                this.setState({
                  simulationData2: JSON.parse(
                    responsejson.data.simulation.buttons
                  ),
                  simName2: responsejson.data.simulation.simulationName,
                  showHeader2: true,
                  graphdata2: JSON.parse(responsejson.data.simulation.series),
                });
                var G2 = JSON.parse(responsejson.data.simulation.series);
                var Graph2 = G2.flat(1);
                console.log("data for series", G2);
                var colors = [];
                Graph2.map((Detail, i) => {
                  if (Detail.name === "IL Range") {
                    return (
                      (Detail.visible = false),
                      (Detail.type = "line"),
                      (Detail.color = colors[i])
                    );
                  } else {
                    return (Detail.type = "line"), (Detail.color = colors[i]);
                  }
                });
                console.log("update data 2", Graph2);
                this.setState({
                  graphdata2: Graph2,
                  MergeGraphData: [...Graph1, ...Graph2],
                });
                window.simulationGraph(
                  this.state.MergeGraphData,
                  this.state.xAxisValue,
                  this.state.yAxisValue,
                  this.state.graphType
                );
                console.log("update data 2 merge", this.state.MergeGraphData);
                console.log("data 2", this.state.graphdata2.flat(1));
              }
            });
          }
          //  console.log("update data  merge after api call", this.state.MergeGraphData)
        });
      }
    }
  }
  downloadPdf = (event) => {
    domtoimage
      .toJpeg(document.getElementById("container-graph"), { quality: 0.95 })
      .then(function (dataUrl) {
        const pdf = new jsPDF();
        pdf.addImage(dataUrl, "JPEG", 0, 0);
        pdf.save("download.pdf");
      });
  };

  takeScreenshot = (event) => {
    domtoimage
      .toJpeg(document.getElementById("container-graph"), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement("a");
        link.download = "my-image-name.jpeg";
        link.href = dataUrl;
        link.click();
      });
  };

  render() {
    const headerleftright = {
      position: "relative",
      marginTop: "auto",
      marginBottom: "auto",
    };

    const root = {
      width: 300,
    };

    const iconDisplay = {
      display: "grid",
    };
    return (
      <div className="ml-5">
        <div className="row ml-2 mt-3">
          <div className="col-1 mr-0 p-0  pt-2 w-100 overviewheadings">
            <FontAwesomeIcon
              className="Icons"
              style={{
                color: '#2A659C"',
                fontSize: "30px",
                marginBottom: "15px",
              }}
              icon={faCaretLeft}
            ></FontAwesomeIcon>
          </div>
          <div className="col-11 ml-0 pl-0 ">
            <div className="overviewheadings ">
              <p className="textuppercase pl-0"> Comparison</p>
            </div>
          </div>
        </div>

        <div className="simulation  pt-2 pb-0 ml-0 mr-0">
          <div className=" ml-2 pl-3 w-100 mr-0">
            <div className="main-section">
              <div
                className="row w-100"
                style={this.state.showHeader1 ? {} : { display: "none" }}
              >
                <div
                  className="col-2"
                  style={{ backgroundColor: "#b1d49d" }}
                  id="btnGridsm"
                >
                  <p
                    style={{
                      marginTop: "60px",
                      fontSize: "18px",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {this.state.simName1}
                  </p>
                </div>
                <div
                  className="col-7 d-flex pl-5 pt-2 pr-0"
                  style={{ backgroundColor: "#e7f2e1" }}
                >
                  <div className="w-100">
                    <div className="row">
                      <div className="col-lg-12 w-100 d-flex ">
                        {this.state.simulationData1.map((s) => {
                          if (s.type == "header") {
                            return (
                              <div style={headerleftright}>
                                <div className="d-flex align-items-center">
                                  <div className="left-header">
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.ports },
                                        (item, index) =>
                                          index == s.activePort && s.error ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.activePort &&
                                            !s.error ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <p
                                  onClick={() =>
                                    this.openModalHeader(s.id, s.type)
                                  }
                                >
                                  Header
                                </p>
                              </div>
                            );
                          } else {
                            return (
                              <div className="assembles">
                                <div className="assembly">
                                  {s.cableNo == 1 && s.leftError ? (
                                    <div>
                                      <img
                                        className="error-img"
                                        src={ErrorImg}
                                        alt=""
                                        width="20"
                                        height="20"
                                      ></img>
                                      <img src={ErrorLine} alt=""></img>
                                    </div>
                                  ) : s.cableNo == 1 && !s.leftError ? (
                                    <img src={Line} alt=""></img>
                                  ) : (
                                    <></>
                                  )}
                                  <div
                                    className={
                                      "left-header ml-3 widths" +
                                      (s.leftError ? " error-grid" : "")
                                    }
                                  >
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.leftPorts },
                                        (item, index) =>
                                          index == s.leftActivePort &&
                                          s.leftError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.leftActivePort &&
                                            !s.leftError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>

                                  <div className="wire mb-2">
                                    <p className="length-custom">
                                      {s.cableLength}m
                                    </p>
                                  </div>

                                  <div
                                    className={
                                      "right-header mr-3 widths" +
                                      (s.rightError ? " error-grid" : "")
                                    }
                                  >
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.rightPorts },
                                        (item, index) =>
                                          index == s.rightActivePort &&
                                          s.rightError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.rightActivePort &&
                                            !s.rightError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>
                                  {s.rightError ? (
                                    <div>
                                      <img
                                        className="error-img"
                                        src={ErrorImg}
                                        alt=""
                                        width="20"
                                        height="20"
                                      ></img>
                                      <img src={ErrorLine} alt=""></img>
                                    </div>
                                  ) : (
                                    <img src={Line} alt=""></img>
                                  )}
                                </div>
                                <p
                                  className="assembly-heading"
                                  onClick={() =>
                                    this.openModalAssembly(s.id, s.type)
                                  }
                                >
                                  {s.cableNo}. Assembly
                                </p>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="simulation pt-0 pb-0 pr-2 pt-2 pb-0 ml-0 mr-2">
          <div className=" w-100 ml-2 pl-3 mr-0 pr-3">
            <div className="main-section">
              <div
                className="row"
                style={this.state.showHeader2 ? {} : { display: "none" }}
              >
                <div
                  className="col-2"
                  style={{ backgroundColor: "	#d65b59" }}
                  id="btnGridsm"
                >
                  <p
                    style={{
                      marginTop: "60px",
                      fontSize: "18px",
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    {this.state.simName2}
                  </p>
                </div>
                <div
                  className="col-7 d-flex pl-5 pt-2"
                  style={{ backgroundColor: "#f3cdcd" }}
                >
                  <div className="w-100">
                    <div className="row">
                      <div className="col-lg-12 w-100 d-flex ">
                        {this.state.simulationData2.map((s) => {
                          if (s.type == "header") {
                            return (
                              <div style={headerleftright}>
                                <div className="d-flex align-items-center">
                                  <div className="left-header">
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.ports },
                                        (item, index) =>
                                          index == s.activePort && s.error ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.activePort &&
                                            !s.error ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>
                                </div>
                                <p
                                  onClick={() =>
                                    this.openModalHeader(s.id, s.type)
                                  }
                                >
                                  Header
                                </p>
                              </div>
                            );
                          } else {
                            return (
                              <div className="assembles">
                                <div className="assembly">
                                  {s.cableNo == 1 && s.leftError ? (
                                    <div>
                                      <img
                                        className="error-img"
                                        src={ErrorImg}
                                        alt=""
                                        width="20"
                                        height="20"
                                      ></img>
                                      <img src={ErrorLine} alt=""></img>
                                    </div>
                                  ) : s.cableNo == 1 && !s.leftError ? (
                                    <img src={Line} alt=""></img>
                                  ) : (
                                    <></>
                                  )}
                                  <div
                                    className={
                                      "left-header ml-3 widths" +
                                      (s.leftError ? " error-grid" : "")
                                    }
                                  >
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.leftPorts },
                                        (item, index) =>
                                          index == s.leftActivePort &&
                                          s.leftError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.leftActivePort &&
                                            !s.leftError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>

                                  <div className="wire mb-2">
                                    <p className="length-custom">
                                      {s.cableLength}m
                                    </p>
                                  </div>

                                  <div
                                    className={
                                      "right-header mr-3 widths" +
                                      (s.rightError ? " error-grid" : "")
                                    }
                                  >
                                    <div
                                      className="myIcons"
                                      style={iconDisplay}
                                    >
                                      {Array.from(
                                        { length: s.rightPorts },
                                        (item, index) =>
                                          index == s.rightActivePort &&
                                          s.rightError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#D00B0B" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : index == s.rightActivePort &&
                                            !s.rightError ? (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#04C740" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          ) : (
                                            <FontAwesomeIcon
                                              key={index}
                                              className="Icons"
                                              style={{ color: "#707070" }}
                                              icon={faCircle}
                                            ></FontAwesomeIcon>
                                          )
                                      )}
                                    </div>
                                  </div>
                                  {s.rightError ? (
                                    <div>
                                      <img
                                        className="error-img"
                                        src={ErrorImg}
                                        alt=""
                                        width="20"
                                        height="20"
                                      ></img>
                                      <img src={ErrorLine} alt=""></img>
                                    </div>
                                  ) : (
                                    <img src={Line} alt=""></img>
                                  )}
                                </div>
                                <p
                                  className="assembly-heading"
                                  onClick={() =>
                                    this.openModalAssembly(s.id, s.type)
                                  }
                                >
                                  {s.cableNo}. Assembly
                                </p>
                              </div>
                            );
                          }
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row pl-2 pt-2">
            <div className="col-1 d-flex">
              <img src={plus}></img>{" "}
              <p className="m-0 pt-1 pl-1" style={{ color: " #2A659C" }}>
                Add link
              </p>
            </div>
            <div className="col-1 d-flex"></div>
            <div className="col-11"></div>
          </div>
          <div className="row mt-3">
            <div className="col-1"></div>
            <div className="col-7">
              <div
                className="d-flex justify-content-center align-items-center"
                style={{ display: "inline-grid", height: "96%", maxWidth: 800 }}
              >
                <div id="container-graph"></div>
              </div>
            </div>
            <div className="col-2" id="btnGridsm">
              <div className="limitstools mt-3">
                <div id="accordion">
                  <div className="card mt-3">
                    <div className="card-header" id="headingTwo">
                      <h5 className="mb-0">
                        <button
                          className="button-class"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="true"
                          aria-controls="collapseTwo"
                        >
                          tools <img src={updown}></img>
                        </button>
                      </h5>
                    </div>

                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion"
                    >
                      <div className="card-body">
                        <p className="mb-0">Export</p>
                        <div className="row">
                          <div className="col-12 col-adjust">
                            <div
                              style={{ cursor: "pointer" }}
                              className="d-flex justify-content-start align-items-center mt-2 mb-3"
                              onClick={this.takeScreenshot}
                            >
                              <img src={saveicon}></img>
                              <label>Screenshot</label>
                            </div>
                            <div
                              style={{ cursor: "pointer" }}
                              className="d-flex justify-content-start align-items-center mb-4"
                              onClick={this.downloadPdf}
                            >
                              <img src={pdficon}></img>
                              <label>Generate PDF</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

SimulationCompare.propTypes = {};
export default SimulationCompare;
