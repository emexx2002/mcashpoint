import React, { useState, useEffect } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.css";
import "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css";
import { FetchAudit } from "../../../Redux/requests/auditRequest";
import Loader from "../../../Components/secondLoader";
import Upload from "../../../Assets/img/upload.png";
import Filter from "../../../Assets/img/filter.png";
import Print from "../../../Assets/img/printer.png";
import DashboardTemplate from "../../template/dashboardtemplate";
import Pagination from "react-js-pagination";
import { connect } from "react-redux";
import "./style.css";

const Audit = (props) => {
  const { FetchAudit: FetchAudits, audits, loading, auditTotal } = props;
  const [nextPage, setNextPage] = useState(1);
  const [length, setLength] = useState(10);
  const [activePage, setActivePage] = useState(1);
  console.log(audits);
  useEffect(() => {
    FetchAudits(nextPage,length);
  }, [nextPage,length]);

  const products = audits.map((aud, index) => {
    return {
      id: index,
      AgentID: aud.user.memberId === "undefined" ? "" : aud.user.memberId,
      UserName: aud.user.username === "undefined" ? "" : aud.user.username,
      Actions: aud.action === "undefined" ? "" : aud.action,
      IpAdress: aud.ip === "undefined" ? "" : aud.ip,
      RequestMethod: aud.requestMethod === "undefined" ? "" : aud.requestMethod,
      // pageAccessed:aud.user.requestMethod === 'undefined' ? '':aud.user.requestMethod,
      // DataAccessed:aud.user.username === 'undefined' ? '':aud.user.username,
    };
  });

  const columns = [
    // { dataField: 'id', text: 'Id'},
    { dataField: "AgentID", text: "Agent ID" },
    {
      dataField: "UserName",
      text: "User Name",
      style: { width: "20em", whiteSpace: "normal", wordWrap: "break-word" },
      headerStyle: (colum, colIndex) => {
        return { width: "200px", textAlign: "center" };
      },
    },
    { dataField: "Actions", text: "Actions" },

    { dataField: "IpAdress", text: "IP Address" },

    { dataField: "pageAccessed", text: "Page Accessed" },

    { dataField: "RequestMethod", text: "Request Method" },

    { dataField: "DataAccessed", text: "Date Accessed" },
  ];

  const defaultSorted = [
    {
      dataField: "name",
      order: "desc",
    },
  ];

  const _handlePageChange = (pageNumber) => {
    console.log(pageNumber);
    setActivePage(pageNumber);
    setNextPage((prev) => prev + 10);
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
          <h3>Audit</h3>
        </div>
        <div className="agent-transact-header">
          <div>Overview of agent activities on mCashPoint</div>
          <div className="manage-agent">
            <span>
              <img src={Print} />
              Print
            </span>

            <span>
              <img src={Filter} />
              Filter
            </span>

            <span>
              <img src={Upload} />
              Export
            </span>
          </div>
        </div>
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
            <p>Showing 1 to 10 of {auditTotal}</p>
            <div className="pagination">
              <Pagination
                activePage={activePage}
                itemsCountPerPage={10}
                totalItemsCount={auditTotal}
                pageRangeDisplayed={5}
                onChange={_handlePageChange}
              />
            </div>
          </div>
        </div>
      </div>
    </DashboardTemplate>
  );
};

const mapStateToProps = (state) => (
  console.log(state),
  {
    audits: state.audit.audit,
    auditTotal: state.audit.auditTotal,
    loading: state.audit.loading,
    error: state.audit.error,
  }
);

export default connect(mapStateToProps, {
  FetchAudit,
})(Audit);
