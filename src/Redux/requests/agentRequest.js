import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { LOGIN_USER } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import {history} from '../../utils/history'


export const loginUser = ({ username, password }) => dispatch => {
  console.log(username,password)
    dispatch(asyncActions(LOGIN_USER).loading(true));
    axios
      .post(`${AgentConstant.LOGIN_AGENT_URL}`, {
        username,
        password
      })
      .then(res => {
        const response = res.data
        if (response.responseCode === '00') {
          dispatch(asyncActions(LOGIN_USER).success(response.data));
          // history.push('/dashboard');
        }
      })
      .catch(error => {
        // console.log(error)
        dispatch(asyncActions(LOGIN_USER).failure(true, error))});
  };