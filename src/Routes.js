import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import Dashboard from './Views/pages/dashboard'
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

class Routes extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Router history={history} forceRefresh>
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard}/>
              <Route  path="/" component={Login} exact />
              <PrivateRoute path= "/transactions" component={Transactions } />
              <PrivateRoute path= "/agents" component={Agents } />
              <PrivateRoute path= "/agentsmanager" component={AgentsManager } />
              <PrivateRoute path= "/purse" component={Purse } />
              <PrivateRoute path= "/audit" component={Audit } />
              <PrivateRoute path= "/appversion" component={AppVersion } />
              <Route path= "/settings" component={Settings } />
              
            </Switch>
          </Router>
        </Provider>
       
      </div>
    );
  }
}

export default Routes;
