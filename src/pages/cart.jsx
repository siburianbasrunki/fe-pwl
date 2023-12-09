import Navbar from "../components/navbar";
import cartImg from "../assets/images/laptop.png";
import { FaMinus, FaPen, FaPlus, FaRegTrashAlt } from "react-icons/fa";

import { useState } from "react";
const Cart = () => {
  const [quantity, setQuantity] = useState(0);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);

  const handleIncrease = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const handlePaymentMethodChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  const renderPaymentDetails = () => {
    switch (selectedPaymentMethod) {
      case "Dana":
        return <p>Nomor Rekening Dana: xxx-xxx-xxxx</p>;
      case "BRI":
        return <p>Nomor Rekening BRI: xxx-xxx-xxxx</p>;
      case "BNI":
        return <p>Nomor Rekening BNI: xxx-xxx-xxxx</p>;
      default:
        return null;
    }
  };

  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="md:flex md:justify-center md:gap-32 lg:justify-center lg:gap-32 p-2">
        <div className="flex flex-col">
          <div className="card-card flex gap-4 mt-4">
            <div>
              <img
                src={cartImg}
                alt="cartImg"
                className="w-32 h-32 rounded-lg"
              />
            </div>
            <div className="gap-x-8">
              <div className="mb-2">
                <h3 className="text-2xl">Laptop</h3>
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold">Rp 5.000.000</h3>
              </div>
              <div className="flex gap-4 items-center">
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
                <div>
                  <FaRegTrashAlt className="text-2xl font-extrabold" />
                </div>
              </div>
            </div>
          </div>
          <div className="card-card flex gap-4 mt-4">
            <div>
              <img
                src={cartImg}
                alt="cartImg"
                className="w-32 h-32 rounded-lg"
              />
            </div>
            <div className="gap-x-8">
              <div className="mb-2">
                <h3 className="text-2xl">Laptop</h3>
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-bold">Rp 5.000.000</h3>
              </div>
              <div className="flex gap-4 items-center">
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
                <div>
                  <FaRegTrashAlt className="text-2xl font-extrabold" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-auto md:w-80 lg:w-96 flex flex-col border border-black rounded-lg p-4 mt-4">
          <h2 className="mb-2 text-xl font-semibold ">Ringkasan Belanja</h2>
          <div className="flex justify-between">
            <div>
              <h3>Total Barang </h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
          </div>
          <div className="flex justify-between">
            <div>
              <h3>Total Harga </h3>
            </div>
            <div>
              <h3>Rp 15.000.000</h3>
            </div>
          </div>
          <h2 className="mb-2 text-lg font-semibold">Metode Pembayaran</h2>
          <select
            className="select select-bordered w-full"
            onChange={handlePaymentMethodChange}
          >
            <option disabled selected>
              Pilih Metode Pembayaran
            </option>
            <option>Dana</option>
            <option>BRI</option>
            <option>BNI</option>
          </select>

          {/* Render payment details based on the selected method */}
          {selectedPaymentMethod && (
            <div className="mt-2">{renderPaymentDetails()}</div>
          )}
          <div className="mt-2">
            <label htmlFor="proofUpload" className="text-sm">
              Unggah Bukti Pembayaran
            </label>
            <input
              type="file"
              className="file-input w-full max-w-xs bg-orange-500"
            />
          </div>

          <button className="border border-[#FF9364] text-black py-2 rounded-full mt-2 hover:bg-[#FF9364]">
            Bayar
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
