import React, { useReducer } from "react";
import axios from "axios";

import ContactReducer from "./ContactReducer";
import ContactContext from "./ContactContext";

// types
import { GET_ALL_CONTACTS } from "./../types";

const data = [
  { name: "ayoub", email: "ayoub@gmail.com", phone: "0623584965" },
  { name: "munir", email: "munir@gmail.com", phone: "0612584569" },
  { name: "taha", email: "taha@gmail.com", phone: "0612458963" },
];
const ContactState = ({ children }) => {
  // creation state
  const initialState = {
    allContact: data,
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
    dispatch({
      type: GET_ALL_CONTACTS,
      payload: res.data,
    });
  };

  const createContact = async (contact) => {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      };

      const response = await axios.post(`/api/contacts`, contact, config);

      console.log(response);
    } catch (error) {
      console.log(error);
    }
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
