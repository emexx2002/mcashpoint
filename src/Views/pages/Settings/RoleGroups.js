import React,{Component,useEffect} from 'react'
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Button} from "react-bootstrap";
import RoleModal from "./RoleModal";
import "./style.css";






export default function RoleGroups() {

    const [createModalActive, showCreateModal] = React.useState(false);

    const [active, showActive] = React.useState("home");

    useEffect(() => {
      console.log(active);
      
    }, [active]);

    const onclose = () => {
      
      showCreateModal(false);
    };
   

    return (
      <div>
       
          <Button className="role" onClick={() => showCreateModal(true)}>
            Create Role Group
          </Button>

          <RoleModal show={createModalActive} close={onclose} />
       

        <div className="Role-overview-wrapper">
          <div className="role-box ">
            <div>
              <div>
                <h5>1</h5>
              </div>
              <div>Administrator </div>
            </div>
          </div>
          <div className="role-box">
            <div>
              <div>
                <h5>12</h5>
              </div>
              <div>Support </div>
            </div>
          </div>
          <div className="role-box ">
            <div>
              <div>
                <h5>13</h5>
              </div>
              <div> Finance Support 1 </div>
            </div>
          </div>

          <div className="role-box ">
            <div>
              <div>
                <h5>15</h5>
              </div>
              <div> Finance </div>
            </div>
          </div>

          <div className="role-box">
            <div>
              <div>
                <h5>16</h5>
              </div>
              <div> Agent Support </div>
            </div>
          </div>

          <div className="role-box ">
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
