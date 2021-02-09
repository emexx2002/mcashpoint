import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_AGENTS, ACTIVATION_CODE,FETCH_BANK_TERMINAL,ACTIVATE_ASSIGN_TERMINAL,UNACTIVATE_ASSIGN_TERMINAL,CREATE_AGENTS } from "../actions/actionTypes";

const initialState = {
  agents: [],
  activationCode:null,
  bankTerminal:[],
  createAgent:null,
  success:false,
  assignSuccess:false,
  unassignSuccess:false,
  successActivation:false,
  createAgentsuccess:false,
  agentTotal:0,
  assignTerminal:null
};

const AgentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(FETCH_AGENTS).loading:
        console.log('1')
      return { ...state, loading:true };
    case asyncActionName(FETCH_AGENTS).success:

      return {
        ...state,
        agents:action.payload.data,
        agentTotal:action.payload.recordsFiltered,
        success: true,
        loading:false,
        error: false,
        assignTerminal: null,
        assignSuccess:false
      };
    case asyncActionName(FETCH_AGENTS).failure:
      return {
        ...state,
        error: true,
        agentTotal:'',
        success: false,
        loading:false,
        assignTerminal: null,
        assignSuccess:false
        // failure
      };
      case asyncActionName(ACTIVATION_CODE).loading:
        return { ...state, loading: true };
      case asyncActionName(ACTIVATION_CODE).success:
        return {
          ...state,
          loading:false,
          activationCode: action.payload,
          successActivation: true
        };
      case asyncActionName(ACTIVATION_CODE).failure:
        return {
          ...state,
          loading:false,
          error: true,
          successActivation: false
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
          // loading:false,
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
          assignSuccess: true
        };
      case asyncActionName(ACTIVATE_ASSIGN_TERMINAL).failure:
        return {
          ...state,
          loading:false,
          error: true,
          assignSuccess: false
        };
        case asyncActionName(UNACTIVATE_ASSIGN_TERMINAL).loading:
          return { ...state, loading: true };
        case asyncActionName(UNACTIVATE_ASSIGN_TERMINAL).success:
          return {
            ...state,
            loading:false,
            unassignTerminal: action.payload,
            unassignSuccess: true
          };
        case asyncActionName(UNACTIVATE_ASSIGN_TERMINAL).failure:
          return {
            ...state,
            loading:false,
            error: true,
            unassignSuccess: false
          };
          case asyncActionName(CREATE_AGENTS).loading:
            return { ...state, loading: true };
          case asyncActionName(CREATE_AGENTS).success:
            return {
              ...state,
              loading:false,
              createAgent: action.payload,
              createAgentsuccess: true
            };
          case asyncActionName(CREATE_AGENTS).failure:
            return {
              ...state,
              loading:false,
              errorMessage:action.payload,
              error: true,
              createAgentsuccess:false
            };
    default:
      return state;
  }
};

export default AgentsReducer;
