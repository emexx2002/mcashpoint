import { asyncActionName } from "../../utils/asyncUtil";
import { AGENT_PURSE, CENTRAL_PURSE, CREDIT_DEBIT_PURSE } from "../actions/actionTypes";

const initialState = {
  agentPurse: [],
  centralPurse: [],
  cdsuccess:false
};

const AgentPurse = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(AGENT_PURSE).loading:
      return { ...state, loading:true };
    case asyncActionName(AGENT_PURSE).success:

      return {
        ...state,
        agentPurse:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(AGENT_PURSE).failure:
      return {
        ...state,
        error: true,
        success: false,
        loading:false,
        // failure
      };
      case asyncActionName(CENTRAL_PURSE).loading:
        return { ...state, loading:true };
      case asyncActionName(CENTRAL_PURSE).success:
  
        return {
          ...state,
          centralPurse:action.payload,
          success: true,
          loading:false,
          error: false,
        };
      case asyncActionName(CENTRAL_PURSE).failure:
        return {
          ...state,
          error: true,
          success: false,
          loading:false,
          // failure
        };
        case asyncActionName(CREDIT_DEBIT_PURSE).loading:
          return { ...state, loading:true };
        case asyncActionName(CREDIT_DEBIT_PURSE).success:
    
          return {
            ...state,
            cdsuccess: true,
            loading:false,
            error: false,
          };
        case asyncActionName(CREDIT_DEBIT_PURSE).failure:
          return {
            ...state,
            error: true,
            cdsuccess: false,
            loading:false,
            // failure
          };
  
    default:
      return state;
  }
};

export default AgentPurse;
