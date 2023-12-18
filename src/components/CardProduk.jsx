import { useEffect, useState } from "react";

import { getAllProduk } from "../services/admin/produk";

// import product1 from "../assets/images/keyboard.png";
// import product2 from "../assets/images/laptop.png";
// import product3 from "../assets/images/speaker.png";
import Fade from "react-reveal/Fade";

// const CardContent = [
//   {
//     titleProduct: "Keyboard",
//     price: 200000,
//     imageProduct: product1,
//   },
//   {
//     titleProduct: "Laptop",
//     price: 1500000,
//     imageProduct: product2,
//   },
//   {
//     titleProduct: "Speaker",
//     price: 500000,
//     imageProduct: product3,
//   },
//   {
//     titleProduct: "Keyboard",
//     price: 200000,
//     imageProduct: product1,
//   },
//   {
//     titleProduct: "Laptop",
//     price: 1500000,
//     imageProduct: product2,
//   },
//   {
//     titleProduct: "Speaker",
//     price: 500000,
//     imageProduct: product3,
//   },
// ];

const SkeletonCard = () => {
  return (
    <div className="card bg-[#D9D9D9] shadow-xl animate-pulse">
      <div className="animate-pulse">
        <div className="w-full h-80 bg-gray-300"></div>
      </div>
      <div className="card-body p-4">
        <div className="w-2/3 h-6 bg-gray-300 mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300"></div>
      </div>
    </div>
  );
};

const CardProduk = () => {
  const [dataProduk, setDataProduk] = useState([]);
  const fetchData = async () => {
    const data_produk = await getAllProduk();
    setDataProduk([...data_produk.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        <Fade top cascade>
          {dataProduk.length ? (
            dataProduk.map((product, index) => (
              <div
                key={index}
                className="card bg-[#D9D9D9] shadow-xl cursor-pointer"
                onClick={() =>
                  (window.location.href = `/detail-produk/${product.id}`)
                }
              >
                <figure>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover"
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title text-lg font-medium mb-2">
                    {product.name}
                  </h2>
                  <p className="text-gray-700">Price: {product.price}</p>
                </div>
              </div>
            ))
          ) : (
            <SkeletonCard />
          )}
        </Fade>
      </div>
    </>
  );
};

export default CardProduk;
