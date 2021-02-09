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

import Cancel from "../../Assets/img/x.png";
import "./style.css";

const Filter = ({ show, close, ...props }) => {
  const { nextPage, length, loadPage ,handleFilterValue,submitFilter} = props;
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
            <div onClick={close} className="align-item-center  pt-3">
              <img src={Cancel} />
            </div>
          </div>
        </Container>
        <hr />

        <Container>
          <h3>Enter Filter Parameters</h3>
          <Form onSubmit={submitFilter}>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Start Date</Form.Label>
                  <Form.Control
                    size="sm"
                    type="date"
                    placeholder="Start Date"
                    name="startDate"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>End Date</Form.Label>
                  <Form.Control
                    size="sm"
                    type="date"
                    placeholder="Enter End Date"
                    name="endDate"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Select Status</Form.Label>
                  <Form.Control
                    size="sm"
                    as="select"
                    name="status"
                    onChange={handleFilterValue}
                  >
                    <option>Select Status</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <Row>
             {
               props.name == "transaction" ?
               <Col md={4} sm={12}>
               <Form.Group controlId="">
                 <Form.Label>{props.type} Type</Form.Label>
                 <Form.Control
                   size="sm"
                   as="select"
                   name={`${props.name}Type`}
                   onChange={handleFilterValue}
                 >
                   <option>{props.typetext}</option>
                    {props.transactionsType.map((transType, i) => {
                      return (
                        <option key={i} value={transType.id}>
                          {transType.type}
                        </option>
                      );
                    })}
                 </Form.Control>
               </Form.Group>
             </Col>
             :''
             }
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>{props.type} ID</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name={`${props.name}Id`}
                    placeholder="Enter RRN"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
            </Row>

            {
                props.name=="transaction"?
                <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>RRN</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="rrn"
                    placeholder="Enter RRN"
                    onChange={handleFilterValue}
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
                    name="pan"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>STAN</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="stan"
                    placeholder="STAN"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
            </Row>:''

            }

            

            {
              props.name=="agent" || props.name == "agentmanager" || props.name == "agentpurse"?
              <Row>
                <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    placeholder="Enter user Name"
                    name="username"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="businessName"
                    placeholder="Enter business Name"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    name="phone"
                    placeholder="phone number"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
            </Row>:
            ""
            }

          
            {
              props.name=="transaction"?
              <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Enter Terminal ID</Form.Label>
                  <Form.Control
                    size="sm"
                    type="text"
                    // variant="light"
                    name="terminalId"
                    placeholder="Enter Terminal ID"
                    onChange={handleFilterValue}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="">
                  <Form.Label>Period</Form.Label>
                  <Form.Control
                    size="sm"
                    name="period"
                    as="select"
                    onChange={handleFilterValue}
                  >
                    <option>Select Period</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            :''
            }
            <div className="filter-btns">
              <Button
                variant="outline-primary"
                className="filter-btn btn "
                type="reset"
                size="sm"
                // onClick={resetFilter}
              >
                CLEAR FILTER
              </Button>

              <Button
                variant="outline-primary"
                className="btn filter"
                type="submit"
                size="sm"
                onClick={close}
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
