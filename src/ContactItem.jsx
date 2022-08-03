// In the ContactItem.js file, remove the theme prop from the ContactItem component’s prop list. Have it use React’s useContext() hook to retrieve the ThemeContext’s provided theme value instead.

import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const ContactItem = ({ name }) => {
  const theme = useContext(ThemeContext)

  return (
    <div className={`theme-${theme}`}>
      {name} {theme === "dark" ? "🌑" : "☀"}
    </div>
  );
};
