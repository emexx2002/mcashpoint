import React, { Component } from "react";
import { Container, Row, Col,Nav,Form,Button} from "react-bootstrap";


import './style.css';


const Login = () => {
        
      return ( 
          <div className='d-flex justify-content-center align-items-center login-wrapper'>
              <div>
                  
              </div>
              <Form className='form-wrapper'>
                  <div className='logo'></div>
                <Row>
                    <Col md={12} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="password" />
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>     
                        <div className='d-flex justify-content-between'>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <div className='forgot-text'>
                        Forgot your password?
                    </div>
                  </div>   
                  <div className=" text-center pt-3">
                    <Button variant="primary" className="text-white button-wrap"  type="submit">
                    login
                    </Button>
                </div>               
                    </Col>
                  
                </Row>
                    
               
            </Form>
          </div>
      )
    
}
export default Login
