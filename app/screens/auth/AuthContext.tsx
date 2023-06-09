import React, {useCallback, useContext, useState, useEffect, FC} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {useQueryClient} from 'react-query';

import {AUTH_TOKEN_KEY} from './auth.constants';

interface AuthContextValue {
  isAuthenticated: boolean;
  isAuthenticating: boolean;
  updateToken(x: string): Promise<void>;
  logout(x: string): Promise<void>;
}

const AuthContext = React.createContext<AuthContextValue | null>(null);

const updateToken = async (newToken: string) => {
  if (!newToken) {
    await AsyncStorage.removeItem(AUTH_TOKEN_KEY);
  } else {
    await AsyncStorage.setItem(AUTH_TOKEN_KEY, newToken);
  }
};

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider: FC = ({children}) => {
  const queryCache = useQueryClient();
  const [token, setToken] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const handleUpdateToken = useCallback(async newToken => {
    setToken(newToken);
    await updateToken(newToken);
  }, []);

  const handleLogout = useCallback(async () => {
    queryCache.cancelQueries();
    queryCache.clear();
    setToken(null);
    await updateToken(null);
  }, [queryCache]);

  useEffect(() => {
    (async () => {
      setIsAuthenticating(true);
      await AsyncStorage.getItem(AUTH_TOKEN_KEY).then(setToken);
      setIsAuthenticating(false);
    })();

    const interceptor = axios.interceptors.response.use(
      r => r,
      async error => {
        if (
          error?.response?.status === 401 &&
          error?.response?.data?.path !== '/api/authenticate'
        ) {
          setIsAuthenticating(true);
          await handleLogout();
          setIsAuthenticating(false);
        }
        return Promise.reject(error);
      },
    );

    return () => axios.interceptors.response.eject(interceptor);
  }, [queryCache, handleLogout]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!token,
        isAuthenticating,
        updateToken: handleUpdateToken,
        logout: handleLogout,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
