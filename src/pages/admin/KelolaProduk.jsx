import { useState } from "react";

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

function KelolaProduk() {
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);

  const data = [
    { id: 1, nama: "Product A", harga: 100, stok: 50 },
    { id: 2, nama: "Product B", harga: 150, stok: 30 },
    { id: 3, nama: "Product C", harga: 200, stok: 20 },
  ];

  const openEditModal = (product) => {
    setEditProduct(product);
    document.getElementById("edit-modal").showModal();
  };

  const openDeleteModal = (product) => {
    setDeleteProduct(product);
    document.getElementById("delete-modal").showModal();
  };

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
          <button
            className="btn bg-[#FFB054] text-white btn-sm"
            onClick={() => document.getElementById("my_modal").showModal()}
          >
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
                <CiEdit
                  className="text-2xl text-[#624DE3]"
                  onClick={() => openEditModal(item)}
                />
                <MdOutlineDelete
                  className="text-2xl text-[#A30D11]"
                  onClick={() => openDeleteModal(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="join flex items-center justify-center gap-4 rounded-lg">
        <button className="join-item btn btn-sm bg-white text-gray-500">
          Previous
        </button>
        <button className="join-item btn btn-sm btn-active bg-[#FFB054] rounded-lg">
          1
        </button>
        <button className="join-item btn btn-sm rounded-lg">2</button>
        <button className="join-item btn btn-sm rounded-lg">3</button>
        <button className="join-item btn btn-sm rounded-lg">4</button>
        <button className="join-item btn btn-sm  bg-white text-gray-500">
          Next
        </button>
      </div>

      <dialog id="my_modal" className="modal w-full p-8">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">Form Data Produk</h3>
          <p className="font-semibold text-lg">Data Produk</p>
          <small className="py-2 block">Isi Data produk dengan benar</small>
          <hr className="py-3 text-black" />
          <form className="space-y-1 mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="nama_produk" className="block">
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="nama_produk"
                  className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                  placeholder="nama produk anda"
                />
              </div>
              <div className="flex-1">
                <label htmlFor="gambar_produk" className="block">
                  Gambar Produk
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <label htmlFor="harga_produk" className="block">
                Harga Produk
              </label>
              <input
                type="number"
                id="harga_produk"
                className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                placeholder="harga produk anda"
              />
            </div>
            <div>
              <label htmlFor="stok_produk" className="block">
                Stok Produk
              </label>
              <input
                type="number"
                id="stok_produk"
                className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                placeholder="sisa stok produk"
              />
            </div>
            <div className="flex flex-col items-center mt-4 ">
              <button className="bg-[#E0924A] text-white px-4 py-2 rounded-full mb-2 ">
                Tambah Data
              </button>
              <button className="bg-orange-900 text-white px-4 py-2 rounded-full max-w-[150px]">
                Batalkan
              </button>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>Close</button>
        </form>
      </dialog>
      <dialog id="edit-modal" className="modal">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">
            Edit Data Produk ID {editProduct?.id}
          </h3>
          <p className="font-semibold text-lg">Data Produk</p>
          <small className="py-2 block">Edit Data produk dengan benar</small>
          <hr className="py-3 text-black" />
          <form className="space-y-1 mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1">
                <label htmlFor="nama_produk" className="block">
                  Nama Produk
                </label>
                <input
                  type="text"
                  id="nama_produk"
                  className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                  placeholder="Nama produk anda"
                  value={editProduct?.nama || ""}
                />
              </div>
              <div className="flex-1">
                <label htmlFor="gambar_produk" className="block">
                  Gambar Produk
                </label>
                <input
                  type="file"
                  className="file-input file-input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div>
              <label htmlFor="harga_produk" className="block">
                Harga Produk
              </label>
              <input
                type="number"
                id="harga_produk"
                className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                placeholder="Harga produk anda"
                value={editProduct?.harga || ""}
              />
            </div>
            <div>
              <label htmlFor="stok_produk" className="block">
                Stok Produk
              </label>
              <input
                type="number"
                id="stok_produk"
                className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                placeholder="Sisa stok produk"
                value={editProduct?.stok || ""}
              />
            </div>
            <div className="flex flex-col items-center mt-4 ">
              <button className="bg-[#E0924A] text-white px-4 py-2 rounded-full mb-2 ">
                Simpan Perubahan
              </button>
              <button
                className="bg-orange-900 text-white px-4 py-2 rounded-full max-w-[150px]"
                onClick={() => setEditProduct(null)}
              >
                Batalkan
              </button>
            </div>
          </form>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setEditProduct(null)}
        >
          <button onClick={() => document.getElementById("edit-modal").close()}>
            Close
          </button>
        </form>
      </dialog>
      <dialog id="delete-modal" className="modal">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">
            Hapus Data Produk ID {deleteProduct?.id}
          </h3>
          <p className="font-semibold text-lg">
            Apakah Anda yakin ingin menghapus produk ini?
          </p>
          <hr className="py-3 text-black" />
          <div className="flex justify-end">
            <button
              className="bg-[#A30D11] text-white px-4 py-2 rounded-full mb-2 "
              onClick={() => {
                console.log("Product deleted:", deleteProduct);
                setDeleteProduct(null);
                document.getElementById("delete-modal").close();
              }}
            >
              Hapus
            </button>
          </div>
        </div>
        <form
          method="dialog"
          className="modal-backdrop"
          onClick={() => setDeleteProduct(null)}
        >
          <button
            onClick={() => document.getElementById("delete-modal").close()}
          >
            Close
          </button>
        </form>
      </dialog>
    </div>
  );
}

export default KelolaProduk;
