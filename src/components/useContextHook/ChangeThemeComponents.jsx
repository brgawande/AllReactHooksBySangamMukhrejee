import Button from "@mui/material/Button";
import React, { useContext } from "react";
import { GlobalContext } from "../../contextapi";

const ChangeThemeComponents = () => {
  // now i want to get the value of theme and setTheme here, so now here useContext will come into picture

  //   const getContextValue = useContext(GlobalContext);
  // or lets do by destructuring
  const { theme, setTheme } = useContext(GlobalContext);
  console.log("theme", theme);
  console.log("setTheme", setTheme);
  return (
    <div>
      <div>
        <h1>Use Context Components</h1>
        <div className="dflex">
          <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="contained"
          >
            Change Theme
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ChangeThemeComponents;
