import React, { Component } from "react";
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';



import './style.css';


const AgentsManager = () => {
    
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
        
          <div>
              
              <div className='table-wrapper'>
                   <h4>Central Purse</h4>
                 <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />

             </div>
             
          </div>
      )
    
}
export default AgentsManager
