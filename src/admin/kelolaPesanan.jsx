import React from "react";
import { IoEyeSharp } from "react-icons/io5";
import { MdOutlineDelete } from "react-icons/md";
import { CiSquareCheck } from "react-icons/ci";
function KelolaPesanan() {
  const data = [
    {
      id: 1,
      produk: "Product A",
      tanggal: "2023-01-01",
      totalHarga: 200,
      buktiTransfer: "lihat bukti",
    },
    {
      id: 2,
      produk: "Product B",
      tanggal: "2023-01-02",
      totalHarga: 150,

      buktiTransfer: "lihat bukti",
    },
    // Add more data as needed
  ];

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
            <th>Produk</th>
            <th>Tanggal</th>
            <th>Total Harga</th>
            <th>Status Pembayaran</th>
            <th>Bukti Transfer</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.produk}</td>
              <td>{item.tanggal}</td>
              <td>{item.totalHarga}</td>
              <td className="text-2xl">
                <CiSquareCheck className="text-3xl items-center text-green-500" />
              </td>
              <td>
                <button className="btn btn-sm rounded rounded-lg bg-[#FFB054]">
                  {item.buktiTransfer}
                </button>
              </td>
              <td className="flex items-center gap-2">
                <IoEyeSharp className="text-2xl text-[#624DE3]" />
                <MdOutlineDelete className="text-2xl text-[#A30D11]" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex items-center justify-center gap-4 rounded-lg">
        <button className="join-item btn btn-sm bg-white text-gray-500">
          Previous
        </button>
        <button className="join-item btn btn-sm btn-active bg-[#FFB054] rounded-lg">1</button>
        <button className="join-item btn btn-sm rounded-lg">
          2
        </button>
        <button className="join-item btn btn-sm rounded-lg">3</button>
        <button className="join-item btn btn-sm rounded-lg">4</button>
        <button className="join-item btn btn-sm  bg-white text-gray-500">
          Next
        </button>
      </div>
    </div>
  );
}

export default KelolaPesanan;
