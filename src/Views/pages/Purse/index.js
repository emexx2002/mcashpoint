import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';

import DashboardTemplate from "../../template/dashboardtemplate";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab'
import CreatePurse from "./createpurse";
import AgentPurse from "./agentpurse";


import './style.css';


const AgentsManager = () => {
      const [key, showActive] = React.useState('centralPurse');
        
      return (
        
          <DashboardTemplate>
              <div className='transact-wrapper'>
              <p>Agents</p>
                  <div className='Dashboard-overview-wrapper'>
                <div className='flex-box p-1'>
                    <div className="person-background"></div>
                    <div>
                        <div>120</div>
                        <div>Agents </div>
                    </div>
                </div>
                <div className='flex-box'>
                    <div className="mark-background"></div>
                    <div>
                        <div>0</div>
                        <div>Unique Customers</div>
                    </div>
                </div>  

                </div>  
                
                
                   <Tabs defaultActiveKey={key} id="uncontrolled-tab-example" >
                    <Tab eventKey={"centralPurse"} title="Central Purse">
                    <CreatePurse />
                    </Tab>
                  
                    <Tab eventKey={"AgentPurse"} title="Agent Purse" >
                        <AgentPurse />
                    </Tab>
                  </Tabs>

                 
              </div>
          </DashboardTemplate>
      )
    
}
export default AgentsManager
