import axios from "axios";
import { asyncActions } from "../../utils/asyncUtil";
import { FETCH_AGENTS_MANAGER } from "../actions/actionTypes";
import { AgentConstant } from "../../constants/constants";
import { history } from '../../utils/history'


export const FetchAgentManager = () => dispatch => {
    dispatch(asyncActions(FETCH_AGENTS_MANAGER).loading(true));
    const token = JSON.parse(localStorage.getItem("data"))
    console.log(token)
    console.log(`bearer ${token.access_token}`, )
    axios
        .get(`${AgentConstant.FETCH_AGENT_MANAGER_URL}`, {
            headers: {
                'Authorization': `bearer ${token.access_token}`,
                'Content-Type': 'application/json'
            },
        })
        .then(res => {
            console.log(res.status == 200)
            if (res.status == 200) {
                dispatch(asyncActions(FETCH_AGENTS_MANAGER).success(res.data.data));
            }
        })
        .catch(error => {
            // console.log(error)
            dispatch(asyncActions(FETCH_AGENTS_MANAGER).failure(true, error))
        });
};

// export const CreateAgentManager = ({ name, email, password }) => dispatch => {
//     dispatch(asyncActions(REGISTER_USER).loading(true));
//     axios
//       .post(`${customerConstant.REGISTER_CUSTOMER_URL}`, {
//         name,
//         email,
//         password
//       })
//       .then(response => {
//         if (response.status === 200) {
//           dispatch(asyncActions(REGISTER_USER).success(response.data));
//           dispatch(asyncActions(REGISTER_USER).loading(false));
//         }
//         else if (response.status === 400) {
//           dispatch(asyncActions(REGISTER_USER).failure(true, response.data.error.message));
//           dispatch(asyncActions(REGISTER_USER).loading(false));
//         }
//       })
//       .catch(error => dispatch(asyncActions(REGISTER_USER).failure(true, error)));
//   };
  