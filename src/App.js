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
import Settings from './Views/pages/Settings'
import Login from './Views/pages/Login'
import { createHashHistory } from 'history'
export const history = createHashHistory()


class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route  path="/" component={Dashboard} exact />
            <Route  path="/login" component={Login} exact />
            <Route path= "/transactions" component={Transactions } />
            <Route path= "/agents" component={Agents } />
            <Route path= "/agentsmanager" component={AgentsManager } />
            <Route path= "/purse" component={Purse } />
            <Route path= "/audit" component={Audit } />
            <Route path= "/settings" component={Settings } />
            <Route path="*" component={Dashboard} /> 
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
