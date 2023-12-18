import axios from "axios";

export async function register(formData) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/auth/register`,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}

export async function login(formData) {
  try {
    const { data } = await axios.post(
      `${import.meta.env.VITE_PUBLIC_BACKEND_API}/auth/login`,
      formData,
      {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return data;
  } catch (error) {
    console.log(error);
  }
}
