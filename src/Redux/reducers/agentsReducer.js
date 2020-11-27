import { asyncActionName } from "../../utils/asyncUtil";
import { LOGIN_USER } from "../actions/actionTypes";
import { saveToken, removeToken } from '../../utils/localStorage';

const initialState = {
  user: {},
  isAuthenticated: null
};

const AgentReducer = (state = initialState, action) => {
  switch (action.type) {
    case asyncActionName(LOGIN_USER).loading:
      return { ...state, loading: action.payload };
    case asyncActionName(LOGIN_USER).success:
      console.log(action.payload)
      saveToken( JSON.stringify(action.payload));
      // localStorage.token = JSON.stringify(action.payload)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        success: true
      };
    case asyncActionName(LOGIN_USER).failure:
      return {
        ...state,
        error: action.payload.status,
        success: false
      };
    default:
      return state;
  }
};

export default AgentReducer;
