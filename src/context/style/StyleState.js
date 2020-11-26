import React, { useReducer } from "react";
import axios from "axios";

import StyleReducer from "./StyleReducer";
import StyleContext from "./StyleContext";

// types
import { TOGGLE_THEME } from "./../types";

const StyleState = ({ children }) => {
  // creation state
  const initialState = {
    isLight: true,
    light: {
      name: "Dark",
      btnBg: "dark",
      backgroundColor: "#f1f2f6",
      color: "#182C61",
    },
    dark: {
      name: "Light",
      btnBg: "light",
      backgroundColor: "#182C61",
      color: "#f1f2f6",
    },
  };

  // creation reducer
  const [state, dispatch] = useReducer(StyleReducer, initialState);
  const toggle = () => {
    dispatch({
      isLight: !state.isLight,
      type: TOGGLE_THEME,
    });
  };
  return (
    <StyleContext.Provider
      value={{
        isLight: state.isLight,
        light: state.light,
        dark: state.dark,
        toggle,
      }}
    >
      {children}
    </StyleContext.Provider>
  );
};

export default StyleState;
