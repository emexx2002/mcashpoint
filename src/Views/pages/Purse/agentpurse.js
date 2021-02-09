import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import {
  FetchAgentPurse,
  CreditDebitPurse,
} from "../../../Redux/requests/agentPurseRequest";
import Loader from "../../../Components/secondLoader";
import { connect } from "react-redux";
import CreditDebit from "../../../Components/credit";
import Pagination from "react-js-pagination";
import ExportModal from "../../../Components/Exports";
import FilterModal from "../../../Components/Filter";
import "./style.css";

const AgentPurse = (props) => {
  const [credit, showCredit] = useState(false);
  const [agentID, setAgentId] = useState("");
  const [businessName, setBusinessName] = useState("");
  // const [exportModalActive, showExportModal] = useState(false);
  // const [FilterModalActive, showFilterModal] = useState(false);

  const {
    FetchAgentPurse: FetchAgentPurses,
    agentPurse,
    loading,
    agentPurseTotal,
    showFilterModal,
    FilterModalActive,
    showExportModal,
    ExportModalActive,
    handleInitialValue,
    intialValueFilter,
    
  } = props;

  const initialState = {
    businessName: "",
  };

  const [filterValues, setFilterValues] = useState(initialState);
  const [nextPage, setNextPage] = useState(0);
  const [length, setLength] = useState(10);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    handleInitialValue(initialState);
  }, [filterValues]);

  useEffect(() => {
    FetchAgentPurses(length, nextPage, initialState);
  }, [length, nextPage]);
  const closeCredit = () => {
    showCredit(false);
  };

  const onFilterSubmit = (event) => {
    event.preventDefault();
    setFilterValues(initialState)
    FetchAgentPurses(nextPage, length, filterValues);
    closeFilter();
    setNextPage(0);
  };

  const _handleFilterValue = (event) => {
    console.log(event);
    // FetchAgentPurses(length, nextPage, initialState);

    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });

    setNextPage(0);
    showExportModal(false);
  };
  const closeExport = () => {
    showExportModal(false);
  };
  const closeFilter = () => {
    showFilterModal(false);
  };

  const OpenFilter = () => {
    showFilterModal(true);
    setFilterValues(initialState);
  };

  const handleCreditDebit = (agentId, businessName) => {
    setBusinessName(businessName);
    setAgentId(agentId);
    showCredit(true);
  };
  const _handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setNextPage(pageNumber - 1);
  };
  const products = agentPurse.map((agent, index) => {
    return {
      id: index,
      AgentID: agent.agent === undefined ? "" : agent.agent.id,
      BusinessName:
        agent.agent.businessName === "undefined"
          ? ""
          : agent.agent.businessName,
      AgentName:
        agent.agent.user.username === "undefined"
          ? ""
          : agent.agent.user.username,
      Balance: agent.balance === "undefined" ? "" : agent.balance,
      DateCreated: agent.createdAt === "undefined" ? "" : agent.createdAt,
      // pageAccessed:aud.agent.requestMethod === 'undefined' ? '':aud.user.requestMethod,
      // DataAccessed:aud.user.username === 'undefined' ? '':aud.user.username,
    };
  });

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
      dataField: "AgentName",
      text: "Agent Name",
      style: { width: "20em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "200px", textAlign: "center" };
      },
    },
    { dataField: "Balance", text: "Balance " },
    {
      dataField: "Action",
      text: "Action",
      formatter: (cellContent, row) => {
        console.log(cellContent, row);
        return (
          <h5>
            <button
              type="button"
              onClick={() => handleCreditDebit(row.AgentID, row.BusinessName)}
              className="btn assign-terminal"
            >
              CREDIT/DEBIT
            </button>
          </h5>
        );
      },
    },
    { dataField: "DateCreated", text: "Date Created" },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  return (
    <div>
      {loading && (
        <Loader
          type="TailSpin"
          type="Oval"
          height={60}
          width={60}
          color="#1E4A86"
        />
      )}

      <div className="table-wrapper">
        <h4>All Agents</h4>
        <BootstrapTable
          bootstrap4
          keyField="id"
          data={products}
          columns={columns}
          defaultSorted={defaultSorted}
          bordered={false}
          hover
          condensed
        />
        <div className="pagination_wrap">
          <p>Showing 1 to 10 of {agentPurseTotal}</p>
          <div className="pagination">
            <Pagination
              activePage={activePage}
              itemsCountPerPage={10}
              totalItemsCount={agentPurseTotal}
              pageRangeDisplayed={5}
              onChange={_handlePageChange}
            />
          </div>
        </div>
        <CreditDebit
          show={credit}
          close={closeCredit}
          idAgent={agentID}
          businessName={businessName}
        />
        <FilterModal
          type={""}
          typetext={""}
          idtext={""}
          show={FilterModalActive}
          name="agentpurse"
          close={closeFilter}
          nextPage={nextPage}
          length={length}
          handleFilterValue={_handleFilterValue}
          submitFilter={onFilterSubmit}
        />
        <ExportModal show={ExportModalActive} close={closeExport} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => (
  console.log(state),
  {
    agentPurse: state.purse.agentPurse,
    loading: state.purse.loading,
    error: state.purse.error,
    agentPurseTotal: state.purse.agentPurseTotal,
  }
);

export default connect(mapStateToProps, {
  FetchAgentPurse,
  CreditDebitPurse,
})(AgentPurse);
