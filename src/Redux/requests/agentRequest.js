import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { FETCH_AGENTS, ACTIVATION_CODE } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import { history } from '../../utils/history'


export const FetchAgent = () => dispatch => {
    dispatch(asyncActions(FETCH_AGENTS).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_AGENT_URL}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            console.log(res.status == 200)
            if (res.status == 200) {
                dispatch(asyncActions(FETCH_AGENTS).success(res.data.data));
            }
        })
        .catch(error => {
            dispatch(asyncActions(FETCH_AGENTS).failure(true, error))
        });
};

export const ActivatateCode = (agentid) => dispatch => {
    dispatch(asyncActions(ACTIVATION_CODE).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(token)
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.ACTIVATION_CODE_URL}=${agentid}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            console.log(res)
            const response = res.data
            if (response.responseCode === '00') {
               dispatch(asyncActions(ACTIVATION_CODE).success(res.data.activationCode));


            }
        })
        .catch(error => {
            dispatch(asyncActions(ACTIVATION_CODE).failure(true, error))
        });
};