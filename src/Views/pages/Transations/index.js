import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import DashboardTemplate from "../../template/dashboardtemplate";
import { FetchTransaction} from "../../../Redux/requests/transactionRequest";
import Loader from "../../../Components/secondLoader"
import ExportModal from "../Exports/index"
import FilterModal from "../Filter/index"
import {Nav, NavItem, NavLink} from "react-bootstrap"

import { connect } from 'react-redux';


import './style.css';
// import ExportLink from '../Exports/index';


const Transactions = (props) => {
  const { FetchTransaction: FetchTransactions, transaction, loading} = props;
  console.log(transaction)
  const [alltransactions, setTransactions] = useState([FetchTransactions]);
  const [status, setStatus] = useState([FetchTransactions]);
  console.log('jj', alltransactions)
  const [exportModalActive, showExportModal] = useState(false);
  const [FilterModalActive, showFilterModal] = useState(false);
 


  useEffect(() => {
    FetchTransactions();
  }, []);

      console.log(props.FetchTransaction)

        const products = transaction.map(transact => {
          
          return {
            id:transact.agent.id === 'undefined' ? '':transact.id,
            Date:transact.agent.createdAt=== 'undefined' ? '': transact.agent.createdAt,
            Agent:transact.agent.businessName === 'undefined' ? '':transact.agent.businessName,
            TransactionID:transact.transactionId === 'undefined' ? '':transact.transactionId,
            Type:transact.transactionType.type === 'undefined' ? '': transact.transactionType.type ,
            TerminalID: transact.agent.bankTerminal.terminalId === 'undefined' ? '':transact.agent.bankTerminal.terminalId,
            Amount:transact.amount === 'undefined' ? '': transact.amount,
            Status: transact.statusCode,
            AgentFee:transact.agentFee=== 'undefined' ? '': transact.agentFee,
            StampDuty:transact.stampDuty=== 'undefined' ? '': transact.stampDuty,
            RRN:transact.rrn === 'undefined' ? '':transact.rrn ,
            // CardDetails:transact.rrn === 'undefined' ? '':transact.rrn ,
            PreBalance:transact.postPurseBalance.toFixed(2) === 'undefined' ? '':transact.postPurseBalance .toFixed(2),
            PostBalance:transact.postPurseBalance.toFixed(2) === 'undefined' ? '':transact.prePurseBalance .toFixed(2),

            // console
          }
      })
        
       
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'Date', text: 'Date'},
            { dataField: 'Agent', text: 'Agent',headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',padding:'10px'};
              },bodyStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',color:'#00249C'};
              }},
            { dataField: 'TransactionID', text: 'Transaction ID',style:{'width' : '15em',whiteSpace: 'normal', wordWrap: 'break-word'},headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center'};
              }},
            { dataField: 'Type', text: 'Type'},
            { dataField: 'TerminalID', text: 'Terminal ID'},
            { dataField: 'Amount', text: 'Amount (N)'},
            { dataField: 'Status', text: 'Status',formatter: (cellContent, row) => {
              console.log(cellContent,row)
              let statusMessage = ""
              let statusColor = ""
              switch (row.Status) {
                case "00":
                  statusMessage = "Successfull"
                  statusColor ="successful"
                  break;
                case "PP":
                case "09":
                  statusMessage = "Pending"
                  statusColor = "pending"
                  break;
              
                default:
                  statusMessage = "failure"
                  statusColor = "failure"
                  break;
              }
                return (
                  <h5>
                    <span className={`${statusColor}`}> { statusMessage }</span>
                  </h5>
                );
              }},
            { dataField: 'AgentFee', text: 'Agent Fee'},
            { dataField: 'StampDuty', text: 'Stamp Duty'},
            { dataField: 'RRN', text: 'RRN'},
            // { dataField: 'CardDetails', text: 'Card Details'},
            { dataField: 'PreBalance', text: 'Pre-Balance'},
            { dataField: 'PostBalance', text: 'Post-Balance'},
            // { dataField: 'BeneficiaryDetails', text: 'Beneficiary Details'},
          ];
        
          const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
          }];
        
          const pagination = paginationFactory({
            page: 1,
            sizePerPage: 10,
            lastPageText: '>>',
            firstPageText: '<<',
            nextPageText: '>',
            prePageText: '<',
            showTotal: true,
            alwaysShowAllBtns: true,
            onPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            },
            onSizePerPageChange: function (page, sizePerPage) {
              console.log('page', page);
              console.log('sizePerPage', sizePerPage);
            }
          });
  
  const closeExport = () => {
    showExportModal(false);
  };
  const closeFilter = () => {
    showFilterModal(false);
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
            <div className="agent-transact-header">
              <div>
                <p>Transactions</p>
                <p>An overview of all transactions on mCashPoint</p>
              </div>
              <div>
                <span>Print</span>

                <span onClick={() => showFilterModal(true)}>
                  <img src={Filter} />
                  Filter
                  <FilterModal
                    type={"Transaction "}
                    typetext={"Enter Transaction Type"}
                    idtext={"Enter Transaction ID"}
                    show={FilterModalActive}
                    close={closeFilter}
                  />
                </span>

                <span onClick={() => showExportModal(true)}>
                  <img src={Upload} />
                  Export
                  <ExportModal show={exportModalActive} close={closeExport} />
                </span>
              </div>
            </div>
            <div className="table-wrapper">
              <h4>All Merchant</h4>
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
            </div>
          </div>
        </DashboardTemplate>
      );
};
const mapStateToProps = state => (console.log(state),{
  transaction: state.transactions.transactions,
  loading:state.transactions.loading,
  error:state.transactions.error

});

export default connect(
  mapStateToProps,
  {
    FetchTransaction
  }
)(Transactions);