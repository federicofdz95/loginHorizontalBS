import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // State to hold the authentication token
  const [token, setToken_] = useState(localStorage.getItem("token"));

  // Function to set the authentication token
  const setToken = (newToken) => {
    setToken_(newToken);
  };

  useEffect(() => {

    
    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      localStorage.setItem('token',token);
    } else {
      delete axios.defaults.headers.common["Authorization"];
      localStorage.removeItem('token')
    }
    
    /*
    const fetchUser = async () => {
      try {
        const response = await axios.post(process.env.REACT_APP_USUARIOS, { withCredentials: true });
        setUser(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  */
  }, [token]);

  /*
  const login = async (username, password) => {
    try {
      const response = await axios.post('/api/login', { username, password });
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = async () => {
    try {
      await axios.post('/api/logout', {}, { withCredentials: true });
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };
  */

  // Memoized value of the authentication context
  
  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );
  
  /*
  const contextValue = {
    user,
    login,
    logout,
  };
  */

  // Provide the authentication context to the children components
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;