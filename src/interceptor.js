import axios from 'axios';
import { logoutUser } from './Redux/requests/userRequest';

export default {
  setupInterceptors: (store, history) => {
// console.log()
      axios.interceptors.response.use(response => {
          if(response.data.responseCode==="02"){
            store.dispatch(logoutUser())
            // window.localStorage.removeItem('data');         
         }
        return response;
      }, error => {
      return Promise.reject(error);
    });
  },
};