import React, { Component } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/img/mCP-logo 1.svg";
import Dashboard from "../../Assets/img/dashboard.png";
import Transaction from "../../Assets/img/transaction.png";
import Audit from "../../Assets/img/audit.png";
import Agentmanagaer from "../../Assets/img/agentmanager.png";
import Purse from "../../Assets/img/purse.png";
import Agent from "../../Assets/img/agents.png";
import Settings from "../../Assets/img/settings.png";
import Logout from "../../Assets/img/logout.png";
import { removeToken } from "../../utils/localStorage";
import { logoutUser } from "../../Redux/requests/userRequest";
import { connect } from "react-redux";

const isVisibleToUser = (roleCode, user) =>
  user.roleGroup.role.some((role) => role.roleCode === roleCode);

class SideNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "",
    };
    this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
  }
  _handleSignOut() {
    removeToken();
    window.location.replace("/");
  }
  forceUpdateHandler() {
    this.forceUpdate();
  }

  render() {
    const token = JSON.parse(localStorage.getItem("data"));
    let { name } = token.user.roleGroup;

    return (
      <div className="sidenav-wrap">
        <div className="navbarwrapper">
          <div className="navbarinnerwrapper">
            <div className="logo">
              <img src={Logo} alt="paycenterlogo" />
            </div>
            <div className="sidenavlist">
              <ul className="list-group">
                <NavLink
                  to="/dashboard"
                  activeClassName="current"
                  onClick={this.forceUpdateHandler}
                >
                  <li className="list-group-item ">
                    <img src={Dashboard} alt="" />
                    <span className="list-group-item-text">Dashboard </span>
                  </li>
                </NavLink>
                {isVisibleToUser("ROLE_VIEW_ALL_ADMIN", token.user) && (
                  <NavLink to="/admin" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Agent} alt="" />
                      <span className="list-group-item-text">Admin </span>
                    </li>
                  </NavLink>
                )}
                {isVisibleToUser("ROLE_VIEW_ALL_TRANSACTION", token.user) && (
                  <NavLink to="/transactions" activeClassName="current">
                    <li className="list-group-item ">
                      <img src={Transaction} alt="" />{" "}
                      <span className="list-group-item-text">Transactions</span>
                    </li>
                  </NavLink>
                )}
                {isVisibleToUser("ROLE_VIEW_ALL_AGENT", token.user) && (
                  <NavLink to="/agents" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Agent} alt="" />{" "}
                      <span className="list-group-item-text">Agents </span>
                    </li>
                  </NavLink>
                )}
                {isVisibleToUser("ROLE_VIEW_ALL_AGENT", token.user) && (
                  <NavLink to="/agentsmanager" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Agentmanagaer} alt="" />{" "}
                      <span className="list-group-item-text">
                        Agent Manager{" "}
                      </span>
                    </li>
                  </NavLink>
                )}
                {isVisibleToUser("ROLE_VIEW_AGENT_FEE", token.user) && (
                  <NavLink to="/agentfees" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Agentmanagaer} alt="" />{" "}
                      <span className="list-group-item-text">Agent Fees </span>
                    </li>
                  </NavLink>
                )}
                {isVisibleToUser("ROLE_VIEW_PURSE", token.user) && (
                  <NavLink to="/purse" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Purse} alt="" />{" "}
                      <span className="list-group-item-text">Purse </span>
                    </li>
                  </NavLink>
                )}

                {isVisibleToUser("ROLE_VIEW_AUDIT_LOG", token.user) && (
                  <NavLink to="/audit" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Audit} alt="" />{" "}
                      <span className="list-group-item-text">Audit </span>
                    </li>
                  </NavLink>
                )}

                {isVisibleToUser("ROLE_VIEW_AUDIT_LOG", token.user) && (
                  <NavLink to="/appversion" activeClassName="current">
                    <li className="list-group-item">
                      <img src={Audit} alt="" />
                      <span className="list-group-item-text">App Version </span>
                    </li>
                  </NavLink>
                )}

                <div className="list-group footer">
                  <NavLink to="/settings" activeClassName="current">
                    <li className="list-group-item ">
                      <img src={Settings} alt="" />
                      <span className="list-group-item-text">Settings </span>
                    </li>
                  </NavLink>
                  <NavLink
                    to="#"
                    activeClassName=""
                    onClick={this._handleSignOut.bind(this)}
                  >
                    <li className="list-group-item ">
                      <img src={Logout} alt="" />{" "}
                      <span className="list-group-item-text">Logout </span>
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

const mapStateToProps = (state) => ({
  role: state.users.role,
});

export default connect(mapStateToProps, {
  logoutUser,
})(SideNav);
