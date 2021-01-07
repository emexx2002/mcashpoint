import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";

import {
  FetchAgent,
  ActivatateCode,
  FetchBankTerminal,
} from "../../../Redux/requests/agentRequest";
import { connect } from "react-redux";


import "./style.css";

const Agents = (props) => {
  const {
    FetchBankTerminal: FetchBankTerminals,
    FetchAgent: FetchAgents,
    ActivatateCode: ActivatateCodes,
    bankTerminal,
    agents,
    loading,
    activationCode,
    success,
  } = props;
  const [smShow, setSmShow] = useState(false);
  const [activation, setActivation] = useState(null);
  
  const [terminalID, showTerminalID] = useState(false);
  // const [status, setStatus] = useState([FetchTransactions]);
  console.log(activationCode);

  useEffect(() => {
    FetchAgents();
    FetchBankTerminals();
  }, []);

  // const products = {}

  const products = agents.map((agent, index) => {
    console.log(agent.bankTerminal);
    return {
      agent: agent,
      id: index,
      AgentID: agent.id === null ? "" : agent.id,
      BusinessName: agent.businessName === null ? "" : agent.businessName,
      UserName: agent.user.username === null ? "" : agent.user.username,
      PhoneNumber: agent.businessPhone === null ? "" : agent.businessPhone,
      Action: agent.user === null ? "" : agent.user.memberId,
      TerminalID:
        agent.bankTerminal === null ? "" : agent.bankTerminal.terminalId,
      DateCreated: agent.createdAt === null ? "" : agent.createdAt,
    };
  });

  function ActivatateCode(agentId) {
    setActivation(null);
    ActivatateCodes(agentId);
    if (activation !== null) {
      setSmShow(true);
      setActivation(activationCode);
    }
  }
  const AssignTerminals = (agentId) => {
    // FetchBankTerminals(agentId)
    ActivateAssignTerminal(agentId);
    showTerminalID(true);
  };

  const ActivateAssignTerminal = (agentId) => {};

  const columns = [
    // { dataField: 'id', text: 'Id'},
    { dataField: "AgentID", text: "Agent ID" },
    {
      dataField: "BusinessName",
      text: "Business Name",
      headerStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center", padding: "10px" };
      },
    },
    {
      dataField: "UserName",
      text: "User Name",
      style: { width: "20em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "200px", textAlign: "center" };
      },
    },
    { dataField: "PhoneNumber", text: "Phone Number" },
    {
      dataField: "Action",
      text: "Action",
      formatter: (cellContent, row) => {
        FetchBankTerminals(row.AgentID);
        return (
          <h5>
            {row.agent.terminalActivated ? (
              <button
                type="button"
                className="unassign-terminal"
                onClick={() => AssignTerminals(row.AgentID)}
              >
                Unassign Terminal
              </button>
            ) : (
              <button
                type="button"
                className="assign-terminal"
                onClick={() => AssignTerminals(row.AgentID)}
              >
                Assign Terminal
              </button>
            )}
          </h5>
        );
      },
    },
    { dataField: "TerminalID", text: "Terminal ID" },
    {
      dataField: "ActivationCode",
      text: "Activation Code",
      formatter: (cellContent, row) => {
        return (
          <h5>
            <button
              type="button"
              onClick={() => ActivatateCode(row.AgentID)}
              className=" generate-code"
            >
              Generate
            </button>
          </h5>
        );
      },
    },
    // { dataField: 'AgentManager', text: 'Agent Manager'},
    { dataField: "DateCreated", text: "Date Created" },
  ];
  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];
  const pagination = paginationFactory({
    page: 1,
    sizePerPage: 10,
    lastPageText: ">>",
    firstPageText: "<<",
    nextPageText: ">",
    prePageText: "<",
    showTotal: true,
    alwaysShowAllBtns: true,
    onPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
    onSizePerPageChange: function (page, sizePerPage) {
      console.log("page", page);
      console.log("sizePerPage", sizePerPage);
    },
  });
  

  return (
    
        <div className="table-wrapper">
          <h4>All Agents</h4>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products}
            columns={columns}
            defaultSorted={defaultSorted}
            pagination={pagination}
            bordered={false}
            hover
            condensed
          />
          {/* <button onClick={() => showTerminalID(true)}>Assign</button> */}
        </div>
     
      
  );
};
const mapStateToProps = (state) => (
  console.log(state),
  {
    agents: state.agents.agents,
    activationCode: state.agents.activationCode,
    bankTerminal: state.agents.bankTerminal,
    loading: state.agents.loading,
    error: state.agents.error,
    success: state.agents.successmodal,
  }
);

export default connect(mapStateToProps, {
  FetchAgent,
  ActivatateCode,
  FetchBankTerminal,
})(Agents);
