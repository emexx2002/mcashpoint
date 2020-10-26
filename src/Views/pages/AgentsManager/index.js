import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import Plus from '../../../Assets/img/+.png'
import DashboardTemplate from "../../template/dashboardtemplate";
import Tabs from "react-bootstrap/Tabs";
import Tab from 'react-bootstrap/Tab'
import CreateAgentModal from "./CreateAgent";


import './style.css';


const AgentsManager = () => {
 
      const [createModalActive, showCreateModal] = React.useState(false);

      const [key, showActive] = React.useState('home');


    
        const products = [
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
            { id: 1, AgentID: 'MCP/AGT/LA/64', BusinessName: 'With God Enterprenium', UserName:'Chinweoke', PhoneNumber:'08068351846', State:'Lagos',LGA:'Lagos Mainland',DateCreated:'Wed | May 6, 2020'},
          
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
           
            { dataField: 'State', text: 'State'},
           
            { dataField: 'LGA', text: 'LGA'},
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

        //   handleSelect = (key) => {
        //    console.log(key)
  
            
        // }
        
      return (
        
          <DashboardTemplate>
              <div className='transact-wrapper'>
              <p>Agents</p>
                  <div className='agent-transact-header'>
               
                      <div>
                         
                         <div className='manage-agent'>
                            <span>Manage all agents on mCashPoint</span>
                            {/* <span><img src={Plus} />Create Agent Manager</span>
                            <span><img src={Plus} />Settlement</span> */}
                         </div>

                      </div>
                      <div className='manage-agent'>
                          <span>Print</span>

                          <span><img src={Filter} />Filter</span>

                          <span> <img src={Upload} />Export</span>
                      </div>

                      
                  </div>
                
                
                   <Tabs defaultActiveKey={key} id="uncontrolled-tab-example" onSelect={(key) => {key=='profile'?showCreateModal(true):showCreateModal(false) }}>
                    <Tab eventKey={"home"} title="View Agent Manager">
                    <div className='table-wrapper'>
                      <h4>All Agents</h4>
                      
                        <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />
                    </div>
                    </Tab>
                    <Tab eventKey={"profile"} title="Create Agent Manager">
                    <CreateAgentModal
                      show={createModalActive}
                      close={() => showCreateModal(false) && showActive('home')}
                    />
                      <div className='table-wrapper'>
                      <h4>All Agents</h4>
                      
                        <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />
                    </div>
                    </Tab>
                    <Tab eventKey={"contact"} title="Settlement" >
                    <div className='table-wrapper'>
                      <h4>All Agents</h4>
                      
                        <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />
                    </div>
                    </Tab>
                  </Tabs>

                 
              </div>
          </DashboardTemplate>
      )
    
}
export default AgentsManager
