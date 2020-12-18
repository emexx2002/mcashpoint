import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_AGENTS_MANAGER  } from "../actions/actionTypes";

const initialState = {
  agentmanager: [],
};

const AgentManagerReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(FETCH_AGENTS_MANAGER ).loading:
        console.log('1')
      return { ...state, loading:true };
    case asyncActionName(FETCH_AGENTS_MANAGER ).success:
        console.log('2')

      return {
        ...state,
        agentmanager:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_AGENTS_MANAGER ).failure:
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

export default AgentManagerReducer;
