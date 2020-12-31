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

const Filter= ({ show, close,...props }) => {
  return (
    <Modal
      size="xl"
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
            <div className="modal-header">Filter by</div>
            <div onClick={() => close()} className="align-item-center  pt-3">
              <img src={Cancel} />
            </div>
          </div>
        </Container>
        <hr />

        <Container>
          <h3>Enter Filter Parameters</h3>
          <Form>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Start Date"
                    // onChange={updateInput}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter End Date"
                    // onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Select Status</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"

                    // onChange={updateInput}
                  >
                    <option>Select Status</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>{props.type}Type</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    // onChange={updateInput}
                    required
                  >
                    <option>{props.typetext}</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>{props.type} ID</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    // onChange={updateInput}
                    required
                  >
                    <option>{props.idtext}</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>RRN</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter RRN"
                    // onChange={updateInput}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>PAN</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter PAN"
                    // onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>STAN</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="STAN"
                    // onChange={updateInput}
                  />
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Enter Terminal ID</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    // variant="light"
                    placeholder="Enter Terminal ID"
                    // onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Period</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"

                    // onChange={updateInput}
                  >
                    <option>Select Period</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <div className="filter-btns">
              <Button
                variant="outline-primary"
                className="filter-btn btn "
                type="submit"
                size="sm"
              >
                CLEAR FILTER
              </Button>

              <Button
                variant="outline-primary"
                className="btn filter"
                type="submit"
                size="sm"
              >
                FILTER
              </Button>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default Filter;
