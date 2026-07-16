import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import type { User } from "../types/User";

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


const mockUser: User = {
  id: 1,
  name: "Aarne Andersson",
  email: "aarne@flowforge.dev",
  role: "developer",
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("flowforge-user");

    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = (email: string, password: string) => {
    if (
      email === "aarne@flowforge.dev" &&
      password === "flow123"
    ) {
      setUser(mockUser);

      localStorage.setItem(
        "flowforge-user",
        JSON.stringify(mockUser),
      );

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("flowforge-user");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used inside AuthProvider",
    );
  }

  return context;
}