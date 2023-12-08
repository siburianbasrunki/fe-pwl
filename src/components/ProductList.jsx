import React from "react";
import CardProduct from "./card";
const ProductList = () => {
  return (
    <>
      <div className="container mx-auto mt-4">
        <div>
          <h1 className="text-3xl">All Product</h1>
        </div>
        <div className="mt-4 container">
            <CardProduct/>
        </div>
      </div>
    </>
  );
};

export default ProductList;
