import { useContext } from "react";
import AuthContext from "../context/AppContext";
import { loginUser, logoutUser } from "../services/api/data";

export const useAuth = () => {
  const { user, login, logout } = useContext(AuthContext);

  const handleLogin = async (credentials) => {
    const userData = await loginUser(credentials);
    login(userData);
    return userData;
  };

  const handleLogout = async () => {
    await logoutUser();
    logout();
  };

  return {
    user,
    login: handleLogin,
    logout: handleLogout,
    isAuthenticated: !!user,
  };
};
