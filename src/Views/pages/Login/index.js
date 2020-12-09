import React, { useState } from 'react';
import { Container, Row, Col,Nav,Form,Button} from "react-bootstrap";
import { loginUser } from "../../../Redux/requests/agentRequest";
import Loader from "../../../Components/secondLoader"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {history} from '../../../utils/history'

import './style.css';


const Login = ({ history, loginUser: handleLogin, loading ,user,error}) => {
console.log('loading.....',error)
console.log(user)
    const [userCredentials, setUserCredentials] = useState({
        username: null,
        password: null
    });

    const [errors, setErrors] = useState([]);
    
    function handleInputChange(event) {
        console.log(event)
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
        console.log(userCredentials)
    };


     function onSubmit(event) {
        event.preventDefault();
        const {username,password}= userCredentials;
        console.log(username,password)
        if(username === null || username === '' || password=== null|| password=== '') {
            setErrors("*username/password can't be empty")
        }else{
            const loginRes = handleLogin(userCredentials);
            if (!Array.isArray(loginRes)) {
                
                return;
                }
        }
      }
    

      return ( 
          <div className='d-flex justify-content-center align-items-center login-wrapper'>
              <Form className='form-wrapper'>
              {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}

                  <div className='logo'></div>
                  {error ? <span className='error'>hello</span>:''}
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
        loginUser: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired
    };

    const mapStateToProps = state => ({
        login: state.users.user,
        loading:state.users.loading,
        user:state.users.user,
        error:state.users.error

      });
  
  export default connect(
    mapStateToProps,
    {
      loginUser
    }
  )(Login);
