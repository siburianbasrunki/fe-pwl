import Cookies from "js-cookie";
import axios from "axios";

export async function getAllProduk() {
  try {
    const query = "";
    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/product?search=${query}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getDetailProduk(id) {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function createProduk(formData) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/product`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function updateProduk(formData, id) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/product/${id}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function deleteProduk(id) {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/product/${id}`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
