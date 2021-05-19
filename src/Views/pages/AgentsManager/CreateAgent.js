import React, { useState, useEffect } from 'react';
import { Modal, Form, Container, Button, Image, Row, Col, Alert } from "react-bootstrap";
import Cancel from '../../../Assets/img/x.png'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchState, FetchLga, FetchBank, CreateAgentManager } from "../../../Redux/requests/agentManagerRequest";
import Loader from "../../../Components/secondLoader"


const CreateAgentModal = ({
    create, show, CreateAgentManager: handleCreateAgentManager, close, FetchState: FetchStates, FetchLga: FetchLgas, FetchBank: FetchBankS, loading, agentStates, agentLgas, agentBanks, success, error, erroMessage
}) => {
    console.log(error, erroMessage)
    const [isPublic, setIsPublic] = useState(true);
    const [errors, setErrors] = useState([]);
    const [successMessage, SetSuccessMessage] = useState([]);

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
        bankId: ""
    });

    useEffect(() => {
        FetchStates();
        FetchBankS();
    }, []);

    useEffect(() => {
        console.log(error, erroMessage)
        if (erroMessage) {
            if (error && erroMessage.error != "User with the provided username already exists.") {
                return setErrors(['There was an error sending your request, please try again later.']);
            } else if (erroMessage) {
                return setErrors(erroMessage.error);
            }
        }

    }, [error, erroMessage]);

    useEffect(() => {
        if (success) {
            return SetSuccessMessage(['operation Successful']);
        }
    }, [success]);

    const updateInput = (event) => {
        setCreateAgentData({
            ...CreateAgentData, [event.target.name]: event.target.value
        });
    };


    //   const _handleSelectState = (e) => {
    //     let stateCode = e.target.value;
    //     FetchLgas(stateCode)

    //     setCreateAgentData({
    //       ...CreateAgentData, [e.target.name]: stateCode
    //     });
    //   };
    const _handleSelectState = (e) => {
        agentStates.map((state, i) => {  
            let stateId = state.id;

            setCreateAgentData({
                ...CreateAgentData,
                [e.target.name]: stateId,
            });
        })
        let stateCode = e.target.value;
        FetchLgas(stateCode);


    };


    const _handleSelectBank = (e) => {
        let stateCode = e.target.value;
        FetchLgas(stateCode)

        setCreateAgentData({
            ...CreateAgentData, [e.target.name]: stateCode
        });
    };


    const onSubmit = (event) => {
        setErrors([])
        SetSuccessMessage([])
        event.preventDefault();
        handleCreateAgentManager(CreateAgentData);

    }

    return (
        <Modal
            size="lg"
            show={show}
            onHide={close}
            aria-labelledby="edit-profile-modal"
            className="rounded border"
        >
            {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}

            <Modal.Body >
                <Container>
                    <div className='header-wrapper d-flex justify-content-between align-item-center  justify-content-center' justify-content-center>
                        <div className='modal-header'>Add Agent Manager</div>
                        <div onClick={() => close()} className='align-item-center  pt-3'><img src={Cancel} /></div>
                    </div>
                </Container>
                <hr />
                <Container>
                    <Form onSubmit={onSubmit}>
                        {
                            success ? <Alert variant="success">{successMessage}</Alert> : null
                        }
                        {
                            error ? <Alert variant="danger">{errors}</Alert> : null
                        }
                        <div>Personal Infromation</div>
                        <br />
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>FIRST NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter first name" name='firstname' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>MIDDLE NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter middle name" name='middlename' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>LAST NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter last name" name='lastname' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>USER NAME</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" name='username' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>EMAIL</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email address" name='email' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>PHONE NUMBER</Form.Label>
                                    <Form.Control type="text" placeholder="Enter phone number" name='phone' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Gender</Form.Label>
                                    <Form.Control as="select" name='gender' onChange={updateInput} required>
                                        <option>Select Gender</option>
                                        <option>MALE</option>
                                        <option>FEMALE</option>

                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={8} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control type="text" placeholder="Enter address" name='address' onChange={updateInput} required />
                                </Form.Group>
                            </Col>

                        </Row>
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1"   >
                                    <Form.Label>State</Form.Label>
                                    <Form.Control name="stateId" as="select" onChange={_handleSelectState} required>
                                        <option >Select your state</option>
                                        {
                                            agentStates.map((state, i) => {
                                                return <option key={i} value={state.stateCode}>{state.stateName}</option>
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>Local Govt Area</Form.Label>
                                    <Form.Control as="select" name='lgaId' onChange={updateInput} required>
                                        <option disabled>Select your LGA</option>
                                        {agentLgas.map((lga, i) => {
                                            return (
                                                <option value={lga.id} key={i}>
                                                    {lga.lga}
                                                </option>
                                            );
                                        })}
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Nationality</Form.Label>
                                    <Form.Control type="text"  name='nationality' onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                        </Row>

                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlSelect1">
                                    <Form.Label>ID type</Form.Label>
                                    <Form.Control as="select" name='identityType' onChange={updateInput} required>
                                        <option>Choose an ID type</option>
                                        <option value="National id">National id</option>
                                        <option value="voters id">voters id</option>
                                        <option value="international passport">international passport</option>
                                        <option value="Drivers licences">Drivers licences</option>
                                    </Form.Control>
                                </Form.Group>

                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Date of birth</Form.Label>
                                    <Form.Control type="date"  name="dateOfBirth" onChange={updateInput} required />
                                </Form.Group>
                            </Col>

                        </Row>
                        <br />
                        <div>Account Information</div>
                        <br />
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Bank Name</Form.Label>
                                    <Form.Control name="bankId" as="select" onChange={_handleSelectBank} required>
                                        <option >Select your bank</option>
                                        {
                                            agentBanks.map((bank, i) => {
                                                return <option key={i} value={bank.id}>{bank.name}</option>
                                            })
                                        }
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Account Number</Form.Label>
                                    <Form.Control type="text"  name="accountNumber" onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Account Name </Form.Label>
                                    <Form.Control type="text"  name="accountName" onChange={updateInput} required />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={4} sm={12}>
                                <Form.Group controlId="exampleForm.ControlInput1">
                                    <Form.Label>Account BVN</Form.Label>
                                    <Form.Control type="text"  name="accountBvn" onChange={updateInput} required />
                                </Form.Group>
                            </Col>

                        </Row>
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
};

CreateAgentModal.propTypes = {
    show: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,

};

const mapStateToProps = state => (console.log(state.agentmanager.error), {
    agentStates: state.agentmanager.agentStates,
    agentLgas: state.agentmanager.agentLga,
    agentBanks: state.agentmanager.agentBanks,
    loading: state.agentmanager.loading,
    erroMessage: state.agentmanager.errorMessage,
    success: state.agentmanager.createAgentMansuccess,
    error: state.agentmanager.error,
});

export default connect(
    mapStateToProps,
    {
        FetchState,
        FetchLga,
        FetchBank,
        CreateAgentManager
    }
)(CreateAgentModal);
