import React from "react";
import { Modal, Form, Container, Button, Image,Row, Col } from "react-bootstrap";
import Cancel from '../../../Assets/img/x.png'


const CreateAgentModal = ({ show, close }) => {
    const [isPublic, setIsPublic] = React.useState(true);
    console.log("hello",show)
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
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>MIDDLE NAME</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>LAST NAME</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>USER NAME</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>EMAIL</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>PHONE NUMBER</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Example select</Form.Label>
                        <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    </Col>
                    <Col md={8} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                    
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>GENDER</Form.Label>
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
                            <Form.Label>Example select</Form.Label>
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
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                </Row>
               
                <Row>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Example select</Form.Label>
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
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                </Row>
                <br />
                <div>Account Infromation</div>
                <br />
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                     </Form.Group>
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                    <Col md={4} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>                       
                    </Col>
                </Row>
                <Row>
                    <Col md={4} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
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

export default CreateAgentModal;
