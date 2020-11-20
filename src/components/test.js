import React, { Component } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";
import LiteForceConnector from '../assets/img/lite-force.png'
import OrdinaryConnector from '../assets/img/ordinary-connector.png'
class Test extends Component {
  state = {
    openModal: true,
    openModalFinalize: false,
  };
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
  render() {
    return (
      <div>
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
          onHide={this.state.closeModalFinalize}
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
    );
  }
}

export default Test;
