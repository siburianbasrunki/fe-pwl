import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { FaRegTrashAlt } from "react-icons/fa";

import { parseJwt } from "../utils/parseJwt";
import { createOrder } from "../services/order";
import { getCartItemUser, deleteCartItem } from "../services/cart";

const Cart = () => {
  const navigate = useNavigate();
  const token = Cookies.get("token");
  const user = token !== undefined ? parseJwt(token) : "";
  const userId = user?.user_id;

  const [dataProduk, setDataProduk] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [fotoPayment, setFotoPayment] = useState(null);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  // const [deleteCartItems, setDeleteCartItems] = useState(null);
  const items = useSelector((state) => state.cart.items);

  console.log(items);

  const fetchData = async (userId) => {
    try {
      const data = await getCartItemUser(userId);
      console.log(data);

      setTotalPrice(
        data.data.reduce((total, item) => total + item.price * item.quantity, 0)
      );
      setDataProduk([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData(userId);
  }, [userId]);

  const onHandleOrder = async () => {
    try {
      const data = await createOrder(
        userId,
        totalPrice,
        "DiProses",
        fotoPayment
      );
      console.log(data);

      alert("Pesanan Berhasil Dipesan");
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  // const onHandleDelete = async (e, id) => {
  //   e.preventDefault();

  //   try {
  //     const data = await deleteCartItem(id);
  //     console.log(data);

  //     fetchData(userId);
  //     document.getElementById("delete-modal").close();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setFotoPayment(image);
    }
  };

  // const openDeleteModal = (id) => {
  //   const product = dataProduk.find((product) => product.id === id);
  //   setDeleteCartItems(product);

  //   document.getElementById("delete-modal").showModal();
  // };

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
            dataProduk.map((produk, index) => (
              <div className="card-card flex gap-4 mt-4" key={index}>
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
                  <p>Catatan Pembeli: {produk.note}</p>
                  <div className="flex gap-4 items-center">
                    <p>Jumlah Pesanan: {produk.quantity}</p>
                    <div>
                      <FaRegTrashAlt
                        className="text-2xl font-extrabold"
                        // onClick={() => openDeleteModal(produk.id)}
                      />
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
          <p>Total Pembayaran: {totalPrice}</p>
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
              onChange={onHandleImage}
            />
          </div>

          <button
            className="border border-[#FF9364] text-black py-2 rounded-full mt-2 hover:bg-[#FF9364]"
            type="button"
            onClick={onHandleOrder}
          >
            Bayar
          </button>
        </div>
      </div>
      {/* <dialog id="delete-modal" className="modal">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">
            Hapus Data Produk ID {deleteCartItems?.id}
          </h3>
          <p className="font-semibold text-lg">
            Apakah Anda yakin ingin menghapus produk ini?
          </p>
          <hr className="py-3 text-black" />
          <div className="flex justify-end">
            <button
              className="bg-[#A30D11] text-white px-4 py-2 rounded-full mb-2 "
              onClick={(e) => onHandleDelete(e, deleteCartItems.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      </dialog> */}
    </>
  );
};

export default Cart;
