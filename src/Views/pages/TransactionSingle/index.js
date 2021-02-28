import React, { useState, useEffect, useRef } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
// import ToolkitProvider, {  CSVExport } from 'react-bootstrap-table2-toolkit';

import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import Upload from "../../../Assets/img/upload.png";
import Filter from "../../../Assets/img/filter.png";
import Print from "../../../Assets/img/printer.png";
import DashboardTemplate from "../../template/dashboardtemplate";
import {
    FetchTransactionSingle,
  FetchTransactionTypes,
} from "../../../Redux/requests/transactionRequest";
import Loader from "../../../Components/secondLoader";
import ExportModal from "../../../Components/Exports";
import FilterModal from "../../../Components/Filter";
import { Nav, NavItem, NavLink } from "react-bootstrap";
import Pagination from "react-js-pagination";

import { connect } from "react-redux";

import "./style.css";
// import ExportLink from '../Exports/index';

const Transactions = (props) => {
  const {
    FetchTransactionSingle: FetchTransactionSingles,
    FetchTransactionTypes: FetchTransactionType,
    transaction,
    loading,
    transactionTotal,
    successTransaction,
    transactionsType,
  } = props;
  console.log(transactionsType);
  const [totalSize, setTransactionsTotal] = useState(0);
  const [exportModalActive, showExportModal] = useState(false);
  const [FilterModalActive, showFilterModal] = useState(false);
  const [nextPage, setNextPage] = useState(0);
  const [length, setLength] = useState(10);
  const [activePage, setActivePage] = useState(1);
  const initialState = {
    startDate: "",
    endDate: "",
    terminalId: "",
    status: "",
    transactionType: "",
    transactionId: "",
    rrn: "",
    pan: "",
    stan: "",
    agentId: "",
    draw: "",
  };
  const [filterValues, setFilterValues] = useState(initialState);

  const _handleFilterValue = (event) => {
    console.log(event);
    setFilterValues({
      ...filterValues,
      [event.target.name]: event.target.value,
    });
    setNextPage(0);
    showExportModal(false);
  };

  // const resetFilter = (event) => {
  //   event.preventDefault();

  //   setFilterValues({...initialState});
  // };
  const onFilterSubmit = (event) => {
    event.preventDefault();
    FetchTransactionSingles(nextPage, length, filterValues);
    closeFilter();
    setNextPage(0);
  };

  useEffect(() => {
    FetchTransactionSingles(nextPage, length, initialState);
    FetchTransactionType();
  }, [nextPage, length, filterValues]);

  const title = "Transactions page";
  const headers = [
    [
      "Date",
      "Agent",
      "Transaction ID",
      "Type",
      "Terminal ID",
      "Amount",
      "Status",
      "Agent Fee",
      "Stamp Duty",
      "RRN",
      "Pre Balance",
      "Post Balance"
    ],
  ];

  const item = transaction.map((transact) => [
    transact.systemTime,
    transact.agent.businessName,
    transact.transactionId,
    transact.transactionType.type,
    transact.agent.bankTerminal.terminalId,
    transact.amount,
    transact.statusCode,
    transact.agentFee,
    transact.stampDuty,
    transact.rrn,
    transact.postPurseBalance.toFixed(2),
    transact.prePurseBalance.toFixed(2),
  ]);

  const products = transaction.map((transact) => {
    return {
      transact:transact,
      id: transact.agent.id === "undefined" ? "" : transact.id,
      Date: transact.systemTime === "undefined" ? "" : transact.systemTime,
      Agent:
        transact.agent.businessName === "undefined"
          ? ""
          : transact.agent.businessName,
      TransactionID:
        transact.transactionId === "undefined" ? "" : transact.transactionId,
      Type:
        transact.transactionType.type === "undefined"
          ? ""
          : transact.transactionType.type,
      TerminalID:
        transact.agent.bankTerminal === null
          ? ""
          : transact.agent.bankTerminal.terminalId,
      Amount: transact.amount === "undefined" ? "" : transact.amount,
      Status: transact.statusCode,
      ConvenienceFee: transact.convenienceFee,
      AgentFee: transact.agentFee === "undefined" ? "" : transact.agentFee,
      StampDuty: transact.stampDuty === "undefined" ? "" : transact.stampDuty,
      RRN: transact.rrn === "undefined" ? "" : transact.rrn,
      STAN: transact.stan === "undefined" ? "" : transact.stan,
      // CardDetails:transact.rrn === 'undefined' ? '':transact.rrn ,
      PreBalance:
        transact.postPurseBalance.toFixed(2) === "undefined"
          ? ""
          : transact.postPurseBalance.toFixed(2),
      PostBalance:
        transact.postPurseBalance.toFixed(2) === "undefined"
          ? ""
          : transact.prePurseBalance.toFixed(2),
          AppVersion: transact.appVersion === "undefined" ? "" : transact.appVersion,
    };
    
  });
  

  const columns = [
    { dataField: "Date", text: "Date" },
    {
      dataField: "Agent",
      text: "Agent",
      headerStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center", padding: "10px" };
      },
      bodyStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center", color: "#00249C" };
      },
    },
    {
      dataField: "TransactionID",
      text: "Transaction ID",
      style: { width: "15em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "150px", textAlign: "center" };
      },
    },
    { dataField: "Type", text: "Type" },
    { dataField: "TerminalID", text: "Terminal ID" },
    { dataField: "Amount", text: "Amount (N)" },
    {
      dataField: "Status",
      text: "Status",
      style: { width: "20em", whiteSpace: "normal", wordWrap: "normal" },
      headerStyle: (colum, colIndex) => {
        return { width: "550px", textAlign: "center" };
      },
      bodyStyle: (colum, colIndex) => {
        return { width: "550px", textAlign: "center",  wordWrap: "normal" };
      },
      formatter: (cellContent, row) => {
        let statusMessage = "";
        let statusColor = "";
        switch (row.Status) {
          case "00":
            console.log(row)
            statusMessage = row.transact.statusMessage;
            statusColor = "successful";
            break;
          case "PP":
          case "09":
            statusMessage = row.transact.statusMessage;
            statusColor = "pending";
            break;

          default:
            statusMessage = row.transact.statusMessage;
            statusColor = "failure";
            break;
        }
        return (
          <h5>
            <span className={`${statusColor}`}> {statusMessage}</span>
          </h5>
        );
      },
    },
    { dataField: "ConvenienceFee", text: "Convenience Fee" },
    { dataField: "AgentFee", text: "Agent Fee" },
    { dataField: "StampDuty", text: "Stamp Duty" },
    {
      dataField: "RRN",
      text: "RRN",
      style: { width: "10em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "100px", textAlign: "center" };
      },
    },
    {
      dataField: "STAN",
      text: "STAN",
      style: { width: "10em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "100px", textAlign: "center" };
      },
    },
    // { dataField: 'CardDetails', text: 'Card Details'},
    { dataField: "PreBalance", text: "Pre-Balance" },
    { dataField: "PostBalance", text: "Post-Balance" },
    { dataField: "App Version", text: "App Version" },

    // { dataField: 'BeneficiaryDetails', text: 'Beneficiary Details'},
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  // const _handlePageChange = (pageNumber) => {
  //   console.log(pageNumber);
  //   setActivePage(pageNumber);
  //   setNextPage((prev) => prev + 10);
  // };

  const _handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
    setNextPage(pageNumber - 1);
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

  return (
    <DashboardTemplate>
      <div className="transact-wrapper">
        {loading && (
          <Loader
            type="TailSpin"
            type="Oval"
            height={60}
            width={60}
            color="#1E4A86"
          />
        )}
        <div className="header-title">
          <h3>Transactions</h3>
        </div>
        <div className="agent-transact-header">
          <div>An overview of all transactions on mCashPoint</div>
          <div> 
            <span 
            // onclick={()=> window.print()}
             >
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
        <div className="table-wrapper">
          <h4>All Transactions</h4>
          <BootstrapTable
            bootstrap4
            keyField="id"
            data={products}
            columns={columns}
            defaultSorted={defaultSorted}
            bordered={false}
            // pagination={pagination(length,totalSize)}
            hover
            condensed
          />
        </div>
      </div>
      <FilterModal
        type={"Transaction"}
        typetext={"Enter Transaction Type"}
        idtext={"Enter Transaction ID"}
        show={FilterModalActive}
        close={closeFilter}
        nextPage={nextPage}
        length={length}
        loadPage={FetchTransactionSingle}
        handleFilterValue={_handleFilterValue}
        submitFilter={onFilterSubmit}
        name={"transaction"}
        transactionsType={transactionsType}
      />
      <ExportModal show={exportModalActive} close={closeExport} filename='transaction file' title={title} headers={headers} item={item} products={products} columns={columns}/>
      <div className="pagination_wrap">
        <p>Showing 1 to 10 of {transactionTotal}</p>
        <div className="pagination">
          <Pagination
            activePage={activePage}
            itemsCountPerPage={10}
            totalItemsCount={transactionTotal}
            pageRangeDisplayed={5}
            onChange={_handlePageChange}
          />
        </div>
      </div>
    </DashboardTemplate>
  );
};
const mapStateToProps = (state) => (
  console.log(state),
  {
    transaction: state.transactions.transactions,
    transactionsType: state.transactions.transactionsType,
    loading: state.transactions.loading,
    error: state.transactions.error,
    transactionTotal: state.transactions.transactionTotal,
    successTransaction: state.transactions.successTransaction,
  }
);

export default connect(mapStateToProps, {
    FetchTransactionSingle,
    FetchTransactionTypes,
})(Transactions);
