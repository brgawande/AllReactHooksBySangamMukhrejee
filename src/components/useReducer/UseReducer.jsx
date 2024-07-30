import React, { useReducer } from "react";
import Button from "@mui/material/Button";

const initialState = {
  count: 0,
};

function reducer(state, action) {}
const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <div>
      <div>
        <h1>useReducer Hooks</h1>
        <p>It's Basically Alternative of useState Hook</p>
        <p className="px-20">
          The useReducer hook in React is a more advanced alternative to the
          useState hook. It’s used for managing complex state logic in a
          functional component. It’s especially useful when the state has
          multiple sub-values or when the next state depends on the previous
          one. It follows a pattern similar to the reducer pattern found in
          Redux, a state management library.
        </p>
        <p className="text-red-900">
          This hook takes the reducer function and the initial state as
          arguments and returns an array with the current state and a dispatch
          function.
        </p>
        <h1>const [state, dispatch] = useReducer(reducer, initialState);</h1>
      </div>
      <div className="dflex gap-10 my-10">
        <Button variant="contained">Increase Count</Button>
        <Button variant="contained">Decrease Count</Button>
        <Button variant="contained">Show Count</Button>
        <Button variant="contained">Reset Count</Button>
      </div>
    </div>
  );
};

export default UseReducer;
