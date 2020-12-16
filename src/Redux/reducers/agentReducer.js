import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_AGENTS } from "../actions/actionTypes";

const initialState = {
  agents: [],
};

const AgentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(FETCH_AGENTS).loading:
        console.log('1')
      return { ...state, loading:true };
    case asyncActionName(FETCH_AGENTS).success:
        console.log('2')

      return {
        ...state,
        agents:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_AGENTS).failure:
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

export default AgentsReducer;
