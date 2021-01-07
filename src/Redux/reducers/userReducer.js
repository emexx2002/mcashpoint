import { asyncActionName } from "../../utils/asyncUtil";
import { LOGIN_USER } from "../actions/actionTypes";
import { saveToken, removeToken } from '../../utils/localStorage';

const initialState = {
  user: {},
  isAuthenticated: null,
  loading:false,
  error:false
  // failure:'user cant be logged in'
};

const UsersReducer = (state = initialState, action) => {
  console.log(action.payload?.error?.response?.data?.responseMessage)
  switch (action.type) {
    case asyncActionName(LOGIN_USER).loading:
      return { ...state, loading:true };
    case asyncActionName(LOGIN_USER).success:
      saveToken( JSON.stringify(action.payload));
      window.location.replace('/dashboard')

      // localStorage.token = JSON.stringify(action.payload)
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(LOGIN_USER).failure:
      return {
        ...state,
        // error: action.payload?.error?.response?.data?.responseMessage,
        error: true,
        success: false,
        loading:false,
        // failure
      };
    default:
      return state;
  }
};

export default UsersReducer;
