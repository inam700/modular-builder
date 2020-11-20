import React, { Component } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import LiteForceConnector from "../../../assets/img/lite-force.png";
import OrdinaryConnector from "../../../assets/img/ordinary-connector.png";
import MatingForceFinal from "./matingForceFinal";
class MatingForce extends Component {
  state = {
    showModal: false,
    openModal:false
  };
  openModal = () => {
    this.setState({
      openModal: this.props.show,
    });
  };
  closeModal = () => {
    this.setState({
      openModal: !this.props.show,
    });
  };
  handleModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: true });
  };
  render() {
    return (
      <div>
        <Modal
          show={this.props.show}
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
                    />
                    <p style={{ fontSize: "10px" }}>Ordinary Connector</p>
                  </Col>
                  <Col lg={3} sm={12} className="ml-0 pl-0">
                    <img
                      src={LiteForceConnector}
                      style={{ blockSize: "125px" }}
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
                  onClick={this.handleModal}
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
        <MatingForceFinal
          show={this.state.showModal}
          closeFirst={this.closeModal}
        />
      </div>
    );
  }
}
export default MatingForce;
