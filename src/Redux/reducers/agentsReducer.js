  
import { LOGIN } from '../actions/actionTypes';
  
  const initialState = {
    isLoggedIn: false,
    currentUser: {},

  };
  
  export default (state = initialState, action = {}) => {
    switch (action.type) {
      case LOGIN:
        return {
          ...state,
          isLoggedIn: true,
          currentUser: action.payload.currentUser
        };
      default:
        return state;
    }
  };