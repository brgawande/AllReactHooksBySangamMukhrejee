import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import Button from "@mui/material/Button";
import ChangeThemeComponents from "./ChangeThemeComponents";

const UseContextHook = () => {
  const [hookExplanation, setHookExplanation] = useState(false);
  return (
    <div className="min-h-screen">
      <div>
        <h1>Use Context Hooks</h1>
        <p className="px-6 sm:px-10 lg:px-20">
          By useContext Hook we will be managing state globally similar to redux
        </p>
        <p className="px-6 sm:px-10 lg:px-20">
          useContext Hook is a Powerful feature of React that is used to share
          values between Components, without having the trouble of prop
          drilling, means without passing the value through props to the
          component Tree.
        </p>
        <p className="px-6 sm:px-10 lg:px-20">
          By this we can Manage Global State or pass data deeply through the
          components Tree without prop drilling
        </p>
        <p className="px-6 sm:px-10 lg:px-20">
          It is a Part of React Context API which is designed to provide a way
          to pass data through the component tree instead of passing props data
          manually through every components at every level ( from top to bottom
          ).
        </p>
        <div
          className="cursor-pointer"
          onClick={() => setHookExplanation(!hookExplanation)}
        >
          <h1 className="bg-black text-white w-[80%] sm:w-[25%] rounded-md py-[0.8px] m-auto">
            Show Hook explanation
          </h1>
        </div>
        {hookExplanation ? (
          <div>
            <p className="px-6 sm:px-10 lg:px-20">
              use Context is a diffrent components and, Login and Register are
              two Diffrent Components
            </p>
            <p className="px-6 sm:px-10 lg:px-20">
              abb hume change theme pe click karenge aur waha click karne se
              Login Component aur Register Component ka color change honga...ye
              tino diffrent components hai...to hum data useContext se pass
              karenge aur changes dikhayenge diffrent components me.
            </p>
            <p className="px-6 sm:px-10 lg:px-20">
              Now by clicking change theme we are able to change theme, but we
              dont have any direct connection between the components, this is
              how useContext Hook works, in this way we can now access this
              theme anywhere in our project
            </p>
          </div>
        ) : null}
      </div>
      <div>
        <div className="dflex mt-4">
          <ChangeThemeComponents />
        </div>
        <div className="dflex gap-10">
          <Login />
          <Register />
        </div>
      </div>
    </div>
  );
};

export default UseContextHook;
