import React, { useReducer } from "react";
import axios from "axios";

import authReducer from "./AuthReducer";
import AuthContext from "./AuthContext";

// types
import {
  REGISERT_USER,
  REGISTER_ERROR,
  LOGIN_USER,
  LOGIN_FAIL,
  GET_USER,
} from "./../types";

const AuthState = ({ children }) => {
  // creation state
  const initialState = {
    user: null,
    isAuthenticated: null,
    loading: true,
    error: null,
    token: localStorage.getItem("token"),
  };

  // creation reducer
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Get authenticated User
  const loadUser = async () => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/api/auth", config);
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response,
      });
    }
  };

  // login
  //  formData ={ email :"ayoub@gmail.com", password:"12345"}
  const login = async (formData) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const response = await axios.post(`/api/auth`, formData, config);

      dispatch({
        type: LOGIN_USER,
        payload: response.data.token,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_FAIL,
        payload: error.response.data.msg,
      });
    }
  };

  // register user into database
  const register = async (data) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(`/api/users`, data, config);
      dispatch({
        type: REGISERT_USER,
        payload: res.data.token,
      });
    } catch (error) {
      dispatch({
        type: REGISTER_ERROR,
        payload: error.response.data,
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        loading: state.loading,
        error: state.error,
        token: state.token,
        register,
        login,
        loadUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthState;
