import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Dashboard from './Views/pages/dashboard'
import Admin from './Views/pages/Admin'
import Transactions from './Views/pages/Transations'
import Agents from './Views/pages/Agents'
import AgentsManager from './Views/pages/AgentsManager'
import Purse from './Views/pages/Purse'
import Audit from './Views/pages/Audit'
import AppVersion from './Views/pages/AppVersion'
import Settings from './Views/pages/Settings'
import Login from './Views/pages/Login'
import { createHashHistory } from 'history'
import { Provider } from "react-redux";
import store from "./Redux/store";
import PrivateRoute from './utils/privateRoute'
import {history} from './utils/history'
import  AuthRequired from "./Components/authRequired"

class Routes extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history} >
            <Switch>
              <AuthRequired exact path="/dashboard" component={Dashboard}/>
              <AuthRequired exact path="/admin" component={Admin}/>
              <Route  path="/" component={Login} exact />
              <PrivateRoute path= "/transactions" component={Transactions } />
              <AuthRequired path= "/agents" component={Agents } adminRequred/>
              <AuthRequired path= "/agentsmanager" component={AgentsManager } adminRequred/>
              <AuthRequired path= "/purse" component={Purse } adminRequred/>
              <AuthRequired path= "/audit" component={Audit } adminRequred/>
              <AuthRequired path= "/appversion" component={AppVersion } adminRequred/>
              <PrivateRoute path= "/settings" component={Settings } />
              
            </Switch>
          </Router>
        </Provider>
       
      </div>
    );
  }
}

export default Routes;
