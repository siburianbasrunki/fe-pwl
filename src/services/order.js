import Cookies from "js-cookie";
import axios from "axios";

export async function createOrder(userId, amount, status, payment) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/order`,
      {
        user_id: userId,
        amount: amount,
        status: status,
        payment: payment,
      },
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

export async function getOrder() {
  try {
    const { data } = await axios.get(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/order`,
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
