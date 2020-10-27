import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import DashboardTemplate from "../../template/dashboardtemplate";
import './style.css';


class Audit extends Component {
    state = {
  
    };

    
    render() {

  
        const products = [
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846',Action:'Assign terminal', TerminalID:'202345', TransactionHistory:'View',ActivationCode:'Generate',AgentManager:'Ujunwa Cyntia', DateCreated:'Wed | May 6, 2020'},
        ];
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'AgentID', text: 'Agent ID'},
            { dataField: 'BusinessName', text: 'Business Name',headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',padding:'10px'};
              }},
            { dataField: 'UserName', text: 'User Name',style:{'width' : '20em',whiteSpace: 'normal', wordWrap: 'break-word'},headerStyle: (colum, colIndex) => {
                return { width: '200px', textAlign: 'center'};
              }},
            { dataField: 'PhoneNumber', text: 'Phone Number'},
            { dataField: 'Action', text: 'Action',formatter: (cellContent, row) => {
                return (
                  <h5>
                  <button type="button" class="btn assign-terminal">Assign Terminal</button>

                 </h5>
                );
              }},
            { dataField: 'TerminalID', text: 'Terminal ID'},
            { dataField: 'TransactionHistory', text: 'Transaction History',formatter: (cellContent, row) => {
                return (
                  <h5>
                   <button type="button" class="btn view">view</button>

                  </h5>
                );}
              },
            { dataField: 'ActivationCode', text: 'Activation Code',formatter: (cellContent, row) => {
                return (
                  <h5>
                   <button type="button" class="btn generate-code">Generate</button>

                  </h5>
                );
              }},
            { dataField: 'AgentManager', text: 'Agent Manager'},
            { dataField: 'DateCreated', text: 'Date Created'},
            
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
                          <p>Audit</p>
                          <p>Overview of agent activities on mCashPoint</p>
                      </div>
                     
                  </div>
                 <div className='table-wrapper'>
                   <h4>All Agents</h4>
                 <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />

                 </div>
              </div>
          </DashboardTemplate>
      )
    }
}
export default Audit
