import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import { FetchAgentManager} from "../../../Redux/requests/agentManagerRequest";
import Loader from "../../../Components/secondLoader"
import DashboardTemplate from "../../template/dashboardtemplate";
import { connect } from 'react-redux';

import './style.css';


const FetchAgentsManager = (props) => {
  const { FetchAgentManager: FetchAgentManagers, agentmanager, loading} = props;
  console.log(agentmanager)
  // const [alltransactions, setTransactions] = useState([FetchTransactions]);
  // const [status, setStatus] = useState([FetchTransactions]);
  // console.log('jj',alltransactions)

  useEffect(() => {
    FetchAgentManagers();
  }, []);

  // const products = {}
  
  const products = agentmanager.map((agent,index) => {
          console.log(agent)
    return {
      id:index,
      AgentID:agent.user.memberId === null ? '':agent.user.memberId,
      BusinessName:agent.businessName  === null ? '':agent.businessName,
      UserName:agent.user.username  === null ? '':agent.user.username ,
      PhoneNumber: agent.phone === null ? '':agent.phone ,
      State:agent.state.stateName === null ? '': agent.state.stateName,
      LGA:agent.lga.lga === null ? '': agent.lga.lga,
      DateCreated:agent.createdAt === null ? '': agent.createdAt
    }
})
  
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'AgentID', text: 'Agent ID'},
            { dataField: 'BusinessName', text: 'Business Name',headerStyle: (colum, colIndex) => {
                return { width: '150px', textAlign: 'center',padding:'10px'};
              }},
            { dataField: 'UserName', text: 'User Name',style:{'width' : '20em',whiteSpace: 'normal', wordWrap: 'break-word',padding:'10px'},headerStyle: (colum, colIndex) => {
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
        
      return (
          <div>
              {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}
                 <div className='table-wrapper'>
                   <h4>All Agents</h4>
                 <BootstrapTable bootstrap4 keyField='id' data={products} columns={columns} defaultSorted={defaultSorted} pagination={pagination} bordered={ false }  hover condensed />

                 </div>
          </div>
 );
};
const mapStateToProps = state => (console.log(state),{
  agentmanager: state.agentmanager.agentmanager,
  loading:state.agentmanager.loading,
  error:state.agentmanager.error

});

export default connect(
  mapStateToProps,
  {
    FetchAgentManager
  }
)(FetchAgentsManager);
