import Cookies from "js-cookie";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { parseJwt } from "../../utils/parseJwt";
import { login } from "../../services/auth";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const data = await login(formData);
      console.log(data);

      Cookies.set("token", data?.data.access_token, { expires: 7 });
      const token = Cookies.get("token");
      const user = parseJwt(token);
      const role = user?.role;

      if (role === "admin") {
        navigate("/admin/dashboard/produk");
      } else {
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full px-4 md:max-w-md">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form className="space-y-4" action="" onSubmit={handleLogin}>
            <div>
              <input
                type="email"
                placeholder="Email"
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    email: e.target.value,
                  }));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setFormData((prevFormData) => ({
                    ...prevFormData,
                    password: e.target.value,
                  }));
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#FFB054] text-white rounded-full focus:outline-none focus:ring focus:border-blue-500"
              >
                Login
              </button>
            </div>
            <div className="text-sm text-center">
              Don&apos;t have an account?{" "}
              <Link to="/register" className="text-orange-500 ">
                Register
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
