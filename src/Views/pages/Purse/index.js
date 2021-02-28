import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Upload from "../../../Assets/img/upload.png";
import Filter from "../../../Assets/img/filter.png";
import Print from "../../../Assets/img/printer.png";
import DashboardTemplate from "../../template/dashboardtemplate";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CentralPurse from "./centralPurse";
import AgentPurse from "./agentpurse";

import "./style.css";

const AgentsManager = () => {
  const [key, showActive] = React.useState("centralPurse");
  // const initialState = {
  //   businessName: "",
  // };
  const [ExportModalActive, showExportModal] = React.useState(false);
  const [intialValueFilter, setInitialValue] = React.useState({});
  const [FilterModalActive, showFilterModal] = React.useState(false);

  const handleInitialValue = (value) =>{
    console.log(value)
    setInitialValue(value)
  }

  // React.useEffect(() => {
    
  // }, []);
        const OpenFilter = () => {
        showFilterModal(true);
        setInitialValue(intialValueFilter)
      };

  return (
    <DashboardTemplate>
      <div className="transact-wrapper">
        <div className="header-title">
          <h3>Purse</h3>
        </div>
        <div className="agent-transact-header">
          View all purse details on mCashPoint
        </div>
        <div className="Dashboard-overview-wrapper">
          <div className="flex-box p-1">
            <div className="person-background"></div>
            <div>
              <div>120</div>
              <div>Total Agent Balance </div>
            </div>
          </div>
          <div className="flex-box">
            <div className="mark-background"></div>
            <div>
              <div>0</div>
              <div>Wallet Balance</div>
            </div>
          </div>
        </div>
        <div className="agent-transact-header">
          <div>
            <div>
              <div>Manage all agents on mCashPoint</div>
            </div>
          </div>
          {/* <div className="manage-agent">
            <span>
              <img src={Print} />
              Print
            </span>

            <span onClick={() => OpenFilter()}>
              <img src={Filter} />
              Filter
            </span>

            <span onClick={() => showExportModal(true)}>
              <img src={Upload} />
              Export
            </span>
          </div> */}
        </div>

        <Tabs defaultActiveKey={key} id="uncontrolled-tab-example">
          <Tab eventKey={"centralPurse"} title="Central Purse">
            <CentralPurse />
          </Tab>

          <Tab eventKey={"AgentPurse"} title="Agent Purse">
            <AgentPurse
              ExportModalActive={ExportModalActive}
              FilterModalActive={FilterModalActive}
              showExportModal={showExportModal}
              showFilterModal={showFilterModal}
              handleInitialValue={handleInitialValue}
              intialValueFilter={intialValueFilter}
            />
          </Tab>
        </Tabs>
      </div>
    </DashboardTemplate>
  );
};
export default AgentsManager;
