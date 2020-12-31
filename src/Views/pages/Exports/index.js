import React, { useState } from "react";
import {
  Modal,
  Form,
  Container,
  Button,
  Row,
} from "react-bootstrap";

import Cancel from "../../../Assets/img/x.png";
import "./style.css";

const ExportLink = ({ show, close }) => {
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

        <Container>
          <h3>Select Export Type</h3>
          <Form>
            <Row>
              <Button className="pdf export-btn" variant="light" type="submit">
                Export PDF
              </Button>

              <Button
                className="excel export-btn"
                variant="light"
                type="submit"
              >
                Export Excel
              </Button>

              <Button className="csv export-btn" variant="light" type="submit">
                Export CSV
              </Button>

              <Button  className="clip export-btn" type="submit">
                Copy to Clipboard
                
              </Button>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default ExportLink;
