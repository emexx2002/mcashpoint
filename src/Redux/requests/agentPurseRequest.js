import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { AGENT_PURSE,CENTRAL_PURSE } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import { history } from '../../utils/history'


export const FetchAgentPurse = () => dispatch => {
    dispatch(asyncActions(AGENT_PURSE).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(token)
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_AGENT_PURSE_URL}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            console.log(res)
            const response = res.data
            if (response.responseCode === '00') {
                dispatch(asyncActions(AGENT_PURSE).success(response.data?response.data.data:''));
            }
        })
        .catch(error => {
            console.log(error)
            dispatch(asyncActions(AGENT_PURSE).failure(true, error))
        });
};

export const FetchCentralPurse = () => dispatch => {
    dispatch(asyncActions(CENTRAL_PURSE).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(token)
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_CENTRAL_PURSE_URL}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            const response = res.data

            console.log(response)
            if (res.status == 200) {
                console.log(res.status)

                dispatch(asyncActions(CENTRAL_PURSE).success(response.data?response.data:''));
            }
        })
        .catch(error => {
            console.log(error)
            dispatch(asyncActions(CENTRAL_PURSE).failure(true, error))
        });
};