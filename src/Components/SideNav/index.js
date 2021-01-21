import React, { Component } from 'react'
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from '../../Assets/img/mCP-logo 1.svg'
import Dashboard from '../../Assets/img/dashboard.png'
import Transaction from '../../Assets/img/transaction.png'
import Audit from '../../Assets/img/audit.png'
import Agentmanagaer from '../../Assets/img/agentmanager.png'
import Purse from '../../Assets/img/purse.png'
import Agent from '../../Assets/img/agents.png'
import Settings from '../../Assets/img/settings.png'
import Logout from '../../Assets/img/logout.png'
import { removeToken } from '../../utils/localStorage';
import { logoutUser } from "../../Redux/requests/userRequest";
import { connect } from 'react-redux';


class SideNav extends Component {
  constructor(props){
        
    super(props);
  }
  _handleSignOut(){
    this.props.logoutUser()
  }  

  render() {
    return (
      <div className="sidenav-wrap">
        <div className="navbarwrapper">
          <div className="navbarinnerwrapper">
            <div className="logo">
              <img src={Logo} alt="paycenterlogo" />
            </div>
            <div className="sidenavlist">
              <ul className="list-group">
                <NavLink to="/dashboard" activeClassName="current" exact={true}>
                  <li className="list-group-item ">
                    <img src={Dashboard} alt="" />
                    Dashboard
                  </li>
                </NavLink>
                <NavLink to="/transactions" activeClassName="current">
                  <li className="list-group-item ">
                    <img src={Transaction} alt="" /> Transactions
                  </li>
                </NavLink>
                <NavLink to="/agents" activeClassName="current">
                  <li className="list-group-item">
                    <img src={Agent} alt="" /> Agents
                  </li>
                </NavLink>
                <NavLink to="/agentsmanager" activeClassName="current">
                  <li className="list-group-item">
                    <img src={Agentmanagaer} alt="" /> Agent Manager
                  </li>
                </NavLink>
                <NavLink to="/purse" activeClassName="current">
                  <li className="list-group-item">
                    <img src={Purse} alt="" /> Purse
                  </li>
                </NavLink>
                <NavLink to="/audit" activeClassName="current">
                  <li className="list-group-item">
                    <img src={Audit} alt="" /> Audit
                  </li>
                </NavLink>
                <NavLink to="/appversion" activeClassName="current">
                  <li className="list-group-item">
                    <img src={""} alt="" /> AppVersion
                  </li>
                </NavLink>

                <div className="list-group footer">
                  <NavLink to="/settings" activeClassName="current">
                    <li className="list-group-item ">
                      <img src={Settings} alt="" />
                      Settings
                    </li>
                  </NavLink>
                  <NavLink
                    to="#"
                    activeClassName=""
                    onClick={this._handleSignOut.bind(this)}
                  >
                    <li className="list-group-item ">
                      <img src={Logout} alt="" /> Logout
                    </li>
                  </NavLink>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div className="menu-overlay "></div>
      </div>
    );
  }
}



export default connect(
null,
{
  logoutUser
}
)(SideNav);