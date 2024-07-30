import React, { useRef } from "react";

const UseRefHook = () => {
  const countValue = useRef(0);
  return (
    <div>
      <div>
        <h1>UseRef Hooks</h1>
        <p className="px-20">
          The useRef hook in React is a powerful tool that allows you to create
          a mutable object that persists across re-renders. It's particularly
          useful for accessing and manipulating DOM elements directly, as well
          as for holding mutable values that do not trigger re-renders when
          updated.
        </p>
      </div>
    </div>
  );
};

export default UseRefHook;
