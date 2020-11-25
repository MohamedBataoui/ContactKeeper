import React, { useReducer } from "react";
import axios from "axios";

import ContactReducer from "./ContactReducer";
import ContactContext from "./ContactContext";

// types
import { GET_ALL_CONTACTS } from "./../types";

const ContactState = ({ children }) => {
  // creation state
  const initialState = {
    allContact: [],
  };

  // creation reducer
  const [state, dispatch] = useReducer(ContactReducer, initialState);

  // Get authenticated User
  const loadContacts = async () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };
    const res = await axios.get("/api/contacts", config);
    console.log(res);
    dispatch({
      type: GET_ALL_CONTACTS,
      payload: res.data,
    });
  };

  const createContact = async (contact) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": localStorage.getItem("token"),
      },
    };

    const response = await axios.post(`/api/contacts`, contact, config);

    console.log(response);
  };

  // login
  //  formData ={ email :"ayoub@gmail.com", password:"12345"}

  return (
    <ContactContext.Provider
      value={{
        allContact: state.allContact,
        loadContacts,
        createContact,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export default ContactState;
