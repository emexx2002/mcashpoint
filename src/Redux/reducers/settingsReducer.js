import { asyncActionName } from "../../utils/asyncUtil";
import { CHANGE_PASSWORD } from "../actions/actionTypes";
import { saveToken, removeToken } from '../../utils/localStorage';

const initialState = {
  passwordSuccess:false,
  loading:false,
  error:false
  // failure:'user cant be logged in'
};

const SettingsReducer = (state = initialState, action) => {
  console.log(action.payload)
  switch (action.type) {
    case asyncActionName(CHANGE_PASSWORD).loading:
      return { ...state, loading:true };
    case asyncActionName(CHANGE_PASSWORD).success:
      // window.location.replace('/')

      return {
        ...state,
        passwordSuccess: true,
        success: true,
        loading:false,
        error: false,
      };
    case asyncActionName(CHANGE_PASSWORD).failure:
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

export default SettingsReducer;
