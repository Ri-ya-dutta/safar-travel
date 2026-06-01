import { createContext, useContext, useState } from "react";
import { adminLogin as loginAPI } from "../services/api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("adminToken") || null);

  const login = async (email, password) => {
    const data = await loginAPI({ email, password });
    if (data.token) {
      setToken(data.token);
      localStorage.setItem("adminToken", data.token);
      return true;
    }
    return false;
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem("adminToken");
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);