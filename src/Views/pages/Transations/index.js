import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import DashboardTemplate from "../../template/dashboardtemplate";
import './style.css';


class Transactions extends Component {
    state = {
  
    };

    
    render() {

  
        const products = [
            { id: 1, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 2, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 3, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 4, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 5, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 6, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 7, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 8, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 9, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 10, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 11, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 12, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 13, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 14, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 15, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 16, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 17, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
            { id: 18, Date: '3423', Agent: 'With God Enterprenium', TransactionID:'TT123456765654', Type:'Cashout', TerminalID:'202345', Amount:'N12344',Status:'pendng',AgentFee:'N1232', StampDuty:'N890', RRN:'097888rrr', CardDetails:'65456',PreBalance:'N98789'},
           
          ];
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'Date', text: 'Date'},
            { dataField: 'Agent', text: 'Agent',headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',padding:'10px'};
              },bodyStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',color:'#00249C',};
              }},
            { dataField: 'TransactionID', text: 'Transaction ID',style:{'width' : '20em',whiteSpace: 'normal', wordWrap: 'break-word'},headerStyle: (colum, colIndex) => {
                return { width: '200px', textAlign: 'center'};
              }},
            { dataField: 'Type', text: 'Type'},
            { dataField: 'TerminalID', text: 'Terminal ID'},
            { dataField: 'Amount', text: 'Amount (N)'},
            { dataField: 'Status', text: 'Status',formatter: (cellContent, row) => {
                return (
                  <h5>
                    <span className="pending"> pending</span>
                  </h5>
                );
              }},
            { dataField: 'AgentFee', text: 'Agent Fee'},
            { dataField: 'StampDuty', text: 'Stamp Duty'},
            { dataField: 'RRN', text: 'RRN'},
            { dataField: 'CardDetails', text: 'Card Details'},
            { dataField: 'PreBalance', text: 'Pre-Balance'},
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
        
      return (
          <DashboardTemplate>
              <div className='transact-wrapper'>
                  <div className='agent-transact-header'>
                      <div>
                          <p>Transactions</p>
                          <p>An overview of all transactions on mCashPoint</p>
                      </div>
                      <div>
                          <span>Print</span>

                          <span><img src={Filter} />Filter</span>

                          <span> <img src={Upload} />Export</span>
                      </div>
                  </div>
                 <div className='table-wrapper'>
                   <h4>All Merchant</h4>
                 <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />

                 </div>
              </div>
          </DashboardTemplate>
      )
    }
}
export default Transactions
