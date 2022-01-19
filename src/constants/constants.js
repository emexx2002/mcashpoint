const BASE_URL = "https://api.mcashpoint.com";
// const BASE_URL = "https://cors-anywhere.herokuapp.com/http://104.236.238.94:9006"
export const AgentConstant = {
  LOGIN_AGENT_URL: `${BASE_URL}/api/v1/login`,
  FETCH_TRANSACTIONS_URL: `${BASE_URL}/api/v1/transaction?`,
  FETCH_AGENT_URL: `${BASE_URL}/api/v1/agent?`,
  FETCH_AGENT_MANAGER_URL: `${BASE_URL}/api/v1/agent/manager?`,
  DASHBOARD_BREAKDOWN_URL: `${BASE_URL}/api/v1/dashboard/daily/breakdown`,
  DASHBOARD_TRANSACTION_DETAILS_URL: `${BASE_URL}/api/v1/dashboard`,
  FETCH_AUDIT_URL: `${BASE_URL}/api/v1/audit?`,
  FETCH_AGENT_PURSE_URL: `${BASE_URL}/api/v1/purse/agent?`,
  FETCH_CENTRAL_PURSE_URL: `${BASE_URL}/api/v1/purse/central?`, 
  ACTIVATION_CODE_URL: `${BASE_URL}/api/v1/terminal/activation/generate?agentId`,
  CHANGE_PASSWORD_URL: `${BASE_URL}/api/v1/user/password`,
  FETCH_STATE_URL: `${BASE_URL}/api/v1/state`,
  FETCH_LGA_URL: `${BASE_URL}/api/v1/lga?stateCode`,
  FETCH_BANK_URL: `${BASE_URL}/api/v1/bank`,
  CREATE_AGENT_MANAGER_URL: `${BASE_URL}/api/v1/agent/manager`,
  FETCH_BANK_TERMINAAL_URL: `${BASE_URL}/api/v1/terminal/banks?agentId`,
  ACTIVATE_ASSIGN_TERMINAL_URL: `${BASE_URL}/api/v1/terminal/assign?agentId`,
  UNACTIVATE_ASSIGN_TERMINAL_URL: `${BASE_URL}/api/v1/terminal/unassign?agentId`,
  CREATE_AGENT_URL: `${BASE_URL}/api/v1/agent`,
  AGENT_MANAGER_SETTLEMENT_URL: `${BASE_URL}/api/v1/agent/manager/settlement?`,
  CREDIT_DEBIT_PURSE_URL: `${BASE_URL}/api/v1/purse/creditordebit`,
  FETCH_ROLE_URL: `${BASE_URL}/api/v1/rolegroup/roles`,
  FETCH_ROLE_GROUPS_URL: `${BASE_URL}/api/v1/rolegroup/`,
  CREATE_ROLE_GROUP_URL: `${BASE_URL}/api/v1/rolegroup`,
  API_VERSION_URL: `${BASE_URL}/api/v1/app/version`,
  API_VERSION_URL: `${BASE_URL}/api/v1/app/version`,
  FETCH_TRANSACTIONS_TYPES_URL: `${BASE_URL}/api/v1/transaction/types`,
  FETCH_TRANSACTIONS_STATUS_URL: `${BASE_URL}/api/v1/transaction/status`,
  ADMIN_USERS_URL:`${BASE_URL}/api/v1/admin?`,
  PURSE_BALANCE_SUMMARY_URL:`${BASE_URL}/api/v1/purse/balance/general`,
  ACTIVATE_DEACTIVATE_USER_URL:`${BASE_URL}/api/v1/user/activate-deactivate`,
  RESET_AGENT_PASSWORD_URL:`${BASE_URL}/api/v1/user/password/reset?userId`,
  MAXIMUM_RANGE_URL:`${BASE_URL}/api/v1/convenience/maximum/range?`,
  CONVIENIENCE_FEE_URL:`${BASE_URL}/api/v1/convenience`
  
};
