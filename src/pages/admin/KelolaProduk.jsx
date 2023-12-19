import { useEffect, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";

import {
  getAllProduk,
  createProduk,
  updateProduk,
  deleteProduk,
} from "../../services/admin/produk";

function KelolaProduk() {
  const [dataProduk, setDataProduk] = useState([]);
  const [editProduct, setEditProduct] = useState(null);
  const [deleteProduct, setDeleteProduct] = useState(null);
  const [formDataProduk, setFormDataProduk] = useState({
    name: "",
    price: 0,
    image: null,
    description: "",
    stock: 0,
    category: 0,
  });
  const [fotoProduk, setFotoProduk] = useState(null);

  const fetchData = async () => {
    const data_produk = await getAllProduk();
    setDataProduk([...data_produk.data]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onHandleSubmit = async (e) => {
    e.preventDefault();
    formDataProduk.image = fotoProduk;
    formDataProduk.category = 1;

    try {
      const data = await createProduk(formDataProduk);
      console.log(data);

      setFormDataProduk({
        name: "",
        price: 0,
        image: null,
        description: "",
        stock: 0,
        category: 0,
      });

      fetchData();
      setFotoProduk(null);
      document.getElementById("my_modal").close();
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleEdit = async (e, id) => {
    e.preventDefault();
    editProduct.image = fotoProduk;
    editProduct.category = 1;

    try {
      const data = await updateProduk(
        {
          name: editProduct.name,
          price: editProduct.price,
          image: editProduct.image,
          description: editProduct.description,
          stock: editProduct.stock,
          category: editProduct.category,
        },
        id
      );
      console.log(data);

      fetchData();
      setFotoProduk(null);
      document.getElementById("edit-modal").close();
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleDelete = async (e, id) => {
    e.preventDefault();

    try {
      const data = await deleteProduk(id);
      console.log(data);

      fetchData();
      document.getElementById("delete-modal").close();
    } catch (error) {
      console.log(error);
    }
  };

  const onHandleImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      const image = e.target.files[0];
      setFotoProduk(image);
    }
  };

  const openEditModal = (id) => {
    const product = dataProduk.find((product) => product.id === id);
    setEditProduct(product);

    document.getElementById("edit-modal").showModal();
  };

  const openDeleteModal = (id) => {
    const product = dataProduk.find((product) => product.id === id);
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
          {dataProduk.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.stock}</td>
              <td className="flex items-center gap-2">
                <CiEdit
                  className="text-2xl text-[#624DE3]"
                  onClick={() => openEditModal(item.id)}
                />
                <MdOutlineDelete
                  className="text-2xl text-[#A30D11]"
                  onClick={() => openDeleteModal(item.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <dialog id="my_modal" className="modal w-full p-8">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">Form Data Produk</h3>
          <p className="font-semibold text-lg">Data Produk</p>
          <small className="py-2 block">Isi Data produk dengan benar</small>
          <hr className="py-3 text-black" />
          <form
            className="space-y-1 mx-auto"
            action=""
            onSubmit={onHandleSubmit}
            encType="multipart/form-data"
          >
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
                  onChange={(e) =>
                    setFormDataProduk({
                      ...formDataProduk,
                      name: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <label htmlFor="deskripsi_produk" className="block">
                    Deskripsi Produk
                  </label>
                  <textarea
                    id="deskripsi_produk"
                    className="w-full max-w-xs border  drop-shadow-xl p-2"
                    placeholder="Deskripsi Produk Anda"
                    onChange={(e) =>
                      setFormDataProduk({
                        ...formDataProduk,
                        description: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="gambar_produk" className="block">
                    Gambar Produk
                  </label>
                  <input
                    type="file"
                    onChange={onHandleImage}
                    className="file-input file-input-bordered w-full max-w-xs"
                  />
                </div>
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
                onChange={(e) =>
                  setFormDataProduk({
                    ...formDataProduk,
                    price: e.target.value,
                  })
                }
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
                onChange={(e) => {
                  setFormDataProduk({
                    ...formDataProduk,
                    stock: e.target.value,
                  });
                }}
              />
            </div>
            <div className="flex flex-col items-center mt-4 ">
              <button
                className="bg-[#E0924A] text-white px-4 py-2 rounded-full mb-2"
                type="submit"
              >
                Tambah Data
              </button>
              <button
                className="bg-orange-900 text-white px-4 py-2 rounded-full max-w-[150px]"
                type="button"
                onClick={() => document.getElementById("my_modal").close()}
              >
                Batalkan
              </button>
            </div>
          </form>
        </div>
      </dialog>
      <dialog id="edit-modal" className="modal">
        <div className="modal-box bg-[#EFF0F6] w-11/12 max-w-3xl">
          <h3 className="font-bold text-lg text-center">
            Edit Data Produk ID {editProduct?.id}
          </h3>
          <p className="font-semibold text-lg">Data Produk</p>
          <small className="py-2 block">Edit Data produk dengan benar</small>
          <hr className="py-3 text-black" />
          <form
            className="space-y-1 mx-auto"
            action=""
            onSubmit={(event) => onHandleEdit(event, editProduct.id)}
            encType="multipart/form-data"
          >
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
                  value={editProduct?.name || ""}
                  onChange={(e) =>
                    setEditProduct({ ...editProduct, name: e.target.value })
                  }
                />
              </div>
              <div className="flex flex-col gap-3">
                <div className="flex-1">
                  <label htmlFor="deskripsi_produk" className="block">
                    Deskripsi Produk
                  </label>
                  <textarea
                    id="deskripsi_produk"
                    className="w-full max-w-xs border rounded-full drop-shadow-xl p-2"
                    placeholder="Deskripsi Produk Anda"
                    value={editProduct?.description || ""}
                    onChange={(e) => {
                      setEditProduct({
                        ...editProduct,
                        description: e.target.value,
                      });
                    }}
                  />
                </div>
                <div className="flex-1">
                  <label htmlFor="gambar_produk" className="block">
                    Gambar Produk
                  </label>
                  <input
                    type="file"
                    className="file-input file-input-bordered w-full max-w-xs"
                    onChange={onHandleImage}
                  />
                </div>
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
                value={editProduct?.price || ""}
                onChange={(e) => {
                  setEditProduct({ ...editProduct, price: e.target.value });
                }}
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
                value={editProduct?.stock || ""}
                onChange={(e) => {
                  setEditProduct({ ...editProduct, stock: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col items-center mt-4 ">
              <button
                className="bg-[#E0924A] text-white px-4 py-2 rounded-full mb-2 "
                type="submit"
              >
                Simpan Perubahan
              </button>
              <button
                className="bg-orange-900 text-white px-4 py-2 rounded-full max-w-[150px]"
                type="button"
                onClick={() => document.getElementById("edit-modal").close()}
              >
                Batalkan
              </button>
            </div>
          </form>
        </div>
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
              onClick={(e) => onHandleDelete(e, deleteProduct.id)}
            >
              Hapus
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default KelolaProduk;
