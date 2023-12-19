import { ImCross } from "react-icons/im";
import { IoArrowBackOutline } from "react-icons/io5";
import { getOrder } from "../../services/order";
import { useEffect, useState } from "react";

function KelolaPesanan() {
  const [dataPesanan, setDataPesanan] = useState([]);
  const [showModalDetail, setShowModalDetail] = useState(false);
  const [showModalPayment, setShowModalPayment] = useState(false);
  const [dataDetailOrder, setDataDetailOrder] = useState({});

  const fetchData = async () => {
    try {
      const data = await getOrder();
      console.log(data);

      setDataPesanan([...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onHandleDetailPesanan = (id) => {
    const data_order = dataPesanan.find((order) => order.id === id);
    setDataDetailOrder(data_order);
    setShowModalDetail(true);
  };

  const onHandleDetailPayment = (id) => {
    const data_order = dataPesanan.find((order) => order.id === id);
    setDataDetailOrder(data_order);
    setShowModalPayment(true);
  };

  return (
    <div className="flex flex-col space-y-6 py-12 px-10">
      <h2 className="font-bold text-2xl">Kelola Pesanan</h2>

      <input
        type="text"
        placeholder="search"
        className="input input-bordered w-full max-w-xs input-sm"
      />

      <table className="table w-full">
        <thead>
          <tr>
            <th>ID Pesanan</th>
            <th>Tanggal</th>
            <th>Total Harga</th>
            <th>Status Pembayaran</th>
            <th>Bukti Transfer</th>
            <th>Detail Pesanan</th>
          </tr>
        </thead>
        <tbody>
          {dataPesanan.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.createdAt}</td>
              <td>{item.amount}</td>
              <td>{item.status}</td>
              <td>
                <button
                  className="btn btn-sm rounded-lg bg-[#FFB054]"
                  onClick={() => onHandleDetailPayment(item.id)}
                >
                  lihat bukti
                </button>
              </td>
              <td>
                <button
                  className="bg-[#58CBE4] btn btn-sm rounded-lg"
                  onClick={() => onHandleDetailPesanan(item.id)}
                >
                  <p className=" text-center">Detail Pesanan</p>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showModalDetail ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-start items-center gap-3 p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <button
                    type="button"
                    onClick={() => setShowModalDetail(false)}
                  >
                    <IoArrowBackOutline size={20} />
                  </button>
                  <h3 className="text-3xl font-semibold">Detail Pesanan</h3>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto divide-y w-[600px]">
                  <div className="flex flex-col gap-5 pt-5">
                    <h1 className="font-semibold">Detail Pesanan Pembeli</h1>
                    <div className="grid grid-cols-3 gap-3">
                      {dataDetailOrder.data.map((item, index) => (
                        <div key={index}>
                          <img src={item.image} alt="Produk1" />
                          <h2>{item.name}</h2>
                          <p>Rp. {item.price}</p>
                          <p>Jumlah Pesanan: {item.quantity}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
      {showModalPayment ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between items-center gap-3 p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Bukti Pembayaran</h3>
                  <button
                    type="button"
                    onClick={() => setShowModalPayment(false)}
                    className="text-black"
                  >
                    <ImCross />
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6">
                  <img
                    src={dataDetailOrder.payment}
                    alt="Payment"
                    className="w-full h-[700px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default KelolaPesanan;
