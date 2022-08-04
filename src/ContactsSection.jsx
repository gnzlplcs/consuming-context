import React from "react";
import { ContactsList } from "./ContactsList";
import ThemeSwitcher from "./ThemeSwitcher";

export const ContactsSection = ({ contacts, name }) => {
  // Import the ThemeSwitcher component into ContactsSection.js. Render it as a child of the ContactsSection component, immediately after the h2.
  return (
    <div>
      <h2>{name}</h2>
      <ThemeSwitcher />
      <ContactsList contacts={contacts} />
    </div>
  );
};
