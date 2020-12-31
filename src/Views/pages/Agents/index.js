import React, {useCallback, useState,useEffect } from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.css';
import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import Upload from '../../../Assets/img/upload.png'
import Filter from '../../../Assets/img/filter.png'
import { FetchAgent,ActivatateCode } from "../../../Redux/requests/agentRequest";
import Loader from "../../../Components/secondLoader"
import DashboardTemplate from "../../template/dashboardtemplate";
import { connect } from 'react-redux';
import { Modal } from "react-bootstrap";
import ExportModal from "../Exports/index"
import FilterModal from "../Filter/index"


import './style.css';


const Agents = (props) => {
  const { FetchAgent: FetchAgents, ActivatateCode:ActivatateCodes,  agents, loading,activationCode, success} = props;
  const [smShow, setSmShow] = useState(false);
  const [activation, setActivation] = useState(null);
  const [ExportModalActive, showExportModal] = useState(false);
  const [FilterModalActive, showFilterModal] = useState(false);
  // const [status, setStatus] = useState([FetchTransactions]);
  console.log(activationCode)

  useEffect(() => {
    FetchAgents();
  
  }, []);

  // const products = {}
  
  const products = agents.map((agent,index) => {
          console.log(agent)
    return {
      id:index,
      AgentID:agent.id === 'undefined' ? '':agent.id,
      BusinessName:agent.businessName  === 'undefined' ? '':agent.businessName,
      UserName:agent.user.username  === 'undefined' ? '':agent.user.username ,
      PhoneNumber: agent.businessPhone === 'undefined' ? '':agent.businessPhone ,
      Action:agent.user.memberId === 'undefined' ? '':agent.user.memberId ,
      TerminalID:agent.bankTerminal.terminalId === 'undefined' ? '': agent.bankTerminal.terminalId,
      DateCreated:agent.createdAt === 'undefined' ? '': agent.createdAt
    }
})

      function ActivatateCode(agentId) {
        setActivation(null)
        ActivatateCodes(agentId)
        if(activation !== null ){
          setSmShow(true)
          setActivation(activationCode)
        }
        
      }
    //  const   ActivatateCode = (agentId) => {
    //     console.log('hello')
    //   ActivatateCodes(agentId)

    // }
        
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
              console.log()
                return (
                  <h5>
                  <button type="button"  className="btn assign-terminal">Assign Terminal</button>
                 </h5>
                );
              }},
            { dataField: 'TerminalID', text: 'Terminal ID'},
            { dataField: 'ActivationCode', text: 'Activation Code',formatter: (cellContent, row) => {
                return (
                  <h5>
                   <button type="button" onClick={ () => ActivatateCode(row.AgentID)   } className="btn generate-code">Generate</button>

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
           const closeExport = () => {
             showExportModal(false);
           };
           const closeFilter = () => {
             showFilterModal(false);
           };
        
      return (
        <DashboardTemplate>
          <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Header closeButton>
              <Modal.Title id="example-modal-sizes-title-sm">
                {activation}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>...</Modal.Body>
          </Modal>
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
                <p>Agents</p>
                <p>A list of all agents on mCashPoint</p>
              </div>
              <div>
                <span>Print</span>

                <span onClick={() => showFilterModal(true)}>
                  <img src={Filter} />
                  Filter
                  <FilterModal
                    type={"Agent "}
                    typetext={"Enter Agent Type"}
                    idtext={"Enter Agent ID"}
                    show={FilterModalActive} close={closeFilter} />
                </span>

                <span onClick={() => showExportModal(true)}>
                  <img src={Upload} />
                  Export
                  <ExportModal show={ExportModalActive} close={closeExport} />
                </span>
              </div>
            </div>
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
            </div>
          </div>
        </DashboardTemplate>
      );
};
const mapStateToProps = state => (console.log(state),{
  agents: state.agents.agents,
  activationCode:state.agents.activationCode,
  loading:state.agents.loading,
  error:state.agents.error,
  success: state.agents.successmodal,


});

export default connect(
  mapStateToProps,
  {
    FetchAgent,ActivatateCode
  }
)(Agents);
