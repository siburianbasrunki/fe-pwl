import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { FaPlus, FaMinus, FaPen } from "react-icons/fa";

import { parseJwt } from "../utils/parseJwt";
import { addCartItem } from "../services/cart";
import { getDetailProduk } from "../services/admin/produk";

const DetailProduk = () => {
  const navigate = useNavigate();
  let { produkId } = useParams();
  const token = Cookies.get("token");
  const user = token !== undefined ? parseJwt(token) : "";
  const userId = user?.user_id;

  const [dataProduk, setDataProduk] = useState({});
  const [quantity, setQuantity] = useState(0);
  const [catatan, setCatatan] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data_produk = await getDetailProduk(produkId);

      setDataProduk(data_produk.data.product);
    };
    fetchData();
  }, [produkId]);

  const onHandleAddCart = async (productId) => {
    try {
      if (userId === undefined) {
        navigate("/login");
      } else {
        if (quantity === 0) {
          alert("Quantity harus diisi");
          return;
        }
        const data = await addCartItem(userId, productId, quantity, catatan);
        console.log(data);

        setQuantity(0);
        setCatatan("");
        navigate("/cart");
      }
    } catch (error) {
      console.log(error);
    }
  };

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
          <img
            src={dataProduk.image}
            alt="product"
            className="w-full rounded-lg"
          />
          <h2 className="font-semibold text-xl mt-2">{dataProduk.name}</h2>
          <h2 className="font-semibold text-xl mt-2">Rp. {dataProduk.price}</h2>
          <h2>Dekskripsi Produk</h2>
          <p>{dataProduk.description}</p>
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
            <div className="ml-2">Stock: {dataProduk.stock}</div>
          </div>
          <div className="flex items-center mt-2 bg-[#D9D9D9] p-2 rounded">
            <FaPen className="text-xl mr-2" />
            <input
              type="text"
              placeholder="Tambah catatan"
              className="w-full outline-none px-2 py-1 bg-[#D9D9D9] text-black-800"
              onChange={(e) => setCatatan(e.target.value)}
            />
          </div>
          <h2 className="mt-4">Subtotal: {quantity * dataProduk.price}</h2>
          <button
            className="bg-[#FF9364] text-white py-2 rounded-full mt-2"
            type="button"
            onClick={() => onHandleAddCart(dataProduk.id)}
          >
            + Keranjang
          </button>
        </div>
      </div>
    </>
  );
};

export default DetailProduk;
