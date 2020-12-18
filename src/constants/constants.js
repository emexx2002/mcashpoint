const BASE_URL = "https://cors-anywhere.herokuapp.com/https://mcashpoint.paypad.com.ng";

export const AgentConstant = {
    LOGIN_AGENT_URL: `${BASE_URL}/api/v1/login`,
    FETCH_TRANSACTIONS_URL: `${BASE_URL}/api/v1/transaction?start=0&length=10`,
    FETCH_AGENT_URL: `${BASE_URL}/api/v1/agent?start=0&length=10`,
    FETCH_AGENT_MANAGER_URL:`${BASE_URL}/api/v1/agent/manager`,
};