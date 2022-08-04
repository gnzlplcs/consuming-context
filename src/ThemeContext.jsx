// In the workspace’s ThemeContext.js file, use React.createContext() to create a new context. Then, store the new context in a variable named ThemeContext. Finally, export ThemeContext as a named export.

import React from "react";

export const ThemeContext = React.createContext();

// In the workspace’s ThemeContext.js file, create and export a new component named ThemeArea. It should take in two props: children and initialTheme.
// For the ThemeArea component’s returned value, return the children prop wrapped in a ThemeContext.Provider component. Use the initialTheme prop as the value for the ThemeContext.Provider.
export const ThemeArea = ({ children, initialTheme }) => {
  return (
    <ThemeContext.Provider value={initialTheme}>
      {children}
    </ThemeContext.Provider>
  );
};
