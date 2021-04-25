import { createContext, useEffect, useReducer, useState } from 'react';
import { authReducer } from './authReducer';

import musicApi from '../api/musicApi';
import { types } from '../types/types';

const authInitialState = {
  token: null,
  user: null,
  logged: false,
};

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState);
  const [error, setError] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    checkToken();
  }, []);

  const checkToken = async () => {
    try {
      const token = JSON.parse(localStorage.getItem('token'));

      if (!token) return dispatch({ type: types.logout });

      const data = await musicApi('/renew');

      localStorage.setItem('token', JSON.stringify(data.token));

      dispatch({
        type: types.login,
        payload: {
          token: data.token,
          user: data.user,
        },
      });
    } catch (err) {
      return dispatch({ type: types.logout });
    }
  };

  const signIn = async ({ email, password }) => {
    try {
      const data = await musicApi('login', 'POST', { email, password });

      if (!data.ok) {
        dispatch({
          type: types.logout,
        });

        setError(true);
        setMessage(data.msg);
      } else {
        dispatch({
          type: types.login,
          payload: {
            token: data.token,
            user: data.user,
          },
        });

        localStorage.setItem('token', JSON.stringify(data.token));

        setError(false);
        setMessage('');
      }
    } catch (err) {
      return dispatch({
        type: types.logout,
      });
    }
  };

  const signUp = async ({
    id,
    name,
    email,
    password,
    direction,
    phone,
    city,
  }) => {
    try {
      const data = await musicApi('new', 'POST', {
        id,
        name,
        email,
        password,
        direction,
        phone,
        city,
      });

      if (!data.ok) {
        setError(true);
        setMessage(data.msg);
      } else {
        setError(false);
        setMessage('Usuario registrado!');
      }
    } catch (err) {
      dispatch({
        type: types.logout,
      });
    }
  };

  const logOut = () => {
    dispatch({
      type: types.logout,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        error,
        setError,
        message,
        setMessage,
        signIn,
        logOut,
        signUp,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
