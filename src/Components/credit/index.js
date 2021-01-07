import React, { useState } from "react";
import { Modal, Form, Container, Button, Row, Col } from "react-bootstrap";

import Cancel from "../../Assets/img/x.png";
import "./style.css";

const CreditDebit = ({ show, close }) => {
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
            <div className="modal-header">Credit/Debit Purse</div>
            <div onClick={close} className="align-item-center  pt-3">
              <img src={Cancel} />
            </div>
          </div>
        </Container>
        <hr />

        <Container>
          <Form>
            <Row>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Business Name</Form.Label>
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
                  <Form.Label>Action</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"

                    // onChange={updateInput}
                  >
                    <option>Select action</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter amount"
                    // onChange={updateInput}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="">
                  <Form.Label>Reason</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter reason"
                    // onChange={updateInput}
                    required
                  ></Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col xs="6">
                <Form.Group controlId="">
                  <Form.Label>Transaction ID</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter Transaction ID"
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
                SUBMIT
              </Button>
            </div>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  );
};
export default CreditDebit;
