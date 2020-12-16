import { combineReducers } from "redux";
import users from "./userReducer";
import transactions from "./transactionsReducer";
import agents from "./agentReducer";


export default combineReducers({
    users,
    transactions,
    agents
});