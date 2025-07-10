import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(self.localStorage.getItem("currentUser") ? JSON.parse(self.localStorage.getItem("currentUser")) : undefined );
  const navigate = useNavigate();

  const login = (user) => {
    self.localStorage.setItem("currentUser", JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    self.localStorage.removeItem("currentUser");
    setUser(undefined);
    navigate("/")
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }} >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}