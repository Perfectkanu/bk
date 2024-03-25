import { createContext, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const loginAction = () => {
    // Perform login logic here
    setIsAuthenticated(true);
  };

  const logoutAction = () => {
    // Perform logout logic here
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAction, logoutAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };