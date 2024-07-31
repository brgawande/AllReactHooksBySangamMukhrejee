import React, { useEffect, useRef } from "react";

const DomManipulation = () => {
  const ref = useRef();

  useEffect(() => {
    ref.current.style.backgroundColor = "red";
  }, []);
  return (
    <div>
      <div>
        <h1 className="px-2">DOM Manupulation with useRef</h1>
        <p ref={ref} className="px-4">
          this is ref to const ref = useRef()
        </p>
        <p className="px-2">
          i can style the above p tag with this ref ...with this code
          ref.current.style.backgroundColor = "red";
        </p>
        <p className="px-2">In this way we can do the DOM Manipulation</p>
      </div>
    </div>
  );
};

export default DomManipulation;
