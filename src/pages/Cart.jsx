import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { FaRegTrashAlt } from "react-icons/fa";

import { parseJwt } from "../utils/parseJwt";
import { getCartItemUser } from "../services/admin/cart";

const Cart = () => {
  const token = Cookies.get("token");
  const user = token !== undefined ? parseJwt(token) : "";
  const userId = user?.user_id;

  const [dataProduk, setDataProduk] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const items = useSelector((state) => state.cart.items);

  console.log(items);

  const fetchData = async (userId) => {
    try {
      const data = await getCartItemUser(userId);

      setDataProduk([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

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
      <div className="md:flex md:justify-center md:gap-32 lg:justify-center lg:gap-32 p-2">
        <div className="flex flex-col">
          {dataProduk.length !== 0 ? (
            dataProduk.map((produk) => (
              <div className="card-card flex gap-4 mt-4" key={produk.id}>
                <div>
                  <img
                    src={produk.image}
                    alt="cartImg"
                    className="w-32 h-32 rounded-lg"
                  />
                </div>
                <div className="gap-x-8">
                  <div className="mb-2">
                    <h3 className="text-2xl">{produk.name}</h3>
                  </div>
                  <div className="mb-2">
                    <h3 className="text-xl font-bold">Rp {produk.price}</h3>
                  </div>
                  <div className="flex gap-4 items-center">
                    <p>Jumlah Pesanan: {produk.quantity}</p>
                    <div>
                      <FaRegTrashAlt className="text-2xl font-extrabold" />
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Belum ada item</p>
          )}
        </div>

        <div className="w-full h-auto md:w-80 lg:w-96 flex flex-col border border-black rounded-lg p-4 mt-4">
          <h2 className="mb-2 text-xl font-semibold ">Ringkasan Belanja</h2>
          <h2 className="mb-2 text-lg font-semibold">Metode Pembayaran</h2>
          <select
            className="select select-bordered w-full"
            value={"DEFAULT"}
            onChange={handlePaymentMethodChange}
          >
            <option disabled selected value={"DEFAULT"}>
              Pilih Metode Pembayaran
            </option>
            <option>Dana</option>
            <option>BRI</option>
            <option>BNI</option>
          </select>

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
