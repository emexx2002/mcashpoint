import React, { useState ,useEffect} from 'react';
import { Container, Row, Col,Nav,Form,Button} from "react-bootstrap";
import { ChangePassword } from "../../../Redux/requests/settingsRequest";
import Loader from "../../../Components/secondLoader"
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {history} from '../../../utils/history'
import ErrorAlert from '../../../Components/alerts';


import './style.css';


const PasswordChange = ({ history, ChangePassword: handlePassword, loading ,error}) => {
    const getToken = JSON.parse(localStorage.getItem("data"))
    const {username} = getToken.user
    const [userCredentials, setUserCredentials] = useState({
        userName: username,
        oldPassword: null,
        newPassword: null,
        confirmPassword:null
    });

    const [errors, setErrors] = useState([]);
    
    function handleInputChange(event) {
        setErrors([])
        setUserCredentials({ ...userCredentials, [event.target.name]: event.target.value });
        console.log(userCredentials)
    };



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
            <ErrorAlert errors={errors} />
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
        login: state.users.user,
        loading:state.users.loading,
        user:state.users.user,
        error:state.users.error

      });
  
  export default connect(
    mapStateToProps,
    {
        ChangePassword
    }
  )(PasswordChange);
