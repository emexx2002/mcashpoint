import React, { useState, useEffect } from "react";
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
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  FetchState,
  FetchLga,
  FetchBank,
  CreateAgentManager,
} from "../../../Redux/requests/agentManagerRequest";
import Loader from "../../../Components/secondLoader";
import "./style.css"
const CreateAgentModal = ({
  create,
  show,
  CreateAgent: handleCreateAgent,
  close,
  FetchState: FetchStates,
  FetchLga: FetchLgas,
  FetchBank: FetchBankS,
  loading,
  agentStates,
  agentLgas,
  agentBanks,
}) => {
  const [isPublic, setIsPublic] = useState(true);

  const [logvt, setIsLogvt] = useState({});
  const [CreateAgentData, setCreateAgentData] = useState({
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    phone: "",
    accountName: "",
    accountNumber: "",
    address: "",
    accountBvn: "",
    dateOfBirth: "",
    username: "",
    nationality: "",
    identityType: "",
    stateId: "",
    lgaId: "",
    bankId: "",
  });

  useEffect(() => {
    FetchStates();
    FetchBankS();
  }, []);

  const updateInput = (event) => {
    setCreateAgentData({
      ...CreateAgentData,
      [event.target.name]: event.target.value,
    });
  };

  const _handleSelectState = (e) => {
    let stateCode = e.target.value;
    FetchLgas(stateCode);

    setCreateAgentData({
      ...CreateAgentData,
      [e.target.name]: stateCode,
    });
  };

  const _handleSelectBank = (e) => {
    let stateCode = e.target.value;
    FetchLgas(stateCode);

    setCreateAgentData({
      ...CreateAgentData,
      [e.target.name]: stateCode,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // handleCreateAgentManager(CreateAgentData);
  };

  return (
    
    <div>
        {loading && (
            <Loader
            type="TailSpin"
            type="Oval"
            height={60}
            width={60}
            color="#1E4A86"
            />
        )}

          <div className='agent-table-wrapper'>
              <h5>Create Agent</h5>
            <hr/>
          <Form onSubmit={onSubmit}>
            <h6>Personal Information</h6>
            <br />
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter first name"
                    name="firstname"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Middle Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter middle name"
                    name="middlename"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter last name"
                    name="lastname"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Date of birth</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="name@example.com"
                    name="dateOfBirth"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter email address"
                    name="email"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control
                    as="select"
                    name="gender"
                    onChange={updateInput}
                  >
                    <option>Select Gender</option>
                    <option>MALE</option>
                    <option>FEMALE</option>
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <h6>Business Information</h6>
            <br />
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Business Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter business name"
                    name="business-name"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={8} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Business Address</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Business address"
                    name="business-address"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Business Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter business phone number"
                    name="business-phone"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>State</Form.Label>
                  <Form.Control
                    name="stateId"
                    as="select"
                    onChange={_handleSelectState}
                  >
                    <option>Select your state</option>
                    {agentStates.map((state, i) => {
                      return (
                        <option key={i} value={state.stateCode}>
                          {state.stateName}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlSelect1">
                  <Form.Label>Local Govt Area</Form.Label>
                  <Form.Control as="select" name="lgaId" onChange={updateInput}>
                    <option disabled>Select your LGA</option>
                    {agentLgas.map((lga, i) => {
                      return (
                        <option value={lga.lga} key={i}>
                          {lga.lga}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>

            <br />
            <h6>Account Information</h6>
            <br />
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Account Number</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Account Number"
                    name="accountNumber"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Account Name </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter account name"
                    name="accountName"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Bank Name</Form.Label>
                  <Form.Control
                    name="stateId"
                    as="select"
                    onChange={_handleSelectBank}
                  >
                    <option>Select your bank</option>
                    {agentBanks.map((bank, i) => {
                      return (
                        <option key={i} value={bank.name}>
                          {bank.name}
                        </option>
                      );
                    })}
                  </Form.Control>
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>Account BVN</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter Account BVN"
                    name="accountBvn"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <Form.Label>User Name</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    onChange={updateInput}
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className=" text-right">
              <Button variant="primary" className="text-white " type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </div>
   </div>
    
  );
};

CreateAgentModal.propTypes = {
  show: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired,
  create: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => (
  console.log(state),
  {
    agentStates: state.agentmanager.agentStates,
    agentLgas: state.agentmanager.agentLga,
    agentBanks: state.agentmanager.agentBanks,
    loading: state.agentmanager.loading,
    error: state.agentmanager.error,
  }
);

export default connect(mapStateToProps, {
  FetchState,
  FetchLga,
  FetchBank,
  CreateAgentManager,
})(CreateAgentModal);
