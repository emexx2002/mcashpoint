const BASE_URL = "https://mcashpoint.paypad.com.ng";
// const BASE_URL = "https://cors-anywhere.herokuapp.com/https://mcashpoint.paypad.com.ng";

export const AgentConstant = {
    LOGIN_AGENT_URL: `${BASE_URL}/api/v1/login`,
    FETCH_TRANSACTIONS_URL: `${BASE_URL}/api/v1/transaction?`,
    FETCH_AGENT_URL: `${BASE_URL}/api/v1/agent?`,
    FETCH_AGENT_MANAGER_URL:`${BASE_URL}/api/v1/agent/manager?`,
    DASHBOARD_BREAKDOWN_URL:`${BASE_URL}/api/v1/dashboard/daily/breakdown`,
    DASHBOARD_TRANSACTION_DETAILS_URL:`${BASE_URL}/api/v1/dashboard`,
    FETCH_AUDIT_URL:`${BASE_URL}/api/v1/audit?`,
    FETCH_AGENT_PURSE_URL:`${BASE_URL}/api/v1/purse/agent?`,
    FETCH_CENTRAL_PURSE_URL:`${BASE_URL}/api/v1/purse/central?`,
    ACTIVATION_CODE_URL:`${BASE_URL}/api/v1/terminal/activation/generate?agentId`,
    CHANGE_PASSWORD_URL:`${BASE_URL}/api/v1/password`,
    FETCH_STATE_URL:`${BASE_URL}/api/v1/state`,
    FETCH_LGA_URL:`${BASE_URL}/api/v1/lga?stateCode`,
    FETCH_BANK_URL:`${BASE_URL}/api/v1/bank`,
    CREATE_AGENT_MANAGER_URL: `${BASE_URL}/api/v1/agent/manager`,
    FETCH_BANK_TERMINAAL_URL: `${BASE_URL}/api/v1/terminal/banks?agentId`,
    ACTIVATE_ASSIGN_TERMINAL_URL:`${BASE_URL}/api/v1/terminal/assign?agentId`,
    UNACTIVATE_ASSIGN_TERMINAL_URL:`${BASE_URL}/api/v1/terminal/unassign?agentId`,
    CREATE_AGENT_URL: `${BASE_URL}/api/v1/agent`,
    AGENT_MANAGER_SETTLEMENT_URL:`${BASE_URL}/api/v1/agent/manager/settlement?`,
    CREDIT_DEBIT_PURSE_URL:`${BASE_URL}/api/v1/purse/creditordebit`,
    FETCH_ROLE_GROUP_URL:`${BASE_URL}/api/v1/rolegroup/roles`,
    CREATE_ROLE_GROUP_URL:`${BASE_URL}/api/v1/rolegroup`,
};