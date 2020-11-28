import React, { useState, useContext } from "react";
import ContactContext from "../../context/Contact/ContactContext";

export default function ContactForm(action) {
  const contactContext = useContext(ContactContext);
  const { createContact } = contactContext;
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phone, setPhone] = useState("");

  const [contact, setContacts] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const { name, email, phone } = contact;

  const handelChange = (e) => {
    setContacts({ ...contact, [e.target.name]: e.target.value });
  };

  // const handelChange = (e) => {
  //   const targetId = e.target.id;
  //   switch (targetId) {
  //     case "name":
  //       console.log("name");
  //       setName(e.target.value);
  //       break;
  //     case "email":
  //       console.log("email");
  //       setEmail(e.target.value);
  //       break;
  //     case "phone":
  //       console.log("phone");
  //       setPhone(e.target.value);
  //       break;
  //     default:
  //       console.log("false");
  //   }
  //   console.log(e.target.value);
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      phone,
    };
    createContact(data);
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
        name="name"
        value={name}
        class="form-control mb-4"
        placeholder="Name"
        onChange={handelChange}
      />

      <input
        type="email"
        name="email"
        value={email}
        class="form-control mb-4"
        placeholder="Email"
        onChange={handelChange}
      />
      <input
        type="tel"
        name="phone"
        value={phone}
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
