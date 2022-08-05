// Import ThemeContext and React’s useContext into ContactsApp.js.

import React, { useContext } from "react";
import { ContactsSection } from "./ContactsSection";
import { ThemeContext } from "./ThemeContext";
import { ThemeArea } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";
import "./index.css";

const family = [
  {
    name: "Finn the Human",
  },
  {
    name: "Jake the Dog",
  },
];

const friends = [
  {
    name: "Marceline",
  },
  {
    name: "Princess Bubblegum",
  },
];

export const ContactsApp = () => {
  // Then, call useContext() to Retrieve the theme value in the ContactsApp component.
  const { theme } = useContext(ThemeContext);

  return (
    // Finally, use theme to give the rendered <div> a className prop like so:
    <div className={`theme-${theme}`}>
      {
        // Let’s give users the option to change the root application theme as well. Import the ThemeSwitcher component from ThemeSwitcher.js into ContactsApp.js and render it after the <h1> heading.
      }
      <h1>Contacts</h1>
      <ThemeSwitcher />
      <ThemeArea initialTheme="light">
        <ContactsSection contacts={family} name="Family" />
      </ThemeArea>
      <ThemeArea initialTheme="dark">
        <ContactsSection contacts={friends} name="Friends" />
      </ThemeArea>
    </div>
  );
};
