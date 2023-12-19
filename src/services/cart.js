import Cookies from "js-cookie";
import axios from "axios";

export async function addCartItem(userId, productId, quantity, note) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/cart`,
      {
        user_id: userId,
        product_id: productId,
        quantity: quantity,
        note: note,
      },
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function getCartItemUser(id) {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/cart?id=${id}`,
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

export async function deleteCartItem(id) {
  try {
    const { data } = await axios.delete(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/cart/${id}`,
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
