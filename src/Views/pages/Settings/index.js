import React, { Component } from "react";
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Tab from 'react-bootstrap/Tab'
import { Container, Row, Col,Nav,Form,Button} from "react-bootstrap";
import DashboardTemplate from "../../template/dashboardtemplate";
import Profile from '../../../Assets/img/settingsuser.png'
import Password from '../../../Assets/img/settingslocked.png'
import Role from '../../../Assets/img/settingusers.png'
import Notifications from '../../../Assets/img/settingnotifications.png'
import ProfileSettings from './Profile'
import NotificationSettings from './Notification'


import './style.css';
import RoleGroups from "./RoleGroups";





const Settings = () => {

    const [key, setKey] = React.useState('first');
    // const [createModalActive, showCreateModal] = React.useState(false);
    // const onclose = () => {
      
    //   showCreateModal(false);
    // };
    
   
    // console.log(key)
    // const ActiveStyle = {
    //     fontFamily: 'Montserrat',
    //     fontStyle: 'normal',
    //     fontWeight: '600',
    //     lineHeight: '18px',
    //     color: '#FFFFFF',
    //     background:' #00249C'
    // };
    // const inActiveStyle = {
    //   ...ActiveStyle,
    //   color: '#52575C',
    //   background:' none'

    // };

  
        
      return (
          <DashboardTemplate>
              <div className='transact-wrapper'>
                 <h2 className='settings-header'>
                    Settings
                 </h2>
                 <p className='settings-text'>Set controls on mCashPoint</p>

                 <div className='tabs-wrap'>
                 <Tab.Container id="left-tabs-example" defaultActiveKey={key}>
                        <Row>
                            <Col sm={3} className='side-tab'>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                <Nav.Link eventKey="first" >
                                    <div className='tab-navs'>
                                        <div><img src={Profile}/></div>
                                        <div>
                                            <p>Profile</p>
                                            <p>Personal information</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="second"  >
                                   <div className='tab-navs'>
                                        <div><img src={Password}/></div>
                                        <div>
                                            <p>Password</p>
                                            <p>Change password</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="third" >
                                    <div className='tab-navs'>
                                        <div><img src={Role}/></div>
                                        <div>
                                            <p>Role Groups</p>
                                            <p>View and create user roles</p>
                                        </div>
                                    </div>
                                </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                <Nav.Link eventKey="fourth"  >
                                    <div className='tab-navs'>
                                        <div><img src={Notifications}/></div>
                                        <div>
                                            <p>Notifications</p>
                                            <p>Notification preferences </p>
                                        </div>
                                    </div>
                                </Nav.Link>
                                </Nav.Item>
                            </Nav>
                            </Col>
                            <Col sm={6}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                <ProfileSettings></ProfileSettings>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                <div className='main-tabs'>
                                    <Form>
                                        <div className='d-flex justify-content-between'>
                                            <div>Password</div>
                                            <div>Change Password</div>
                                        </div>
                                        <br />
                                        <Row>
                                            <Col md={12} sm={12}>
                                            <Form.Group controlId="exampleForm.ControlInput1">
                                                <Form.Label>Current Password</Form.Label>
                                                <Form.Control type="password" />
                                            </Form.Group>
                                            </Col>
                                            <Col md={12} sm={12}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>New password</Form.Label>
                                                    <Form.Control type="password" />
                                                </Form.Group>                       
                                            </Col>
                                            <Col md={12} sm={12}>
                                                <Form.Group controlId="exampleForm.ControlInput1">
                                                    <Form.Label>Confirm Password</Form.Label>
                                                    <Form.Control type="password" />
                                                </Form.Group>                       
                                            </Col>
                                        </Row>
                                       
                                         <div className=" text-right">
                                            <Button variant="primary" className="text-white "  type="submit">
                                            Submit
                                            </Button>
                                        </div>
                                    </Form>
                                </div>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                <RoleGroups></RoleGroups>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                <NotificationSettings></NotificationSettings>
                                </Tab.Pane>
                            </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                 </div>
              </div>
          </DashboardTemplate>
      )
    
}
export default Settings
