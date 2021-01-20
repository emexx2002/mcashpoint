import React, { Component, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Upload from "../../../Assets/img/upload.png";
import Filter from "../../../Assets/img/filter.png";
import Plus from "../../../Assets/img/+.png";
import DashboardTemplate from "../../template/dashboardtemplate";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import CreateAgentModal from "./CreateAgent";
// import FetchAgentsManager from "./fetchAgentsManager";
// import Settlement from "./settlement";

import "./style.css";
import FetchAgents from "./FetchAgents";

const AgentsWrapper = () => {
  const [createModalActive, showCreateModal] = React.useState(false);
  const [active, showActive] = React.useState("home");
  const [ExportModalActive, showExportModal] = React.useState(false);
  const [FilterModalActive, showFilterModal] = React.useState(false);

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
      <Tab eventKey={"home"} title="View Agents">
        <FetchAgents ExportModalActive ={ExportModalActive } FilterModalActive={FilterModalActive} showExportModal={showExportModal} showFilterModal={showFilterModal}/>
      </Tab>
      <Tab eventKey={"profile"} title="Create Agent ">
        <CreateAgentModal show={createModalActive} close={onclose} />
      </Tab>
      {/* <Tab eventKey={"contact"} title="Settlement">
        <Settlement />
      </Tab> */}
    </Tabs>
  );

  return (
    <DashboardTemplate>
      <div className="transact-wrapper">
        <p>Agents</p>
        <div className="agent-transact-header">
          <div>
            <div className="manage-agent">
              <span>A list of all agents on McashPoint</span>
              {/* <span><img src={Plus} />Create Agent Manager</span>
                            <span><img src={Plus} />Settlement</span> */}
            </div>
          </div>
          <div className="manage-agent">
            <span>Print</span>

            <span onClick={() => showFilterModal(true)}>
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
export default AgentsWrapper;
