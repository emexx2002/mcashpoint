import React, { useState } from "react";
import {
  Modal,
  Form,
  Container,
  Button,
  Image,
  Row,
  Col,
} from "react-bootstrap";

import Cancel from "../../../Assets/img/x.png";
import "./style.css";

const ExportLink = ({ create, show, close }) => {
  return (
    <Modal
      size="lg"
      show={show}
      onHide={close}
      centered={true}
      aria-labelledby="edit-profile-modal"
      className="rounded border"
    >
      <Modal.Body>
        <Container>
          <div
            className="header-wrapper d-flex justify-content-between align-item-center  justify-content-center"
            justify-content-center
          >
            <div className="modal-header">Export</div>
            <div onClick={() => close()} className="align-item-center  pt-3">
              <img src={Cancel} />
            </div>
          </div>
        </Container>
        <hr />
        <p>Select Export Type</p>
        <Container>
          <Form>
            <div className="btn">
              <Row>
                <Col xs="auto">
                  <Button className="pdf" variant="light" type="submit">
                    Export PDF
                  </Button>
                </Col>

                <Col xs="auto">
                  <Button className="excel" variant="light" type="submit">
                    Export Excel
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button className="csv" variant="light" type="submit">
                    Export CSV
                  </Button>
                </Col>
                <Col xs="auto">
                  <Button className="clip" variant="light" type="submit">
                    Copy to ClipBoard
                  </Button>
                </Col>
              </Row>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ExportLink;
