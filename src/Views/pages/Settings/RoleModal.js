import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import { Modal, Form, Container, Button, Image, Row, Col,Alert } from "react-bootstrap";
import Cancel from "../../../Assets/img/x.png";
import Loader from "../../../Components/secondLoader"

import { connect } from "react-redux";
import { FetchRoleGroup ,CreateRoleGroup} from "../../../Redux/requests/settingsRequest";

const CreateRole = ({ show, close, FetchRoleGroup:FetchRoleGroups,CreateRoleGroup:CreateRoleGroups,roleGroups,success,error,loading,erroMessage }) => {
  const [errors, setErrors] = useState([]);
  const [successMessage, SetSuccessMessage] = useState([]);
  useEffect(() => {
    FetchRoleGroups();

  }, []);
console.log(erroMessage)
//   useEffect(() => { 
//     if (erroMessage !=null){
//       return setErrors(erroMessage.error);

//     }
// }, [erroMessage ]);

useEffect(() => { 
  console.log(error,erroMessage)
if(erroMessage){
  if (error && erroMessage.error!="Rolegroup already registered"){
    return setErrors(['There was an error sending your request, please try again later.']);
}else if(erroMessage){
  return setErrors(erroMessage.error);
}
}
 
}, [error, erroMessage]);

  useEffect(() => { 
    if(success){
      return SetSuccessMessage(['operation Successful']);

    }
}, [success]);
  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    CreateRoleGroups(data)
console.log(data) 
 };

    return (
      <Modal
        size="lg"
        show={show}
        onHide={close}
        aria-labelledby="edit-profile-modal"
        className="rounded border"
      >
        <Modal.Body>
        {loading && (
              <Loader
                type="TailSpin"
                type="Oval"
                height={60}
                width={60}
                color="#1E4A86"
              />
            )}
          <Container>
            <div
              className="header-wrapper d-flex justify-content-between align-item-center  justify-content-center"
              justify-content-center
            >
              <div className="modal-header">Create Role Group</div>
              <div onClick={() => close()} className="align-item-center  pt-3">
                <img src={Cancel} />
              </div>
            </div>
          </Container>

          <hr />
          <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
            {
            success ? <Alert variant="success">{successMessage}</Alert> : null
          }
          {
            error ? <Alert variant="danger">{errors}</Alert> : null
          }
              <Row>
                <Col md={4} sm={12}>
                  <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Role Group Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Role group name"
                      onChange={""}
                      name="name"
                      ref={register}
                      required
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Label>Select Role Permission</Form.Label>
              {
                roleGroups .map((role, index) => {
                    console.log(role.description)
                    return(
                      <div  className="mb-3">
                           <Form.Check type="checkbox" name="roleIds" ref={register} value={role.id} label={role.description} />
                      </div>
                    )
                  
                }) 
              }

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

}
 const mapStateToProps = state => (console.log(state),{
  roleGroups:state.settings.roleGroups,
  loading:state.settings.loading,
  error:state.settings.error,
  success:state.settings.successRole,
  erroMessage:state.settings.errorMessage
  
});

export default connect(
  mapStateToProps,
  {
    FetchRoleGroup,CreateRoleGroup
  }
)(CreateRole);