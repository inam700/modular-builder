import React, { Component } from "react";
import "./create.css";
import img from "../../../assets/img/Image.png";
import removeIcon from "../../../assets/img/remove-icon.png";
import SettingOne from "./settingOne";
import SettingTwo from "./settingTwo";
import { Modal, Row, Col, Button } from "react-bootstrap";
import LiteForceConnector from "../../../assets/img/lite-force.png";
import OrdinaryConnector from "../../../assets/img/ordinary-connector.png";
import { Link, withRouter } from "react-router-dom";
import { callWithMethodAndData } from "../../../Services/ApiServices";
import { CableConnection } from "../../../Services/ApiUrls";

class Create extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderComponent: "SettingOne",
      height: 255,
      width: 176,
      openModal: false,
      openModalFinalize: false,
      CableConnector: {
        Name: "Name",
        Position: +localStorage.getItem("Position"),
        Rows: +localStorage.getItem("Rows"),
        OffsetChambers: +localStorage.getItem("Offset"),
        ModularConnecterId: +localStorage.getItem("componentId"),
      },
    };

    this.handleZoomIn = this.handleZoomIn.bind(this);
    this.handleZoomOut = this.handleZoomOut.bind(this);
    this.handleReset = this.handleReset.bind(this);

    // Create reference of DOM object
    this.imgRef = React.createRef();
  }

  openModal = () => {
    this.setState({
      openModal: true,
    });
  };

  openModalFinalize = () => {
    this.setState({
      openModalFinalize: true,
    });
    this.closeModal();
  };

  closeModal = () => {
    this.setState({
      openModal: false,
    });
  };

  closeModalFinalize = () => {
    this.setState({
      openModalFinalize: false,
    });
  };
  componentDidMount = () => {
    this.initialHeight = this.imgRef.current.clientHeight;
    this.initialWidth = this.imgRef.current.clientWidth;
  };
  handleZoomIn() {
    // Fetching current height and width
    const height = this.imgRef.current.clientHeight;
    const width = this.imgRef.current.clientWidth;

    // Increase dimension(Zooming)
    if (height === 325 && width === 246) {
      return null;
    } else {
      this.setState({
        height: height + 10,
        width: width + 10,
      });
    }
  }

  // Event handler callback zoom out
  handleZoomOut() {
    // Assigning original height and width
    const height = this.imgRef.current.clientHeight;
    const width = this.imgRef.current.clientWidth;

    // Increase dimension(Zooming)
    if (height === 255 && width === 176) {
      return null;
    } else {
      this.setState({
        height: height - 10,
        width: width - 10,
      });
    }
  }
  handleReset() {
    this.setState({
      height: this.initialHeight,
      width: this.initialWidth,
    });
  }
  handleRedirect = () => {
    if (localStorage.getItem("isLogin") === "true") {
    callWithMethodAndData(
      CableConnection,
      "POST",
      this.state.CableConnector
    ).then((result) => {
      let resJson = result;
      if (resJson.status === "Success") {
        console.log("Success", resJson);
      } else {
        console.log("Error while adding create data");
      }
      this.props.history.push("/adopt");
    });
    } else {
      this.props.history.push("/register");
    }
    localStorage.setItem("CreatePage", "true");
    console.log(this.state.CableConnector);
  };
  renderExactComponent = () => {
    if (this.state.renderComponent === "SettingOne") {
      return <SettingOne />;
    } else if (this.state.renderComponent === "SettingTwo") {
      return <SettingTwo handleModal={this.openModal} />;
    }
  };

  render() {
    const imgStyle = { height: this.state.height, width: this.state.width };
    return (
      <div className="container">
        <div className="create-container">
          <div className="text">
            <h2>Create your modular connector</h2>
            {console.log(localStorage.getItem("token"))}
                        <p>
              Select your cable contact and add it to your module. You can alter
              the cable contact in positions and rows.
            </p>
          </div>
          <div className="create-content">
            <div className="create-left">
              <div className="icons">
                <div className="icon">
                  <i className="fas fa-plus" onClick={this.handleZoomIn} />
                  <span style={{ marginLeft: "7px" }}>ZOOM IN</span>
                </div>
                <div className="icon">
                  <i className="fas fa-minus" onClick={this.handleZoomOut} />
                  <span>ZOOM OUT</span>
                </div>
                <div className="icon">
                  <i className="fas fa-sync-alt" onClick={this.handleReset} />
                  <span style={{ marginLeft: "15px" }}>RESET</span>
                </div>
              </div>
              <div className="image">
                <img
                  style={imgStyle}
                  ref={this.imgRef}
                  src={img}
                  alt="3D Builder"
                />
              </div>
              <div className="remove-contact">
                <div className="remove-icon">
                  <img src={removeIcon} alt="Remove" /> <p>Remove Contact</p>
                </div>
              </div>
            </div>
            <div className="create-right">
              <div className="setting-btns">
                <button
                  onClick={() => {
                    this.setState({
                      renderComponent: "SettingOne",
                    });
                  }}
                  className={
                    this.state.renderComponent === "SettingOne"
                      ? "active"
                      : "not-active"
                  }
                >
                  Choose Contact
                </button>
                <button
                  onClick={() => {
                    this.setState({
                      renderComponent: "SettingTwo",
                    });
                  }}
                  className={
                    this.state.renderComponent === "SettingTwo"
                      ? "active"
                      : "not-active"
                  }
                >
                  Setting for Current Contact
                </button>
              </div>
              {this.renderExactComponent()}
            </div>
          </div>
          <Link
            className="button"
            style={{ float: "right", marginRight: "-10px" }}
            onClick={this.handleRedirect}
          >
            Finalize
          </Link>
          <Modal
            show={this.state.openModal}
            onHide={this.closeModal}
            size="lg sm"
            centered
            dialogClassName="modal-border-radius text-center"
          >
            <Modal.Header className="mt-5 p-0 border-0">
              <Modal.Title className="font-weight-bolder w-100">
                Maximum Mating Force
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-1 text-center">
              <Row className="mb-3">
                <Col lg={12}>
                  <p className="m-0">
                    You reached the maximum mating force of 75N with this
                    connector setup.
                    <br />
                    To add more contacts please select „Lite Force“.
                  </p>
                </Col>
                <Col lg={12} className="mt-0 mb-4 pt-0">
                  <Row className="justify-content-center">
                    <Col lg={3} sm={12} className="mr-0 pr-0">
                      <img
                        src={OrdinaryConnector}
                        style={{ blockSize: "125px" }}
                        alt="OrdinaryConnector"
                      />
                      <p style={{ fontSize: "10px" }}>Ordinary Connector</p>
                    </Col>
                    <Col lg={3} sm={12} className="ml-0 pl-0">
                      <img
                        src={LiteForceConnector}
                        style={{ blockSize: "125px" }}
                        alt="LiteForceConnector"
                      />
                      <p style={{ fontSize: "10px" }}>Lite Force Connector</p>
                    </Col>
                  </Row>
                </Col>
                <Col lg={12}>
                  <p>
                    With „Lite Force“ you will reduce your required insertion
                    force by 30% and
                    <br />
                    makes assembly and disassembly a hole lot easier.
                    <br />
                    The holding power will remain the same
                  </p>
                  <Button
                    className="button border-0 mr-2"
                    style={{ backgroundColor: "var(--primary-color)" }}
                    onClick={this.openModalFinalize}
                  >
                    CONTINUE WITH LITE FORCE
                  </Button>
                  <Button
                    className="button border-0 ml-2"
                    style={{ backgroundColor: "gray" }}
                  >
                    CONTINUE WITHOUT LITE FORCE
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer className="border-0"></Modal.Footer>
          </Modal>

          <Modal
            show={this.state.openModalFinalize}
            onHide={this.closeModalFinalize}
            size="lg"
            centered
            dialogClassName="modal-border-radius custom-modal text-center"
          >
            <Modal.Header className="mt-5 p-0 border-0">
              <Modal.Title className="font-weight-bolder w-100">
                Maximum Mating Force
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="pt-1 text-center">
              <Row className="mb-3">
                <Col>
                  <p>
                    You reached the maximum mating force of 75N with this
                    connector setup.
                    <br />
                    To add more contacts please select „Lite Force“.
                  </p>
                  <Button
                    className="button border-0 mr-2"
                    style={{ backgroundColor: "var(--primary-color)" }}
                    onClick={this.closeModalFinalize}
                  >
                    FINALIZE
                  </Button>
                  <Button
                    className="button border-0 ml-2"
                    style={{ backgroundColor: "gray" }}
                  >
                    GO BACK TO CREATE
                  </Button>
                </Col>
              </Row>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    );
  }
}
export default withRouter(Create);
