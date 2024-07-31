import React, { useEffect, useRef, useState } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const UseRefHook = () => {
  function DisplayCode() {
    return (
      <div>
        <p>
          <pre>
            {`useEffect(() => {
  a = a + 1;
  console.log(\`rerendering ...the value of a is \${a}\`);
});`}
          </pre>
        </p>
      </div>
    );
  }

  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  const startTimer = () => {
    intervalRef.current = setInterval(() => {
      setTimer((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(intervalRef.current);
  };

  const [count, setCount] = useState(0);
  const a = useRef(1);
  console.log(a);
  useEffect(() => {
    a.current = a.current + 1;
    console.log(`rerendering ...the value of a is ${a.current}`);
  });
  return (
    <div>
      <div>
        <h1>UseRef Hooks</h1>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          1. Hum Jab Bhi state ko change karte hai wo ek re-render trigger karta
          hai
        </p>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          2. counter app me jab jab count ki value change hongi tab tab humara
          component re-render honga . <br />
          <span>const [count, setCount] = useState(0);</span> <br />
          <span>let a = 1;</span> <br />
        </p>
        <div className="flex justify-start w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-1/3">
          <DisplayCode />
        </div>

        <p className="px-6 sm:px-10 lg:px-20 text-left">
          3. yaha pe hum multiples times agar count ki value increase karenge to
          count to badhenga but a ki value nhi increase hongi q ki component
          rerender ho raha hai...means wps se chal raha hai let a = 1; phir se
          call ho raha hai aur a ki value phir se 1 ho ja rahi hai aur badh hi
          nhi rahi hai...
        </p>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          4. Abb rerender hone ki wajh se ye jo let a = 1; ki value hum use hi
          nhi kar pa rahe hai...iski value <mark>persist</mark> hi nhi karri
          hai...jaise hi component rerender ho raha hai uski value wps se
          previous value ho ja rahi hai.
        </p>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          5. To React iss issue ko solve karne ke liye{" "}
          <mark> useRef Hook </mark> deta hai <br />
          <span>
            abb hum let a = 1; ko change karke.... const a = useRef(1); kar
            denge...useRef(initialValue)...useRef me initailValue dalenge
          </span>
        </p>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          6. abb console.log(a) karke dekhe to hume ek object mil raha hai with
          current property jiski value hai 1. <br />
          To hume a.current se a ki value ko accsess karna padenga
        </p>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          7. aabb Increment karne pe a ki value increase ho rahi hai....q ki{" "}
          <br />
          <mark> useRef karne se a ki value persist ho rahi hai </mark> agar
          code rerender bhi ho raha hai to wo a ki value change nhi karenga
        </p>
      </div>
      <div>
        <h1>{count}</h1>
        <div className="dflex">
          <Button onClick={() => setCount(count + 1)} variant="contained">
            Increment +
          </Button>
        </div>
      </div>
      <div>
        <p className="px-6 sm:px-10 lg:px-20 text-left">
          useRef hum timer me bhi use karte hai jab count ki value har second ko
          change hoti through setInterval...
        </p>
        <div>
          <p>Count: {timer}</p>
          <div className="dflex gap-10">
            <Button onClick={startTimer} variant="contained">
              Start
            </Button>
            <Button onClick={stopTimer} variant="contained">
              Stop
            </Button>
          </div>
        </div>
      </div>

      {/* dom manipulatuion with useRef */}
      <div>
        <h1>Another useCase - DOM Manipulation</h1>
        <div className="dflex">
          <Link
            className="text-2xl font-semibold mb-10 bg-slate-900 text-white px-6 py-1 rounded-md"
            to={"/dommanipulation"}
          >
            Click here Dom Manipulation
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UseRefHook;
