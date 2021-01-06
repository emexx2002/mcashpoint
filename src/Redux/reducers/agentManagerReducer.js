import { asyncActionName } from "../../utils/asyncUtil";
import { FETCH_AGENTS_MANAGER , FETCH_STATE , FETCH_LGA, FETCH_BANK , CREATE_AGENTS_MANAGER} from "../actions/actionTypes";

const initialState = {
  agentmanager: [],
  agentStates: [],
  agentLga:[],
  agentBanks:[],
  agentCreation:false
};

const AgentManagerReducer = (state = initialState, action) => {
  console.log(action.type)
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
    case asyncActionName(FETCH_AGENTS_MANAGER).failure:
      return {
        ...state,
        error: true,
        success: false,
        loading:false,
        // failure
      };
    case asyncActionName(FETCH_STATE).loading:
      console.log('11')
    return { ...state, loading:true };
    case asyncActionName(FETCH_STATE).success:
        console.log('22')

      return {
        ...state,
        agentStates:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_STATE).failure:
      return {
        ...state,
        error: true,
        success: false,
        loading:false,
        // failure
      };
      case asyncActionName(FETCH_LGA).loading:
        console.log('11')
      return { ...state, loading:true };
      case asyncActionName(FETCH_LGA).success:
          console.log('22')
  
        return {
          ...state,
          agentLga:action.payload,
          success: true,
          loading:false,
          error: false,
        };
      case asyncActionName(FETCH_LGA).failure:
        return {
          ...state,
          error: true,
          success: false,
          loading:false,
          // failure
        };
    case asyncActionName(FETCH_BANK).loading:
    return { ...state, loading:true };
    case asyncActionName(FETCH_BANK).success:

      return {
        ...state,
        agentBanks:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(FETCH_BANK).failure:
      return {
        ...state,
        error: true,
        success: false,
        loading:false,
        // failure
      };
    case asyncActionName(CREATE_AGENTS_MANAGER).loading:
    return { ...state, loading:true };
    case asyncActionName(CREATE_AGENTS_MANAGER).success:

      return {
        ...state,
        agentCreation:action.payload,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(CREATE_AGENTS_MANAGER).failure:
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
