import React from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeContext } from "./ThemeContext";
import './index.css';

// Now that you’ve created a ThemeContext, import it into the ContactsApp.js file. In the ContactsApp function component, wrap the existing returned children inside a <ThemeContext.Provider> component with a value prop set to "light".

// Step 06: In ContactsApp.js, remove the unused prop drilling.

const family = [
  {
    name: "Finn the Human"
  },
  {
    name: "Jake the Dog"
  }
];

const friends = [
  {
    name: "Marceline"
  },
  {
    name: "Princess Bubblegum"
  }
];

// Our previous version of ContactsApp renders a single <ThemeContext.Provider> around all its children. Replace that single Provider with one wrapped around each of the <ContactsSection> components.

export const ContactsApp = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ThemeContext value="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeContext>
      <ThemeContext value="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeContext>
    </div>
  );
};
