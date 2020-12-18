import React, { useState } from 'react';
import { Modal, Form, Container, Button, Image,Row, Col } from "react-bootstrap";
import Cancel from '../../../Assets/img/x.png'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { FetchAgentManager} from "../../../Redux/requests/agentManagerRequest";


const CreateAgentModal = ({ create,show, close }) => {
    const [isPublic, setIsPublic] = useState(true);
    const [CreateAgentData, setCreateAgentData] = useState({
        firstname: "",
        lastname: "",
        gender: "",
        email: "",
        phone: "",
        accountName: "" ,
        accountNumber: "", 
        address: "",
        accountBvn: "", 
        dateOfBirth: "",
        username: "",
        nationality:"" ,
        identityType:  "", 
        stateId: "",
        lgaId: ""
      });


      const updateInput = (event) => {
        setCreateAgentData({
          ...CreateAgentData, [event.target.name]: event.target.value
        });
      };

      
    return (
        <Modal
        size="lg"
        show={show}
        onHide={close}
        aria-labelledby="edit-profile-modal"
        className="rounded border"
      >
           <Modal.Body >
            <Container>
                <div  className='header-wrapper d-flex justify-content-between align-item-center  justify-content-center'justify-content-center>
                    <div className='modal-header'>Add Agent Manager</div>
                    <div onClick={()=>close()} className='align-item-center  pt-3'><img src={Cancel}/></div>
                </div>
            </Container>
            <hr />
            <Container>
            <Form>
                <div>Personal Infromation</div>
                <br />
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>FIRST NAME</Form.Label>
                        <Form.Control type="email" placeholder="Enter first name" onChange={updateInput} required/>
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>MIDDLE NAME</Form.Label>
                            <Form.Control type="email" placeholder="Enter middle name" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="email" placeholder="Enter last name" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>USER NAME</Form.Label>
                        <Form.Control type="email" placeholder="Enter username" onChange={updateInput}/>
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="Enter email address" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>PHONE NUMBER</Form.Label>
                            <Form.Control type="email" placeholder="Enter phone number" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Gender</Form.Label>
                        <Form.Control   as="select" onChange={updateInput}>
                        <option>Select Gender</option>
                        <option>MALE</option>
                        <option>FEMALE</option>
                        
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={8} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Address</Form.Label>
                            <Form.Control type="email" placeholder="Enter address" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlSelect1" onChange={updateInput}>
                        <Form.Label>State</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Local Govt Area</Form.Label>
                            <Form.Control as="select" onChange={updateInput}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            </Form.Control>
                        </Form.Group>                     
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Nationality</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                </Row>
               
                <Row>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>ID type</Form.Label>
                                <Form.Control as="select" onChange={updateInput}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </Form.Control>
                        </Form.Group>
               
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Date of birth</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                </Row>
                <br />
                <div>Account Infromation</div>
                <br />
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Bank Name</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Number</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Account Name </Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Account BVN</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" onChange={updateInput}/>
                     </Form.Group>
                    </Col>
                   
                </Row>
                <div className=" text-right">
                    <Button variant="primary" className="text-white "  type="submit">
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

const mapStateToProps = state => (console.log(state),{
    agentmanager: state.agentmanager.agentmanager,
    loading:state.agentmanager.loading,
    error:state.agentmanager.error
});

export default connect(
    mapStateToProps,
    {
      FetchAgentManager
    }
  )(CreateAgentModal);
  