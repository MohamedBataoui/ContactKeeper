import React, { useContext, useEffect } from "react";
import ContacFilter from "../contact/ContactFilter";
import ContactForm from "./../contact/ContactForm";
import Contacts from "./../contact/Contacts";
import { Redirect } from "react-router-dom";
import AuthContext from "./../../context/auth/AuthContext";
import ContactContext from "../../context/Contact/ContactContext";

function Home() {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, loadUser } = authContext;

  useEffect(() => {
    loadUser();
    //loadContacts();
  }, []);

  if (isAuthenticated === null) {
    return <Redirect to="/login" />;
  }
  return (
    <div class="container mt-5">
      <div class="row">
        <div className="col-md-6">
          <ContactForm />
        </div>
        <div className="col-md-6">
          <ContacFilter />
          <Contacts />
        </div>
      </div>
    </div>
  );
}

export default Home;
