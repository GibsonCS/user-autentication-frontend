import { createContext, useState, useContext } from "react";
import { AuthContextType } from "../interfaces/AuthContextType";
import { AuthProviderProps } from "../interfaces/AuthProviderProps";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState("");

  const login = (username: string) => {
    setUser(username);
  };

  return <AuthContext.Provider value={{ user, login }}>{children}</AuthContext.Provider>;
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("Nenhum contexto");
  }
  return context;
};
