import { combineReducers } from "redux";
import users from "./userReducer";
import transactions from "./transactionsReducer"

export default combineReducers({
    users,
    transactions
});