import React from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeContext } from "./ThemeContext";
import { ThemeArea } from "./ThemeContext";
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

// Step 08: Now that the ThemeArea component acts as a wrapper around MyContext.Provider, replace any calls to MyContext.Provider in ContactsApp.js with ThemeArea. Make sure to use the initialTheme prop rather than the value prop of the .Provider. This shouldn’t change the behavior of your application at all – it’s only setting it up to be made more dynamic in the next exercise!

export const ContactsApp = () => {
  return (
    <div>
      <h1>Contacts</h1>
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
};
