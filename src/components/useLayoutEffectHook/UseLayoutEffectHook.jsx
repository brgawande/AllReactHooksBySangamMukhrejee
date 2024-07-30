import React, { useEffect, useLayoutEffect } from "react";

const UseLayoutEffectHook = () => {
  useEffect(() => {
    console.log("use effect called");
  }, []);

  useLayoutEffect(() => {
    console.log("use layout effect called");
  }, []);

  return (
    <div>
      <div>
        <h1>use Layout Effect Hook</h1>
        <p>
          The useLayoutEffect hook in React is similar to the useEffect hook but
          differs in timing. While useEffect runs asynchronously after the
          browser has painted the screen, useLayoutEffect runs synchronously
          immediately after all DOM mutations but before the browser has
          painted. This makes it useful for reading layout properties or
          synchronously re-rendering before the user sees the update.
        </p>
        <h1 className="text-[red]">
          what does it means by painting of Browsers?
        </h1>
        <p className="text-left px-20 text-[blue]">
          In the context of web browsers, "painting" (also known as "rendering")
          refers to the process by which the browser converts the HTML, CSS, and
          JavaScript of a webpage into pixels on the screen. This process
          involves several steps: <br /> 1. Parsing: The browser parses the HTML
          and builds the Document Object Model (DOM) and parses the CSS to build
          the CSS Object Model (CSSOM). <br />
          2. Style Calculation: The browser calculates the styles for each DOM
          node based on the CSS rules. This step is also known as "style
          resolution". <br />
          3. Layout: The browser computes the geometric positions of the
          elements. This step is also known as "reflow". The browser determines
          the size and position of each element on the page. <br />
          4. Painting: The browser fills in the pixels on the screen. It draws
          the elements, including text, colors, borders, shadows, and images.
          This step is also known as "rasterization". <br />
          5. Compositing: If the webpage uses layers (e.g., due to CSS
          properties like transform, opacity, or position: fixed), the browser
          composites these layers into a final image.
        </p>
      </div>
    </div>
  );
};

export default UseLayoutEffectHook;
