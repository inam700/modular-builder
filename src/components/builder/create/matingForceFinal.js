import React, { Component } from "react";
import { Modal, Row, Col, Button } from "react-bootstrap";

class MatingForceFinal extends Component {
  state = {
    openModalFinalize: this.props.show,
  };
  openModalFinalize = () => {
    this.setState({
      openModalFinalize: this.props.show,
    });
    this.props.closeFirst();
  };

  closeModalFinalize = () => {
    this.setState({
      openModalFinalize: !this.props.show,
    });
  };
  render() {
    return (
      <div>
        <Modal
          show={this.openModalFinalize}
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
    );
  }
}
export default MatingForceFinal;
