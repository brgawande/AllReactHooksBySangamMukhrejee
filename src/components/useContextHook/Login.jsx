import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../contextapi";

const Login = () => {
  const { theme } = useContext(GlobalContext);
  return (
    <div>
      <div
        className={
          theme === "light"
            ? "bb my-5 p-10 px-20 bg-white text-black"
            : "bb my-5 p-10 px-20 bg-black text-white"
        }
      >
        <h1>Login</h1>
        <Button variant="contained">Login</Button>
      </div>
    </div>
  );
};

export default Login;
