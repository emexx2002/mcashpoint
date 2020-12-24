import React, { useState } from 'react';
import { Modal, Form, Container, Button, Image, Row, Col } from "react-bootstrap";
import Cancel from "../../../Assets/img/x.png";

const createRole = ({ create, show, close }) => {
    return (
      <Modal
        size="lg"
        show={show}
        onHide={close}
        aria-labelledby="edit-profile-modal"
        className="rounded border"
      >
        <Modal.Body>
          <Container>
            <div
              className="header-wrapper d-flex justify-content-between align-item-center  justify-content-center"
              justify-content-center
            >
              <div className="modal-header">Create Role Group</div>
              <div onClick={() => close()} className="align-item-center  pt-3">
                <img src={Cancel} />
              </div>
            </div>
          </Container>

          <hr />
          <Container>
            <Form>
              <Row>
                <Col md={4} sm={12}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Role Group Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Role group name"
                      onChange={""}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Label>Select Role Permission</Form.Label>
              {["checkbox"].map((type) => (
                <div key={`default-${type}`} className="mb-3">
                  <Form.Check
                    type={type}
                    id="view-dashboard"
                    label="View Dashboard "
                  />
                  <Form.Check
                    type={type}
                    id="view-transaction"
                    label="View All Transactions "
                  />
                  <Form.Check
                    type={type}
                    id="view-set-agent-fee"
                    label="View and Set Agent Fee "
                  />
                  <Form.Check
                    type={type}
                    id="view-admin"
                    label="View All Admin "
                  />
                  <Form.Check
                    type={type}
                    id="create-agent"
                    label="Create Agent "
                  />
                  <Form.Check type={type} id="view-agent" label="View Agent " />
                  <Form.Check
                    type={type}
                    id="create-role-group"
                    label="Create Role Group "
                  />
                  <Form.Check
                    type={type}
                    id="view-aggregator"
                    label="View Aggregator "
                  />
                  <Form.Check
                    type={type}
                    id="create-aggregator"
                    label="Create Aggregator "
                  />
                  <Form.Check
                    type={type}
                    id="view-report"
                    label="View Report "
                  />
                  <Form.Check
                    type={type}
                    id="view-audit-log"
                    label="View Audit Log "
                  />
                  <Form.Check
                    type={type}
                    id="create-admin"
                    label="Create Admin"
                  />
                  <Form.Check
                    type={type}
                    id="view-central-purse"
                    label="View Central Purse"
                  />
                  <Form.Check
                    type={type}
                    id="settle-aggregator"
                    label="Settle Aggregator"
                  />
                </div>
              ))}

              <div className=" text-right">
                <Button variant="primary" className="text-white " type="submit">
                  Submit
                </Button>
              </div>
            </Form>
          </Container>
        </Modal.Body>
      </Modal>
    );

}
 export default createRole;
