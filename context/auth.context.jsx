import React, { useState, useEffect, createContext } from 'react';
import authService from '../services/auth.service';

const AuthContext = createContext();

const AuthProviderWrapper = (props) => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  const storeToken = (token) => {
    localStorage.setItem("authToken", token);
  }

  const authenticateUser = () => {
    const storedToken = localStorage.getItem("authToken");

    if (storedToken) {

      authService.verify()
        .then((response) => {
          const user = response.data;

          setIsSignedIn(true);
          setIsLoading(false);
          setUser(user);
        })
        .catch((error) => {
          setIsSignedIn(false);
          setIsLoading(false);
          setUser(null);
        });

    } else {
      setIsSignedIn(false);
      setIsLoading(false);
      setUser(null);
    }
  }

  const removeToken = () => {
    localStorage.removeItem("authToken");
  }

  const logOutUser = () => {
    removeToken();
    authenticateUser();
  }

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <AuthContext.Provider value={{ isSignedIn, isLoading, user, storeToken, authenticateUser, logOutUser }} >
      {props.children}
    </AuthContext.Provider>
  )
}

export { AuthProviderWrapper, AuthContext };