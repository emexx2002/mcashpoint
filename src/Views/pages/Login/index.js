import React, { useState } from 'react';
import { Container, Row, Col,Nav,Form,Button} from "react-bootstrap";
import { loginUser } from "../../../Redux/requests/agentRequest";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './style.css';


const Login = ({ history, loginUser: handleLogin, loading }) => {

    const [userCredentials, setUserCredentials] = useState({
        username: null,
        password: null
    });

    function handleInputChange(event) {
        console.log(event)
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
        console.log(userCredentials)
    };

    function onSubmit(event) {
        // event.preventDefault();
         handleLogin(userCredentials);
        
      }
    

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
                        <Form.Control type="text" name = 'username' onChange={handleInputChange} required/>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name ='password' onChange={handleInputChange} required/>
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
                            <Button variant="primary" className="text-white button-wrap" onClick={onSubmit} type="submit">
                            login
                            </Button>
                        </div>               
                    </Col>
                  
                </Row>
                    
               
            </Form>
          </div>
      )
    
}
    Login.propTypes = {
        loginUser: PropTypes.func.isRequired
    };

    const mapStateToProps = state => ({
        login: state.agents.user
      });
  
  export default connect(
    mapStateToProps,
    {
      loginUser
    }
  )(Login);
