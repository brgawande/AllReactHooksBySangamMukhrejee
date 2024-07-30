import { createContext, useState } from "react";

// First step is to create your context with any name you want and give it the initialValue
export const GlobalContext = createContext(null);

// Next step: Create a global state component
// This will be the state that we are managing globally
// Wrap your app.js in this global state so that this global state can be accessible in all the nested components

// The `children` prop represents all the nested components of App.js
// We will be passing the entire app as children
function GlobalState({ children }) {
  // Now we will be managing the state inside this component
  const [theme, setTheme] = useState("light");
  // So now this theme can be accessed in all the children components

  return (
    <GlobalContext.Provider value={{ theme, setTheme }}>
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
