import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_TRANSACTIONS } from "../actions/actionTypes";

const initialState = {
  transactions: [],
  // failure:'user cant be logged in'
};

const TransactionsReducer = (state = initialState, action) => {
    console.log(action.type )
  switch (action.type) {
    case asyncActionName(FETCH_TRANSACTIONS).loading:
        console.log('1')
      return { ...state, loading:true };
    case asyncActionName(FETCH_TRANSACTIONS).success:
        console.log('2')

      return {
        ...state,
        transactions:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_TRANSACTIONS).failure:
      return {
        ...state,
        error: true,
        success: false,
        loading:false,
        // failure
      };
    default:
      return state;
  }
};

export default TransactionsReducer;
