// In ContactsSection.js, remove the unused prop drilling.

import React from "react";
import { ContactsList } from "./ContactsList";

export const ContactsSection = ({ contacts, name }) => {
  return (
    <div>
      <h2>{name}</h2>
      <ContactsList contacts={contacts} />
    </div>
  );
};
