import React, { useState } from "react";
import {
  Modal,
  Form,
  Container,
  Button,
 
  Row,
  Col,
} from "react-bootstrap";

import Cancel from "../../Assets/img/x.png";
import "./style.css";

const Filter = ({ show, close }) => {
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
            <div className="modal-header">Assign Terminal</div>
            <div onClick={close} className="align-item-center  pt-3">
              <img src={Cancel} />
            </div>
          </div>
        </Container>
        <hr />

        <Container>
          <h3>Assign agent to terminal</h3>
          <br />
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Agent Name</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Chinweoke Adolphus Williams"
                    // onChange={updateInput}
                    required
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Bank</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                   
                    // onChange={updateInput}
                  >
                    <option>Select Bank</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Terminal ID</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Terminal ID"
                    // onChange={updateInput}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Activation Code</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Activation Code"
                    // onChange={updateInput}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <div className="filter-btns">
              <Button
                variant="outline-primary"
                className="filter-btn  "
                type="submit"
              >
                CANCEL
              </Button>

              <Button
                variant="outline-primary"
                className=" filter "
                type="submit"
              >
                ASSIGN
              </Button>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default Filter;
