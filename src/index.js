import ReactDOM from "react-dom/client";
import { ContactsApp } from "./ContactsApp";
import { ThemeArea } from "./ThemeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

// Import ThemeArea into index.js and wrap the <ContactsApp /> with a ThemeArea. Give it an initialTheme prop value of "light".

root.render(
  <ThemeArea initialTheme={"light"}>
    <ContactsApp />
  </ThemeArea>
);
