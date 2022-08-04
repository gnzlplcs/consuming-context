import React, { useState } from "react";

export const ThemeContext = React.createContext();

// First, in the ThemeArea component, call useState() to create a piece of state named theme along with a state setter function. Use the initialTheme prop as the initial state value.

// Provide an object containing both the theme and setTheme values to the ThemeContext.Provider component with the value prop.

export const ThemeArea = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(initialTheme);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
