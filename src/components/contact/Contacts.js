import React from "react";
import ContactItem from "./ContactItem";
const t = [1, 2, 3];
export default function Contacts() {
  return (
    <div>
      {t.map((e) => (
        <ContactItem />
      ))}
    </div>
  );
}
