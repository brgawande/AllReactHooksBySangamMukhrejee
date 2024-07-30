import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";

const UseEffect = () => {
  const [points, setPoints] = useState(0);
  const [goldPoints, setGoldPoints] = useState(0);

  // calling an api with uiseEffect

  const [productsArray, setProductsArray] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://dummyjson.com/products?limit=100");
      if (!response.ok) {
        throw new Error("No Products Found");
      }
      const data = await response.json();
      const extractImages = data?.products.map((item) => item?.images);
      setProductsArray([...productsArray, extractImages]);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(productsArray);

  const flattenedProductsArray = productsArray.flat();

  useEffect(() => {
    if (points === 5) {
      fetchProducts();
      setGoldPoints(goldPoints + 1);
      setPoints(0);
    }

    return () => {
      //   this is a cleanup function after components mounts
    };
  }, [points]);

  return (
    <div>
      <div>
        <h1>useEffect Hook</h1>
        <p>useEffect Hooks is used to call an API</p>
        <p>
          With Empty Dependency array UseEffect will run only once after the
          page loads
        </p>
        <p></p>
      </div>
      <div>
        <h1>On Evry five points you will get One Gold Point</h1>
        <h1>Points - {points}</h1>
        <h1>Gold Points - {goldPoints}</h1>
        <div className="dflex">
          <Button onClick={() => setPoints(points + 1)} variant="contained">
            Increase Points
          </Button>
        </div>

        {/* fetch images of products */}
        <h1>Fetch Images of Products from an API with useEffect</h1>
        <div className="productsss">
          {flattenedProductsArray && flattenedProductsArray.length > 0 ? (
            <div>
              <div className="bg-white">
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {flattenedProductsArray.map((product, index) => (
                      <a key={index} className="group">
                        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                          <img
                            src={product}
                            className="h-full w-full object-cover object-center group-hover:opacity-75"
                          />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <h1>No Products Found </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default UseEffect;
