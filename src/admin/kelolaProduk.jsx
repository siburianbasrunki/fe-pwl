import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
function KelolaProduk() {
  const data = [
    { id: 1, nama: "Product A", harga: 100, stok: 50 },
    { id: 2, nama: "Product B", harga: 150, stok: 30 },
    { id: 2, nama: "Product B", harga: 150, stok: 30 },
  ];

  return (
    <div className="flex flex-col space-y-6 py-12 px-10">
      <h2 className="font-bold text-2xl">Kelola Produk</h2>

      <div className="flex items-center justify-between">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm"
          />
        </div>
        <div className="mt-4">
          <button className="btn bg-[#FFB054] text-white btn-sm">
            {" "}
            + Tambah Produk
          </button>
        </div>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>ID Product</th>
            <th>Nama Product</th>
            <th>Harga</th>
            <th>Stok Sekarang</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.nama}</td>
              <td>{item.harga}</td>
              <td>{item.stok}</td>
              <td className="flex items-center gap-2">
                <CiEdit className="text-2xl text-[#624DE3]" />
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
        <button className="join-item btn btn-sm rounded-lg">2</button>
        <button className="join-item btn btn-sm rounded-lg">3</button>
        <button className="join-item btn btn-sm rounded-lg">4</button>
        <button className="join-item btn btn-sm  bg-white text-gray-500">
          Next
        </button>
      </div>
    </div>
  );
}

export default KelolaProduk;
