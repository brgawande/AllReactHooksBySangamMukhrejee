import React, { useState, useMemo } from "react";
import Button from "@mui/material/Button";

const UseMemoHook = () => {
  const [count, setCount] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  const nums = new Array(30_000_000).fill(0).map((_, i) => {
    return {
      index: i,
      // agara index ki value 29million hoti hai to isMagical true ho jayenga
      isMagical: i === 29_000_000,
    };
  });

  // expensive computation/calculation ...computation complexity iski bohot high hai
  const magical = useMemo(() => nums.find((i) => i.isMagical === true), [nums]);

  return (
    <div>
      <div>
        <h1>Use Memo Hooks</h1>
        <p className="px-5 sm:px-10 lg:px-20">
          The useMemo hook in React is used to memoize the result of a
          computation. This means that useMemo can help optimize performance by
          only recalculating a value when one of its dependencies changes,
          rather than on every render. It's particularly useful for expensive
          calculations or when passing objects to child components that rely on
          referential equality to prevent unnecessary re-renders.
        </p>
        <p className="text-[red] px-5 sm:px-10 lg:px-20">
          Memoization is a technique used to speed up applications by storing
          the results of expensive function calls and returning the cached
          result when the same inputs occur again.
        </p>
      </div>
      <div className="dflex">
        <Button
          onClick={() => setShowExplanation(!showExplanation)}
          variant="contained"
        >
          Show Detailed Explanation
        </Button>
      </div>
      {showExplanation ? (
        <>
          <div>
            <h1>Use Memo Hooks Detailed Explanation</h1>
            <h1>Magical Number is {magical.index}</h1>
            <div className="dflex">
              <h1>Count is {count}</h1>
              <Button onClick={() => setCount(count + 1)} variant="contained">
                Increment
              </Button>
            </div>
            <p className="px-5 sm:px-10 lg:px-20">
              1. Agar aap ke pass aise koi app hai jo bohot jyda intensive task
              kar rahi hai....jaise ki 3Crore ki array pe map function chal raha
              hai
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              2. Humne kya kiya ki...bohot bada Array banaya jo return karra hai
              hume index aur isMagical ki value...isMagical ki value jo har
              jagah pe false hongi bass i===29_000_000 pe true hongi
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              3. abb hum find method lagaya ....aur uss number ko find karre
              jaha pe isMagical true honga.....abb iske liye wo sare numbers
              check karenga 0,1,2,3,4,5,6,7,8.....29_000_000 tak.
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              4. jab mai showExplanation pe click karra hu to itne expensive
              function ke wajh se load hone ko itna time lag raha hai
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              5. abb important baat ye hai ki jab maine count ko change kiya ya
              showExplanation pe click kiya to mera pura component rerender
              honga....to jab pura component rerender honga to itna expensive
              computation/calculation wapas se run honga
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              6. so ye expensive calculation baar baar run na ho component
              rerender pe tab hum useMemo hook ka use karte hai... <br />
              useMemo ke syntax me jo first place hai waha hum humara expensive
              function pass karenge aur second array me wo expensive function ka
              state pass karenge taki wo tabhi update ho jab wo expensive
              function pe call ho
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              7. Hume useMemo tab istemal karna hai jum hum chahate hai between
              rerenders humara koi bhi expensive calculation baar baar compute
              na ho
            </p>
            <p className="px-5 sm:px-10 lg:px-20">
              8. useMemo Hook aapki values ko memoised kar deta hai...aur jab
              jab hume expensive calculation ko update karna hai to hum uski
              dependency array me wo state dal denge jisse jab wo state me
              change honga expensive calculation updateho jayenga
            </p>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default UseMemoHook;
