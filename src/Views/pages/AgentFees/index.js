import React, { Component, useEffect, useState } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Upload from "../../../Assets/img/upload.png";
import Filter from "../../../Assets/img/filter.png";
import Print from "../../../Assets/img/printer.png";
import Plus from "../../../Assets/img/+.png";
import DashboardTemplate from "../../template/dashboardtemplate";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {Button} from "react-bootstrap"

import FetchAgentFees from "./fetchAgentsManager";

import ExportModal from "../../../Components/Exports/index";
import FilterModal from "../../../Components/Filter/index";

import "./style.css";

const AgentFees = () => {
  const [createModalActive, showCreateModal] = React.useState(false);
  const [active, showActive] = React.useState("home");
  const [ExportModalActive, showExportModal] = React.useState(false);
  const [FilterModalActive, showFilterModal] = React.useState(false);

  

  // useEffect(() => {
    
  //   renderTab();
  // }, [active]);

  const onclose = () => {
    showActive("home");
    showCreateModal(false);
  };
  const OpenFilter = () => {
    showFilterModal(true);
    
  };

  const renderTab = () => (
    <Tabs
      defaultActiveKey={active}
      id="uncontrolled-tab-example"
      onSelect={(key) => {
        key == "profile" ? showCreateModal(true) : showActive("home");
      }}
    >
      <Tab eventKey={"home"} title="Agent Fees">
        <div className="addbtn">
          <Button variant="success">ADD</Button>
        </div>
        <div className="transaction-table">
          <div className="transaction-table-header">
            <p>Transaction Type</p>
            <p>Minimum Limit</p>
            <p>Maximum Limit</p>
            <p>Range Type</p>
            <p>Charge</p>
            <p>Agent Manager’s Cut</p>
          </div>
          <div className="transaction-table-body">
            <select value="transaction-type">
              <option value="">Select Transaction Type</option>
            </select>

            <p>0,0</p>
            <select value="range-type">
              <option value="">Select Range Type</option>
            </select>
          </div>
        </div>
        <div className="note">
          <p>
            NOTE: For Hybrid Fees use a Semicolon, to seperate the percentage
            and flat fee. Percentage, Flat Fee E,g 0.65:10{" "}
          </p>
          <Button className="notebtn" variant="primary">
            SUBMIT
          </Button>
        </div>
        <FetchAgentFees
          ExportModalActive={ExportModalActive}
          FilterModalActive={FilterModalActive}
          showExportModal={showExportModal}
          showFilterModal={showFilterModal}
        />
      </Tab>
    </Tabs>
  );

  return (
    <DashboardTemplate>
      <div className="transact-wrapper">
        <div className="header-title">
          <h3>Agent Fees</h3>
        </div>

        <div className="agent-transact-header">
          <div>
            <div>
              <div>Manage all agent fees on mCashPoint</div>
            </div>
          </div>
          <div className="manage-agent">
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
          </div>
        </div>

        {renderTab()}
      </div>
    </DashboardTemplate>
  );
};
export default AgentFees;
