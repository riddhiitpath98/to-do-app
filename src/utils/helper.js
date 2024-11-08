import { jwtDecode } from "jwt-decode";

export const isTokenActive = (token) => {
    if (!token) return false;
    const decoded = jwtDecode(token);
    return decoded?.exp > Date.now() / 1000;
  };
  
  export const decodeToken = (token) => {
    if (!token) return {};
    return jwtDecode(token);
  };
  
  export const getLocalStorage = (key) => {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  };
  
  export const setLocalStorage = (key, value) => {
    return localStorage.setItem(key, JSON.stringify(value));
  };

  export const isFunction = (fn) => typeof fn === "function";

  export const getTotalPages = (totalData, limit) => {
    if (limit <= 0) {
      return 1;
    }
  
    return Math.ceil(totalData / limit);
  };