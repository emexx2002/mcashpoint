import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { CHANGE_PASSWORD,FETCH_ROLE ,CREATE_ROLE_GROUP, FETCH_ROLE_GROUP} from "../actions/actionTypes";
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

  export const FetchRole = () => dispatch => {
    dispatch(asyncActions(FETCH_ROLE).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_ROLE_URL}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
          const response = res.data
          console.log(response)
console.log(response.responseCode)
          if (response.responseCode === '00') {
                dispatch(asyncActions(FETCH_ROLE).success(response.data));
            }
        })
        .catch(error => {
            dispatch(asyncActions(FETCH_ROLE).failure(true, error))
        });
};

export const FetchRoleGroup = () => dispatch => {
  dispatch(asyncActions(FETCH_ROLE_GROUP).loading(true));
  const token = JSON.parse(localStorage.getItem("data"))
  console.log(`bearer ${token.access_token}`, )
  axios
      .get(`${AgentConstant.FETCH_ROLE_GROUPS_URL}`, {
          headers: {
              'Authorization': `bearer ${token.access_token}`,
              'Content-Type': 'application/json'
          },
      })
      .then(res => {
        const response = res.data
        console.log(response)
console.log(response.responseCode)
        if (response.responseCode === '00') {
              dispatch(asyncActions(FETCH_ROLE_GROUP).success(response.data));
          }
      })
      .catch(error => {
          dispatch(asyncActions(FETCH_ROLE_GROUP).failure(true, error))
      });
};


export const CreateRoleGroup = (details) => dispatch => {
  console.log(details)
  let name = details.name
  let roleIds = details.roleIds
  dispatch(asyncActions(CREATE_ROLE_GROUP).loading(true));
  const token = JSON.parse(localStorage.getItem("data"));
  axios
    .post(`${AgentConstant.CREATE_ROLE_GROUP_URL}`, {
      name,
      roleIds,
    }, {
      headers: {
          'Authorization': `bearer ${token.access_token}`,
          'Content-Type': 'application/json'
      },
  })
    .then(res => {
      const response = res.data
      console.log(response)
      if (response.responseCode === "00") {
        dispatch(asyncActions(CREATE_ROLE_GROUP).success(response.data));
      }
      else if (response.responseCode === "XX") {
        dispatch(asyncActions(CREATE_ROLE_GROUP).failure(true, response.responseMessage));
      }
    })
    .catch(error => dispatch(asyncActions(CREATE_ROLE_GROUP).failure(true, error)));
};