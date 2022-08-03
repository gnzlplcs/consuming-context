// In ContactsList.js, remove the unused prop drilling.

import React from "react";
import { ContactItem } from "./ContactItem";

export const ContactsList = ({ contacts }) => {
  return contacts.map((contact) => (
    <ContactItem {...contact} key={contact.name} />
  ));
};
