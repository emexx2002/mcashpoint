import React,{Component,useEffect} from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { Container, Row, Col, Nav, Form, Button } from "react-bootstrap";
import RoleModal from "./RoleModal";
import "./style.css";






export default function RoleGroups() {

    const [createModalActive, showCreateModal] = React.useState(false);

    const [active, showActive] = React.useState("home");

    useEffect(() => {
      console.log(active);
      renderTab();
    }, [active]);

    const onclose = () => {
      showActive("home");
      showCreateModal(false);
    };


    const renderTab = () => (
      <Tabs
        defaultActiveKey={active}
        id="uncontrolled-tab-example"
        onSelect={(key) => {
          key == "profile" ? showCreateModal(true) : showActive("home");
        }}
      >
        <Tab eventKey={"profile"} title="Create Group Role">
          <RoleModal show={createModalActive} close={onclose} />
        </Tab>
      </Tabs>
    );

    return (
      <div className="main-tabs">
        {renderTab()}
        <div className="Dashboard-overview-wrapper">
          <div className="flex-box p-1">
            <div>
              <div>
                <h5>1</h5>
              </div>
              <div>Administrator </div>
            </div>
          </div>
          <div className="flex-box p-1">
            <div>
              <div>
                <h5>12</h5>
              </div>
              <div>Support </div>
            </div>
          </div>
          <div className="flex-box p-1">
            <div>
              <div>
                <h5>13</h5>
              </div>
              <div> Finance Support 1 </div>
            </div>
          </div>

          <div className="flex-box p-1">
            <div>
              <div>
                <h5>15</h5>
              </div>
              <div> Finance </div>
            </div>
          </div>

          <div className="flex-box p-1">
            <div>
              <div>
                <h5>16</h5>
              </div>
              <div> Agent Support </div>
            </div>
          </div>

          <div className="flex-box p-1 fw-bold">
            <div>
              <div>
                <h5>14</h5>
              </div>
              <div> Finance Support 2 </div>
            </div>
          </div>
        </div>
      </div>
    );
}
