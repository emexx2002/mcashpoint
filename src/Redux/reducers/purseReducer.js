import { asyncActionName } from "../../utils/asyncUtil";
import { AGENT_PURSE } from "../actions/actionTypes";

const initialState = {
  agentPurse: [],
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
    default:
      return state;
  }
};

export default AgentPurse;
