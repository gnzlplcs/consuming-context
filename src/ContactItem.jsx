import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

// Then, in ContactItem.js, use destructuring to access only the theme value from the object returned by useContext().

export const ContactItem = ({ name }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`theme-${theme}`}>
      {name} {theme === "dark" ? "🌑" : "☀"}
    </div>
  );
};
