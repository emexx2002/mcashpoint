import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { AGENT_PURSE } from "../actions/actionTypes";
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