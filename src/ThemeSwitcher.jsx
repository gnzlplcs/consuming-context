import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const ThemeSwitcher = () => {
  // ThemeSwitcher should retrieve both setTheme and theme from ThemeContext as variables.
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // It should also render a button whose text content is Theme is currently: {theme}.

    // In the ThemeSwitcher component, add an onClick callback on the <button>. It should call setTheme with "dark" if the current theme is "light", or "light" if the current theme is "dark".
    <button
      onClick={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
    >
      Theme is currently: {theme}
    </button>
  );
};

export default ThemeSwitcher;
