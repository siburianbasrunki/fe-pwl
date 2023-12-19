import { ImCross } from "react-icons/im";
import { getOrder } from "../../services/order";
import { useEffect, useState } from "react";

function KelolaPesanan() {
  const [dataPesanan, setDataPesanan] = useState([]);
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
            </tr>
          ))}
        </tbody>
      </table>
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
