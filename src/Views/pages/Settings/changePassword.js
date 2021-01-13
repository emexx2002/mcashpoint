import React, { useState ,useEffect} from 'react';
import { Container, Row, Col,Nav,Form,Button,Alert} from "react-bootstrap";
import { ChangePassword } from "../../../Redux/requests/settingsRequest";
import Loader from "../../../Components/secondLoader"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {history} from '../../../utils/history'
import ErrorAlert from '../../../Components/alerts';


import './style.css';


const PasswordChange = ({ history, ChangePassword: handlePassword, loading ,error,success,erroMessage,passworderror}) => {
    const getToken = JSON.parse(localStorage.getItem("data"))
    const {username} = getToken.user
    const [userCredentials, setUserCredentials] = useState({
        userName: username,
        oldPassword: null,
        newPassword: null,
        confirmPassword:null
    });
    const [errors, setErrors] = useState([]);
    const [successMessage, SetSuccessMessage] = useState([]);

    
    function handleInputChange(event) {
        setErrors([])
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
        console.log(userCredentials)
    };

    useEffect(() => { 
        console.log(error)
        if(passworderror){

            return setErrors(['There was an error sending your request, please try again later.']);
        }
    }, [passworderror]);

    useEffect(() => { 
       
        if(success){
            
            history.push("/")
        }
    }, [success]);

    const {
        userName,oldPassword,newPassword,confirmPassword
      } = userCredentials;
    
      const onSubmit = async (event) => {
        event.preventDefault();
        if (newPassword !== confirmPassword) return setErrors(['Passwords do not match']);
        const result = await handlePassword(userCredentials);
        console.log(result)

      };
    

      return ( 
        <div className='main-tabs'>
            <Form onSubmit={onSubmit}>
            {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}
            {
                    success ? <Alert variant="success">{successMessage}</Alert> : null
                }
                {
                    error ? <Alert variant="danger">{errors}</Alert> : null
                }
                <div className='d-flex justify-content-between'>
                    <div>Password</div>
                    <div>Change Password</div>
                </div>
                <br />
                <Row>
                    <Col md={12} sm={12}>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Current Password</Form.Label>
                        <Form.Control type="password" name='oldPassword' onChange={handleInputChange} required/>
                    </Form.Group>
                    </Col>
                    <Col md={12} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>New password</Form.Label>
                            <Form.Control type="password" name='newPassword' onChange={handleInputChange} required/>
                        </Form.Group>                       
                    </Col>
                    <Col md={12} sm={12}>
                        <Form.Group controlId="exampleForm.ControlInput1">
                            <Form.Label>Confirm Password</Form.Label>
                            <Form.Control type="password" name='confirmPassword' onChange={handleInputChange} required/>
                        </Form.Group>                       
                    </Col>
                </Row>
            
                <div className=" text-right">
                    <Button variant="primary" className="text-white "   type="submit">
                    Submit
                    </Button>
                </div>
            </Form>
        </div>
      )
    
}
ChangePassword.propTypes = {
        ChangePassword: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        loading: PropTypes.bool.isRequired
    };

    const mapStateToProps = state => ({
        login: state.settings.user,
        loading:state.settings.loading,
        user:state.settings.user,
        error:state.settings.passworderror,
        passworderror:state.settings.passworderror,
        erroMessage:state.settings.erroMessage,
        success:state.settings.passwordSuccess
      });
  
  export default connect(
    mapStateToProps,
    {
        ChangePassword
    }
  )(PasswordChange);
