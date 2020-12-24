import { combineReducers } from "redux";
import users from "./userReducer";
import transactions from "./transactionsReducer";
import agents from "./agentReducer";
import agentmanager from "./agentManagerReducer";
import dashboard from "./dashboardReducer";
import audit from "./auditReducer";
import purse from "./purseReducer"


export default combineReducers({
    users,
    transactions,
    agents,
    agentmanager,
    dashboard,
    audit,
    purse
});