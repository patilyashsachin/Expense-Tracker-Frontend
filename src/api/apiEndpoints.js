// Define your base URL here
const BASE_URL = "http://localhost:5000/api/v1";
const API = process.env.REACT_APP_API_URL;

// Auth endpoints
export const AUTH_API = {
  LOGIN: `${API}/api/v1/auth/login`,
  SIGNUP: `${API}/api/v1/auth/signup`,
  PROFILE: `${API}/api/profile`,
};

// Income endpoints
export const INCOME_API = {
    ADD: `${BASE_URL}/add-income`,
    GET: `${BASE_URL}/get-incomes`,
    DELETE: (id) => `${BASE_URL}/delete-income/${id}`, // Use function for dynamic segments
};

// Expense endpoints
export const EXPENSE_API = {
    ADD: `${BASE_URL}/add-expense`,
    GET: `${BASE_URL}/get-expenses`,
    DELETE: (id) => `${BASE_URL}/delete-expense/${id}`, // Use function for dynamic segments
};

