import React, { useContext, useEffect } from "react";
import ContactItem from "./ContactItem";
import ContactContext from "./../../context/Contact/ContactContext";

export default function Contacts() {
  const contactsContext = useContext(ContactContext);
  const { allContact, loadContacts } = contactsContext;
  useEffect(() => {
    loadContacts();
  }, []);

  console.log(contactsContext);

  return (
    <div>
      {allContact.map((contact) => (
        <ContactItem contact={contact} />
      ))}
    </div>
  );
}
