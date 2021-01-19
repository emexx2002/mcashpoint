import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_TRANSACTIONS } from "../actions/actionTypes";

const initialState = {
  transactions: [],
  transactionTotal:0,
  successTransaction:false
  // failure:'user cant be logged in'
};

const TransactionsReducer = (state = initialState, action) => {
    // console.log(action.type )
  switch (action.type) {
    case asyncActionName(FETCH_TRANSACTIONS).loading:
        // console.log('1')
      return { ...state, loading:true };
    case asyncActionName(FETCH_TRANSACTIONS).success:
        console.log(action.payload.recordsFiltered)

      return {
        ...state,
        transactions:action.payload.data,
        transactionTotal:action.payload.recordsFiltered,
        successTransaction: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_TRANSACTIONS).failure:
      return {
        ...state,
        error: true,
        loading:false,
        transactionTotal:'',
        successTransaction:false
        // failure
      };
    default:
      return state;
  }
};

export default TransactionsReducer;
