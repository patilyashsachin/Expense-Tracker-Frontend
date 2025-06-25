// Dynamically switch between local and deployed backend
const API = process.env.REACT_APP_API_URL;

// Auth endpoints
export const AUTH_API = {
  LOGIN: `${API}/api/v1/auth/login`,
  SIGNUP: `${API}/api/v1/auth/signup`,
  PROFILE: `${API}/api/profile`,
};

// Income endpoints
export const INCOME_API = {
  ADD: `${API}/api/v1/add-income`,
  GET: `${API}/api/v1/get-incomes`,
  DELETE: (id) => `${API}/api/v1/delete-income/${id}`,
};

// Expense endpoints
export const EXPENSE_API = {
  ADD: `${API}/api/v1/add-expense`,
  GET: `${API}/api/v1/get-expenses`,
  DELETE: (id) => `${API}/api/v1/delete-expense/${id}`,
};
