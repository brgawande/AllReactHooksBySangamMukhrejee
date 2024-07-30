import React from "react";

const UseMemoHook = () => {
  return (
    <div>
      <div>
        <h1>Use Memo Hooks</h1>
        <p className="px-20">
          The useMemo hook in React is used to memoize the result of a
          computation. This means that useMemo can help optimize performance by
          only recalculating a value when one of its dependencies changes,
          rather than on every render. It's particularly useful for expensive
          calculations or when passing objects to child components that rely on
          referential equality to prevent unnecessary re-renders.
        </p>
        <p className="text-[red] px-20">
          Memoization is a technique used to speed up applications by storing
          the results of expensive function calls and returning the cached
          result when the same inputs occur again.
        </p>
      </div>
    </div>
  );
};

export default UseMemoHook;
