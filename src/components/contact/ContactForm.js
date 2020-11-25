import React, { useState, useContext, useEffect } from "react";
import ContactContext from "../../context/Contact/ContactContext";

export default function ContactForm(action) {
  const contactContext = useContext(ContactContext);
  const { createContact } = contactContext;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const handelChange = (e) => {
    const targetId = e.target.id;
    switch (targetId) {
      case "name":
        console.log("name");
        setName(e.target.value);
        break;
      case "email":
        console.log("email");
        setEmail(e.target.value);
        break;
      case "tel":
        console.log("tel");
        setTel(e.target.value);
        break;
      default:
        console.log("false");
    }
    console.log(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const contact = {
      name: name,
      email: email,
      tel: tel,
    };
    createContact();
  };

  return (
    <form
      class="text-center border border-light p-5"
      action="https://www.google.com/"
      onSubmit={onSubmit}
    >
      <p class="h4 mb-4">Add Contact</p>

      <input
        type="text"
        id="name"
        class="form-control mb-4"
        placeholder="Name"
        onChange={handelChange}
      />

      <input
        type="email"
        id="email"
        class="form-control mb-4"
        placeholder="Email"
        onChange={handelChange}
      />
      <input
        type="tel"
        id="tel"
        class="form-control mb-4"
        placeholder="Phone"
        onChange={handelChange}
      />

      <button class="btn btn-info btn-block my-4" type="submit">
        Add contact
      </button>
    </form>
  );
}
