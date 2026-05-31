import { createContext, useState, ReactNode } from 'react';

interface UserContextType {
  token: boolean;
  logout: () => void;
  login: () => void; // also good to have a simple login method to reset/simulate login
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<boolean>(true);

  const logout = () => {
    setToken(false);
  };

  const login = () => {
    setToken(true);
  };

  return (
    <UserContext.Provider value={{ token, logout, login }}>
      {children}
    </UserContext.Provider>
  );
};
