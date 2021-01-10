import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FetchCentralPurse} from "../../../Redux/requests/agentPurseRequest";
import Loader from "../../../Components/secondLoader"
import { connect } from 'react-redux';
import './style.css';

const CenttalPurse= (props) => {
  const { FetchCentralPurse: FetchCentralPurses, centralPurse, loading} = props;
  console.log(centralPurse)
    useEffect(() => {
      FetchCentralPurses();
    }, []);
   
       

        const products = centralPurse.map((agent,index) => {
          console.log(agent)
          return {
          id:index,
          TransactionType:agent.transaction.transactionType === undefined ? '':agent.transaction.transactionType ,
          TransactionID:agent.transaction.transactionID   === 'undefined' ? '':agent.transaction.transactionID ,
          Amount:agent.transaction.amount  === 'undefined' ? '':agent.transaction.amount,
          MCPCut:agent.transaction.thirdpartyCut === 'undefined' ? '':agent.transaction.thirdpartyCut,
          // PreBalance:agent.purseBalance === 'undefined' ? '': agent.purseBalance,
          // PostBalance:agent.purseBalance === 'undefined' ? '':agent.purseBalance,
          Description:agent.reason === 'undefined' ? '':agent.reason,

          }
          })
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'TransactionType', text: ' Transaction Type'},
            { dataField: 'TransactionID', text: 'Transaction ID'},
            { dataField: 'Amount', text: 'Amount'},
            { dataField: 'MCPCut', text: 'MCP Cut'},
            { dataField: 'ESLCharge', text: 'ESL Charge'},
            
            { dataField: 'PreBalance', text: 'Pre-Balance '},
            { dataField: 'PostBalance', text: 'Post-Balance '},
            { dataField: 'Description', text: 'Description Name',headerStyle: (colum, colIndex) => {
              return { width: '250px', textAlign: 'center',padding:'10px'};
            }},
            // { dataField: 'Description', text: 'Description'},
            
          ];
        
          const defaultSorted = [{
            dataField: 'name',
            order: 'desc'
          }];
        
          const pagination = paginationFactory({
            page: 1,
            sizePerPage: 20,
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
          <div>
                           {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}

              <div className='table-wrapper'>

                   <h4>All Agents</h4>
                 <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />

             </div>
            
          </div>
      )
    
}

const mapStateToProps = state => (console.log(state),{
  centralPurse:state.purse.centralPurse,
  loading:state.purse.loading,
  error:state.purse.error

});

export default connect(
  mapStateToProps,
  {
    FetchCentralPurse
  }
)(CenttalPurse);
 