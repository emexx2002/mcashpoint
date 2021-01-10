import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import { FetchSettlement} from "../../../Redux/requests/agentManagerRequest";
import Loader from "../../../Components/secondLoader"
import DashboardTemplate from "../../template/dashboardtemplate";
import { connect } from 'react-redux';

import './style.css';


const FetchAgentsSettlement = (props) => {
  const { FetchSettlement: FetchSettlements, agents, loading,settlement} = props;
  console.log(settlement)
  // const [alltransactions, setTransactions] = useState([FetchTransactions]);
  // const [status, setStatus] = useState([FetchTransactions]);
  // console.log('jj',alltransactions)

  useEffect(() => {
    FetchSettlements();
  }, []);

  const products = settlement.map((settle,index) => {
    console.log(settle.ambassador.accountName,settle.ambassador.accountNumber)
    return {
      id:index,
      AgentManagerName:settle.ambassador.user.fullName === null ? '':settle.ambassador.user.fullName,
      AccountDetails:settle.ambassador  === null ? '':settle.ambassador.accountName + " | " + settle.ambassador.accountNumber + " | " +settle.ambassador.bank.name,
      AmountAccured:settle.amountAccrued  === null ? '':settle.amountAccrued ,
      Month: settle.month === null ? '':settle.month ,
      Year:settle.year === null ? '': settle.year,
    }
})
  
        
          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'AgentManagerName', text: ' Agent Manager Name'},
            { dataField: 'AccountDetails', text: 'Account Details'},
            { dataField: 'AmountAccured', text: 'Amount Accured'},
            { dataField: 'Month', text: 'Month'},
            { dataField: 'Year', text: 'Year'},
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
  settlement: state.agentmanager.settlement,
  loading:state.agentmanager.loading,
  error:state.agentmanager.error

});

export default connect(
  mapStateToProps,
  {
    FetchSettlement
  }
)(FetchAgentsSettlement);
