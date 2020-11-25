import {
  REGISERT_USER,
  REGISTER_ERROR,
  LOGIN_USER,
  LOGIN_FAIL,
  GET_USER
} from './../types';
const authReducer = (state, action) => {
  switch (action.type) {
    case REGISERT_USER:
    case LOGIN_USER:
      localStorage.setItem('token', action.payload);
      return {
        ...state,
        token: action.payload,
        isAuthenticated: true,
        loading:   false,
        error: null,
      };
    case REGISTER_ERROR:
    case LOGIN_FAIL:
      return {
        ...state,
        token: null,
        error: action.payload,
        isAuthenticated:null,
        loading:   true,
      };


    case GET_USER:
      return {
        ...state, 
        user:action.payload.user,
        isAuthenticated: true,
        error:null,
        loading: false,
      }
    default:
      return true;
  }
};

export default authReducer;
