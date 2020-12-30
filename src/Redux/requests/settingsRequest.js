import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { CHANGE_PASSWORD } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import {history} from '../../utils/history'


export const ChangePassword = ({ userName, oldPassword,newPassword }) => dispatch => {
    const username = userName
    console.log(username, oldPassword,newPassword)
    dispatch(asyncActions(CHANGE_PASSWORD).loading(true));
    axios
      .patch(`${AgentConstant.CHANGE_PASSWORD_URL}`, {
        username,
        oldPassword,
        newPassword
      })
      .then(res => {
        const response = res.data
        if (response.responseCode === '00') {
          dispatch(asyncActions(CHANGE_PASSWORD).success(response.data));
        }
      })
      .catch(error => {
        dispatch(asyncActions(CHANGE_PASSWORD).failure(true, error))});
  };