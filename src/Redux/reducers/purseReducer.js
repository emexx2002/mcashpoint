import { asyncActionName } from "../../utils/asyncUtil";
import { AGENT_PURSE, CENTRAL_PURSE } from "../actions/actionTypes";

const initialState = {
  agentPurse: [],
  centralPurse: []
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
    default:
      return state;
  }
};

export default AgentPurse;
