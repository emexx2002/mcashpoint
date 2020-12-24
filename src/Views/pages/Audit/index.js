import React, { useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import { FetchAudit} from "../../../Redux/requests/auditRequest";
import Loader from "../../../Components/secondLoader"
import DashboardTemplate from "../../template/dashboardtemplate";
import { connect } from 'react-redux';
import './style.css';


const Audit = (props) => {
  const { FetchAudit: FetchAudits, audits, loading} = props;
console.log(audits)
  useEffect(() => {
    FetchAudits();
  }, []);


        
         const products = audits.map((aud,index) => {
            return {
            id:index,
            AgentID:aud.user.memberId === 'undefined' ? '':aud.user.memberId,
            UserName:aud.user.username === 'undefined' ? '':aud.user.username,
            Actions:aud.action === 'undefined' ? '':aud.action,
            IpAdress:aud.ip === 'undefined' ? '':aud.ip,
            RequestMethod:aud.requestMethod === 'undefined' ? '':aud.requestMethod,
            // pageAccessed:aud.user.requestMethod === 'undefined' ? '':aud.user.requestMethod,
            // DataAccessed:aud.user.username === 'undefined' ? '':aud.user.username,

            }
            })

          const columns = [
            // { dataField: 'id', text: 'Id'},
            { dataField: 'AgentID', text: 'Agent ID'},
            { dataField: 'UserName', text: 'User Name',style:{'width' : '20em',whiteSpace: 'normal', wordWrap: 'break-word'},headerStyle: (colum, colIndex) => {
              return { width: '200px', textAlign: 'center'};
            }},
            { dataField: 'Actions', text: 'Actions'},

            { dataField: 'IpAdress', text: 'IP Address'},

            { dataField: 'pageAccessed', text: 'Page Accessed'},

            { dataField: 'RequestMethod', text: 'Request Method'},

            { dataField: 'DataAccessed', text: 'Date Accessed'},
            
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
              {loading && <Loader type="TailSpin" type="Oval" height={60} width={60} color="#1E4A86" />}

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

const mapStateToProps = state => (console.log(state),{
  audits: state.audit.audit,
  loading:state.audit.loading,
  error:state.audit.error

});

export default connect(
  mapStateToProps,
  {
    FetchAudit
  }
)(Audit);
