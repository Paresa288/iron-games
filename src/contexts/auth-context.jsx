import { createContext, useContext, useEffect, useState } from "react";
import * as AuthApi from "../services/auth-api"
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    AuthApi.profile()
      .then(setUser)
  }, []);

  const login = (user) => {
    setUser(user)
  }

  const reloadUser = () => {
     AuthApi.profile()
      .then(setUser)
  }

  const logout = () => {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, login, logout, reloadUser }} >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}