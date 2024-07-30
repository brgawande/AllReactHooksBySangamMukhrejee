import React, { useContext } from "react";
import Button from "@mui/material/Button";
import { GlobalContext } from "../../contextapi";

const Register = () => {
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
        {/* <div className="bb my-5 p-10 px-20 bg-black text-white"> */}
        <h1>Register</h1>
        <Button variant="contained">Register</Button>
      </div>
    </div>
  );
};

export default Register;
