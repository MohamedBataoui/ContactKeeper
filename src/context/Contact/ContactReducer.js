import { GET_ALL_CONTACTS } from "./../types";
const ContactReducer = (state, action) => {
  switch (action.type) {
    case GET_ALL_CONTACTS:
      return {
        ...state,
        allContact: action.payload,
      };

    default:
      return true;
  }
};

export default ContactReducer;
