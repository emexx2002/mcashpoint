import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { FETCH_AGENTS, ACTIVATION_CODE, FETCH_BANK_TERMINAL ,ACTIVATE_ASSIGN_TERMINAL,UNACTIVATE_ASSIGN_TERMINAL,CREATE_AGENTS} from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import { history } from '../../utils/history'


export const FetchAgent = (
  page,
  length,
) => dispatch => {
    dispatch(asyncActions(FETCH_AGENTS).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_AGENT_URL}start=${page}&length=${length}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            console.log(res.status == 200)
            if (res.status == 200) {
                dispatch(asyncActions(FETCH_AGENTS).success(res.data));
            }
        })
        .catch(error => {
            dispatch(asyncActions(FETCH_AGENTS).failure(true, error))
        });
};

export const ActivatateCode = (agentid) => dispatch => {
  console.log(agentid)
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
            const response = res.data
            if (response.responseCode === '00') {
               dispatch(asyncActions(ACTIVATION_CODE).success(res.data.activationCode));


            }
        })
        .catch(error => {
          console.dir(error)
            dispatch(asyncActions(ACTIVATION_CODE).failure(true, error))
        });
};

export const FetchBankTerminal = (agentid) => dispatch => {
    console.log(agentid)
    dispatch(asyncActions(FETCH_BANK_TERMINAL).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    axios
       .get(`${AgentConstant.FETCH_BANK_TERMINAAL_URL}=${agentid}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
      .then(res => {
        const response = res.data
        console.log(response)
        if (response.responseCode === "00") {
          dispatch(asyncActions(FETCH_BANK_TERMINAL).success(response.data));
        }
        else if (response.status === 400) {
          dispatch(asyncActions(FETCH_BANK_TERMINAL).failure(true, response.data.error.message));
        }
      })
      .catch(error => dispatch(asyncActions(FETCH_BANK_TERMINAL).failure(true, error)));
  };

  export const AssignTerminal = (agentid,bankId) => dispatch => {
    console.log(agentid)
    dispatch(asyncActions(ACTIVATE_ASSIGN_TERMINAL).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    axios
       .get(`${AgentConstant.ACTIVATE_ASSIGN_TERMINAL_URL}=${agentid}&bankCode=${bankId}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
      .then(res => {
        const response = res.data
        console.log(response)
        if (response.responseCode === "00") {
          dispatch(asyncActions(ACTIVATE_ASSIGN_TERMINAL).success(response.responseCode));
        }
        else if (response.status === 400) {
          dispatch(asyncActions(ACTIVATE_ASSIGN_TERMINAL).failure(true, response.data.error.message));
        }
      })
      .catch(error => dispatch(asyncActions(ACTIVATE_ASSIGN_TERMINAL).failure(true, error)));
  };

  export const UnAssignTerminal = (agentid) => dispatch => {
    console.log(agentid)
    dispatch(asyncActions(UNACTIVATE_ASSIGN_TERMINAL).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    axios
       .get(`${AgentConstant.UNACTIVATE_ASSIGN_TERMINAL_URL}=${agentid}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
      .then(res => {
        const response = res.data
        console.log(response)
        if (response.responseCode === "00") {
          dispatch(asyncActions(UNACTIVATE_ASSIGN_TERMINAL).success(response.responseCode));
        }
        else if (response.status === 400) {
          dispatch(asyncActions(UNACTIVATE_ASSIGN_TERMINAL).failure(true, response.data.error.message));
        }
      })
      .catch(error => dispatch(asyncActions(UNACTIVATE_ASSIGN_TERMINAL).failure(true, error)));
  };

  export const CreateAgent = ({
    accountNumber,
    accountName,
    accountBvn,
    businessName,
    businessPhone,
    businessAddress,
    gender,
    firstname,
    middlename,
    lastname,
    email,
    username,
    stateId,
    lgaId,
    bankId
}) => dispatch => {
    dispatch(asyncActions(CREATE_AGENTS).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    axios
      .post(`${AgentConstant.CREATE_AGENT_URL}`, {
    accountNumber,
    accountName,
    accountBvn,
    businessName,
    businessPhone,
    businessAddress,
    gender,
    firstname,
    middlename,
    lastname,
    email,
    username,
    stateId,
    lgaId,
    bankId
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
          dispatch(asyncActions(CREATE_AGENTS).success(response.data));
        }
        else if (response.responseCode === "XX") {
          dispatch(asyncActions(CREATE_AGENTS).failure(true, response.responseMessage));
        }
      })
      .catch(error => dispatch(asyncActions(CREATE_AGENTS).failure(true, error)));
  };