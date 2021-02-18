import { asyncActionName } from "../../utils/asyncUtil";
import { LOGIN_USER,LOGOUT_USER } from "../actions/actionTypes";
import { saveToken, removeToken } from '../../utils/localStorage';

const initialState = {
  user: null,
  isAuthenticated: null,
  loading:false,
  error:null,
  success:false,
  role:null
  // failure:'user cant be logged in'
};

const UsersReducer = (state = initialState, action) => {
  console.log(action.payload?.error?.response?.data?.responseMessage)
  switch (action.type) {
    case asyncActionName(LOGIN_USER).loading:
      return { ...state, loading:true };
    case asyncActionName(LOGIN_USER).success:
      saveToken( JSON.stringify(action.payload));
      console.log(action.payload.user.roleGroup.name)
      // window.location.replace('/dashboard')

      // localStorage.token = JSON.stringify(action.payload)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        success: true,
        loading:false,
        role:action.payload.user.roleGroup.name,
        error: null,
      };
    case asyncActionName(LOGIN_USER).failure:
      return {
        ...state,
        // error: action.payload?.error?.response?.data?.responseMessage,
        error: action.payload,
        success: false,
        loading:false,
        role:null
        // failure
      };
      case asyncActionName(LOGOUT_USER).success:
        removeToken()
        return { 
        ...state, 
        user: null,
        isAuthenticated: null,
        loading:false,
        error:null,
        success:false
      };
    
    default:
      return state;
  }
};

export default UsersReducer;
