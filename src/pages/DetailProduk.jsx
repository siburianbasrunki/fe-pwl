import { useState } from "react";

import LaptopImg from "../assets/images/laptop.png";
import { FaPlus, FaMinus, FaPen } from "react-icons/fa";

const DetailProduk = () => {
  const [quantity, setQuantity] = useState(0);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  return (
    <>
      <div className="container mx-auto p-4 flex flex-wrap justify-center">
        <div className="w-96 m-4">
          <img src={LaptopImg} alt="product" className="w-full rounded-lg" />
          <h2 className="font-semibold text-xl mt-2">Laptop</h2>
          <h2 className="font-semibold text-xl mt-2">Rp. 5.000.000</h2>
          <h2>Dekskripsi Produk</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
            officia tenetur dignissimos fuga sapiente molestiae suscipit
            quibusdam facere, accusantium consectetur placeat non reprehenderit
            ipsam incidunt odio. Dolorem necessitatibus aut, autem officiis
            reprehenderit quam distinctio modi iure provident ratione dicta.
          </p>
        </div>
        <div className="w-full h-80 md:w-80 lg:w-96 flex flex-col border border-black rounded-lg p-4 m-4">
          <h2 className="mb-2 text-xl font-semibold text-center">
            Atur Jumlah dan Catatan
          </h2>
          <div className="flex items-center mb-2 gap-3 ">
            <div className="flex items-center bg-[#D9D9D9] rounded p-1 gap-4">
              <FaMinus
                className="text-xl cursor-pointer"
                onClick={handleDecrease}
              />
              <span className="mx-2">{quantity}</span>
              <FaPlus
                className="text-xl cursor-pointer"
                onClick={handleIncrease}
              />
            </div>
            <div className="ml-2">Stock: 100</div>
          </div>
          <div className="flex items-center mt-2 bg-[#D9D9D9] p-2 rounded">
            <FaPen className="text-xl mr-2" />
            <input
              type="text"
              placeholder="Tambah catatan"
              className="w-full outline-none px-2 py-1 bg-[#D9D9D9] text-black-800"
            />
          </div>
          <h2 className="mt-4">Subtotal: {quantity * 1500000}</h2>
          <button className="bg-[#FF9364] text-white py-2 rounded-full mt-2">
            + Keranjang
          </button>
          <button className="border border-[#FF9364] text-black py-2 rounded-full mt-2">
            Beli Langsung
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
