import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import {
  AGENT_PURSE,
  CENTRAL_PURSE,
  CREDIT_DEBIT_PURSE,
} from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import { history } from "../../utils/history";

export const FetchAgentPurse = (page, length) => (dispatch) => {
  dispatch(asyncActions(AGENT_PURSE).loading(true));
  const token = JSON.parse(localStorage.getItem("data"));
  console.log(token);
  console.log(`bearer ${token.access_token}`);
  axios
    .get(
      `${AgentConstant.FETCH_AGENT_PURSE_URL}start=${page}&length=${length}`,
      {
        headers: {
          Authorization: `bearer ${token.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      const response = res.data;
      if (response.responseCode === "00") {
        dispatch(
          asyncActions(AGENT_PURSE).success(response.data ? response.data : [])
        );
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(asyncActions(AGENT_PURSE).failure(true, error));
    });
};

export const FetchCentralPurse = (page, length) => (dispatch) => {
  dispatch(asyncActions(CENTRAL_PURSE).loading(true));
  const token = JSON.parse(localStorage.getItem("data"));
  console.log(token);
  console.log(`bearer ${token.access_token}`);
  axios
    .get(
      `${AgentConstant.FETCH_CENTRAL_PURSE_URL}start=${page}&length=${length}`,
      {
        headers: {
          Authorization: `bearer ${token.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      const response = res.data;

      console.log(response);
      if (res.status == 200) {
        console.log(response.data);

        dispatch(
          asyncActions(CENTRAL_PURSE).success(response.data ? response : "")
        );
      }
    })
    .catch((error) => {
      console.log(error);
      dispatch(asyncActions(CENTRAL_PURSE).failure(true, error));
    });
};

export const CreditDebitPurse = (
  { amount, action, reason, transactionId },
  agentId
) => (dispatch) => {
  console.log(agentId, amount, action, reason, transactionId);
  dispatch(asyncActions(CREDIT_DEBIT_PURSE).loading(true));
  const token = JSON.parse(localStorage.getItem("data"));
  axios
    .post(
      `${AgentConstant.CREDIT_DEBIT_PURSE_URL}`,
      {
        agentId,
        amount,
        action,
        reason,
        transactionId,
      },
      {
        headers: {
          Authorization: `bearer ${token.access_token}`,
          "Content-Type": "application/json",
        },
      }
    )
    .then((res) => {
      const response = res.data;
      console.log(response);
      if (response.responseCode === "00") {
        dispatch(asyncActions(CREDIT_DEBIT_PURSE).success(response.data));
      } else if (response.responseCode === "XX") {
        dispatch(
          asyncActions(CREDIT_DEBIT_PURSE).failure(
            true,
            response.responseMessage
          )
        );
      }
    })
    .catch((error) =>
      dispatch(asyncActions(CREDIT_DEBIT_PURSE).failure(true, error))
    );
};
