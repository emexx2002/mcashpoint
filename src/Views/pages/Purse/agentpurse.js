import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FetchAgentPurse} from "../../../Redux/requests/agentPurseRequest";
import Loader from "../../../Components/secondLoader"
import { connect } from 'react-redux';
import CreditDebit from "../../../Components/credit"
import './style.css';

const AgentPurse = (props) => {
  const[credit, showCredit]=useState(false)
  const { FetchAgentPurse: FetchAgentPurses, agentPurse, loading} = props;
  console.log(agentPurse)
    useEffect(() => {
      FetchAgentPurses();
    }, []);
   const closeCredit = () => {
     showCredit(false);
   };
       

        const products = agentPurse.map((agent,index) => {
          console.log(agent)

          return {
          id:index,
          AgentID:agent.agent === undefined ? '':agent.agent.user.memberId,
          BusinessName:agent.agent.businessName  === 'undefined' ? '':agent.agent.businessName ,
          AgentName:agent.agent.user.username === 'undefined' ? '':agent.agent.user.username,
          Balance:agent.balance === 'undefined' ? '':agent.balance,
          DateCreated:agent.createdAt === 'undefined' ? '': agent.createdAt
          // pageAccessed:aud.agent.requestMethod === 'undefined' ? '':aud.user.requestMethod,
          // DataAccessed:aud.user.username === 'undefined' ? '':aud.user.username,

          }
          })
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'AgentID', text: 'Agent ID'},
            { dataField: 'BusinessName', text: 'Business Name',headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',padding:'10px'};
              }},
            { dataField: 'AgentName', text: 'Agent Name',style:{'width' : '20em',whiteSpace: 'normal', wordWrap: 'break-word'},headerStyle: (colum, colIndex) => {
                return { width: '200px', textAlign: 'center'};
              }},
            { dataField: 'Balance', text: 'Balance '},
            { dataField: 'Action', text: 'Action',formatter: (cellContent, row) => {
              console.log(cellContent,row)
                return (
                  <h5>
                  <button type="button"  className="btn assign-terminal">CREDIT/DEBIT</button>
                 </h5>
                );
              }},
            { dataField: 'DateCreated', text: 'Date Created'},
            
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
              pagination={pagination}
              bordered={false}
              hover
              condensed
            />
            <button onClick={() => showCredit(true)}>Credit</button>
            <CreditDebit show={credit} close={closeCredit}/>
            {/* <button onClick={""}>CREDIT</button> */}
          </div>
        </div>
      );
    
}

const mapStateToProps = state => (console.log(state),{
  agentPurse:state.purse.agentPurse,
  loading:state.purse.loading,
  error:state.purse.error

});

export default connect(
  mapStateToProps,
  {
     FetchAgentPurse
  }
)(AgentPurse);
