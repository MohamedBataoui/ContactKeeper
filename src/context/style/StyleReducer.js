import { TOGGLE_THEME } from "./../types";
const StyleReducer = (state, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        isLight: action.isLight,
      };

    default:
      return true;
  }
};

export default StyleReducer;
