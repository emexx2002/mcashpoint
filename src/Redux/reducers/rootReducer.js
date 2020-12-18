import { combineReducers } from "redux";
import users from "./userReducer";
import transactions from "./transactionsReducer";
import agents from "./agentReducer";
import agentmanager from "./agentManagerReducer";


export default combineReducers({
    users,
    transactions,
    agents,
    agentmanager
});