import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { FETCH_TRANSACTIONS } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import {history} from '../../utils/history'


export const FetchTransaction = () => dispatch => {
    dispatch(asyncActions(FETCH_TRANSACTIONS).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(token)
    console.log( `bearer ${token.access_token}`,)
    axios
      .get(`${AgentConstant.FETCH_TRANSACTIONS_URL}`, 
      {
        headers: {
            'Authorization': `bearer ${token.access_token}`,
            'Content-Type': 'application/json'
          },
      })
      .then(res => {
          console.log(res.status == 200)
        if (res.status == 200) {
          dispatch(asyncActions(FETCH_TRANSACTIONS).success(res.data.data));
        }
      })
      .catch(error => {
        // console.log(error)
        dispatch(asyncActions(FETCH_TRANSACTIONS).failure(true, error))});
  };