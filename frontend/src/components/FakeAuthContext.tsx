import { createContext, useContext, useEffect, useState } from "react";

type AuthContextType = {
  user: string | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  login: () => {},
  logout: () => {},
});

export const FakeAuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<string | null>(() => {
    return localStorage.getItem("fakeUser");
  });

  const login = (email: string) => {
    setUser(email);
    localStorage.setItem("fakeUser", email);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("fakeUser");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useFakeAuth = () => useContext(AuthContext);
