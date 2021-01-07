import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_AGENTS, ACTIVATION_CODE,FETCH_BANK_TERMINAL,ACTIVATE_ASSIGN_TERMINAL } from "../actions/actionTypes";

const initialState = {
  agents: [],
  activationCode:null,
  bankTerminal:[]
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
      case asyncActionName(ACTIVATION_CODE).loading:
        return { ...state, loading: true };
      case asyncActionName(ACTIVATION_CODE).success:
        return {
          ...state,
          loading:false,
          activationCode: action.payload,
          successmodal: true
        };
      case asyncActionName(ACTIVATION_CODE).failure:
        return {
          ...state,
          loading:false,
          error: true,
          successmodal: false
        };
      case asyncActionName(FETCH_BANK_TERMINAL).loading:
        return { ...state, loading: true };
      case asyncActionName(FETCH_BANK_TERMINAL).success:
        return {
          ...state,
          loading:false,
          bankTerminal: action.payload,
          successmodal: true
        };
      case asyncActionName(FETCH_BANK_TERMINAL).failure:
        return {
          ...state,
          loading:false,
          error: true,
          successmodal: false
        };
      case asyncActionName(ACTIVATE_ASSIGN_TERMINAL).loading:
        return { ...state, loading: true };
      case asyncActionName(ACTIVATE_ASSIGN_TERMINAL).success:
        return {
          ...state,
          loading:false,
          assignTerminal: action.payload,
          successmodal: true
        };
      case asyncActionName(ACTIVATE_ASSIGN_TERMINAL).failure:
        return {
          ...state,
          loading:false,
          error: true,
          successmodal: false
        };
    default:
      return state;
  }
};

export default AgentsReducer;
