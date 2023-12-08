import React from "react";
import Navbar from "./components/navbar";
import ListCategory from "./components/listCategory";
import Hero from "./components/Hero";
import ProductList from "./components/ProductList";

const Homepage = () => {
  return (
    <>
        <Navbar/>
        <ListCategory/>
        <Hero/>
        <ProductList/>
    </>
  );
};

export default Homepage;
