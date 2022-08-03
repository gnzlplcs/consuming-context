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

export const ContactsApp = () => {
  return (
    <ThemeContext.Provider value="light">
      <div>
        <h1>Contacts</h1>
        <ContactsSection contacts={family} name="Family" />
        <ContactsSection contacts={friends} name="Friends" />
      </div>
    </ThemeContext.Provider>
  );
};
